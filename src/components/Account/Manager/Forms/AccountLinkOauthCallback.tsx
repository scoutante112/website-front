import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../api/http';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Loading from '../../../Elements/Loading';
import AccountContainer from '../AccountContainer';
import { config } from '../../../../config/config';
import { useDark } from '../../../../App';
import { useTranslation } from 'react-i18next';


export default function AccountLinkOauthCallback() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const { t } = useTranslation();

    const {dark} = useDark();
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const code = urlParams.get('code');

    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    useEffect(() => {
        fetchData();
    }, []);
    if(!code || !type) {
        return (
            <div className={'flex flex-col items-center justify-center h-full'}>
                <AccountContainer/>
            </div>
        );
    }
    const fetchUrl = `${config.privateapilink}/account/oauthCallback?token=${encodeURIComponent(code)}&type=${type}`;
    const fetchData = async () => {
        if(!sent) {
            setSent(true);
            try {
                const response = await fetch(fetchUrl, {headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Cookies.get('access_token')}`
                }});
                const data = await response.json();
                mutate();
                setLoading(false);
                if (data.status === 'success') {
                    toast.success(`${t('account.oauthcall.taost1')} ${type} ${t('account.oauthcall.taost2')}`, {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                    mutate();
                } else {
                    const message = data.message ? data.message : t('account.utils.errormessage');
                    toast.error(`Error: ${message}`, {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                    mutate();
                }
            } catch (error) {
                setLoading(false);
                toast.error(t('account.utils.errormessage'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                mutate();
            }
        }
        
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={'flex flex-col items-center justify-center h-full'}>
            <AccountContainer/>
        </div>
    );
}
