import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../../api/http';
import tokenLogin from '../../api/auth/tokenLogin';
import { toast } from 'react-toastify';
import Login from './Login';
import Loading from '../Elements/Loading';
import { config } from '../../config/config';
import { useDark } from '../../App';

const OauthCallback = () => {
    const {dark} = useDark();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const code = urlParams.get('code');
    const {data, error, isLoading} = useSWR(`${config.privateapilink}/auth/oauthloginCallback?token=${code}&type=${type}`, fetcher);
    if(!data || (error || isLoading)) {
        return <Loading/>;
    }
    if(data['status'] === 'error' || !data.data) {
        let message = '';
        if(data['status'] !== 'error') {
            message = 'A unexcepted error happend.';
        } else {
            message = data['message'];
        }
        return (
            <Login loginError={message}/>
        );
    }
    const sendLogin = (token: string) => {
        tokenLogin(token).then((data) => {
            if(data.data['status'] === 'error') {
                toast.error('Error. Can\'t get your account data with this token.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            } else {
                document.cookie = `access_token=${data.data['data']['access_token']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
                toast.success('Success! Your are now logged.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                navigate('/');
                window.location.reload();
            }
            setLoading(false);
        });
    };
    return (
        <div className={'flex flex-col items-center justify-center h-full'}>
            <img src={data.data['google_id'] ? data.data['avatar'] : `https://cdn.discordapp.com/avatars/${data.data['discord_id']}/${data.data['avatar']}.png`} alt='test'
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data['name']}`;
                } }
                className={'rounded-md h-64 w-64 my-4'} />
            <p className={'text-4xl text-black mb-2'}>Login as {data.data['name']}</p>
            <button className={'flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'} disabled={loading} onClick={() => sendLogin(data.data['access_token'])}>Login</button>
        </div>
    );
};

export default OauthCallback;