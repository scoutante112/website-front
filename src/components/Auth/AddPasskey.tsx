import React, { useEffect } from 'react';
import Loading from '../Elements/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import addPasskey from '../../api/auth/passkeys/addPasskey';
import useSWR from 'swr';
import { config } from '../../config/config';
import { fetcher } from '../../api/http';
import { toast } from 'react-toastify';
import { useDark } from '../../App';


export default function AddPasskey() {
    const { token } = useParams();
    const navigate = useNavigate();
    const {dark} = useDark();
    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    if(!token) {
        navigate('/');
        return <></>;
    }
    useEffect(() => {
        addPasskey(token).then((data) => {
            document.cookie = `access_token=${data.data.data}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
            navigate('/');
            mutate();
            toast.success('You are now logged in, and your passkey has been successfully linked to your account!', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });
        }).catch((e) => {
            console.error(e);
            toast.error('An unexpected error occurred. Code: BagAuth-057', {
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
        });
    }, []);
    return (
        <Loading/>
    );
}