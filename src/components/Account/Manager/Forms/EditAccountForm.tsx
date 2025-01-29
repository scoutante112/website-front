import { useState } from 'preact/compat';
import useSWR from 'swr';
import editAccount from '../../../../api/account/editAccount';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import debounce from 'lodash.debounce';
import { fetcher } from '../../../../api/http';
import linkOauth from '../../../../api/account/linkOauth';
import deleteOauth from '../../../../api/account/deleteOauth';
import { config } from '../../../../config/config';
import { useDark } from '../../../../App';
import Field from '../../../Elements/Form/Field';
import { useTranslation } from 'react-i18next';

type DiscordUser = {
    avatar: string;
    username: string;
    id: string;
    discriminator: string;
}
type GoogleUser = {
    avatar: string;
    username: string;
}
type GithubUser = {
    avatar: string;
    username: string;
    plan: string;
}
type DiscordAcc = {
    status: boolean;
    data: DiscordUser;
}
type GoogleAcc = {
    status: boolean;
    data: GoogleUser;
}
type GithubAcc = {
    status: boolean;
    data: GithubUser;
}

export type Account = {
    email: string;
    name: string;
    role: number;
    discord: DiscordAcc;
    google: GoogleAcc;
    newsletter: boolean;
    github: GithubAcc;
}


export default function EditAccountForm({ account }: { account: Account }) {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, showError] = useState<string>();
    const [error2, showError2] = useState<string>();
    const { dark } = useDark();
    const { t } = useTranslation();

    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );
    const changeEmail = debounce((value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(t('account.form1.error.email'));
            return;
        }

        showError('');
        if (value === account.email) {
            return;
        }
        setLoading(true);
        editAccount(value, 'email').then((data) => {
            if (data.data['status'] === 'error') {
                toast.error(data.data['message'], {
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
                toast.success(t('account.form1.toast1'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });


            }
            setLoading(false);
            mutate();
        }).catch(() => {
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
            setLoading(false);
        });
    }, 500);
    const changeUsername = debounce((value: string) => {
        if (value === '') {
            showError2(t('account.form1.error.username'));
            return;
        }

        showError2('');
        if (value === account.name) {
            return;
        }
        setLoading(true);
        editAccount(value, 'name').then((data) => {
            if (data.data['status'] === 'error') {
                toast.error(data.data['message'], {
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
                toast.success(t('account.form1.toast2'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });


            }
            setLoading(false);
            mutate();
        }).catch(() => {
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
            setLoading(false);
        });
    }, 500);
    return (
        <div className='px-4 py-6 sm:p-8'>
            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <Field className='sm:col-span-4' name={'Email'} id={'email'} type={'email'}
                       placeholder='mail.exemple.com' required
                       onChange={(e: { target: { value: string; }; }) => changeEmail(e.target ? (e.target as HTMLInputElement).value : '')}
                       defaultValue={account.email} />
                <Field className='sm:col-span-4' name={'Username'} id={'username'} type={'text'} placeholder='Micheal'
                       required onChange={(e: { target: { value: string; }; }) => changeUsername(e.target ? (e.target as HTMLInputElement).value : '')}
                       defaultValue={account.name} />
            </div>

        </div>

    );
}

export function Discord({ account }: { account: Account }) {
    const discord = account.discord;
    const { dark } = useDark();

    const [loading, setLoading] = useState(false);
    const { mutate } = useSWR(
        'https://api-mc.labnat.se/api/client/web/auth/isLogged?infos=true',
        fetcher,
    );
    const { t } = useTranslation();

    const discordLink = (() => {
        setLoading(true);
        linkOauth('discord').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    const discordUnlink = (() => {
        setLoading(true);
        deleteOauth('discord').then((data) => {
            if (data.data['status'] === 'success') {
                toast.success(`${t('account.form1.utils.unlink1')} Discord ${t('account.form1.utils.unlink2')}!`, {
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
                setLoading(false);
            } else {
                toast.error(`Error: ${data.data['message']}`, {
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
                setLoading(false);
            }
        });
    });
    return (
        <div>
            <h2 className={`${dark ? 'text-slate-200' : 'text-black'} text-2xl my-4 text-center`}>{discord.status ? t('account.form1.discord.title1') : t('account.form1.discord.title2')}</h2>
            <div className={'mx-auto text-center mt-4 flex space-x-8 w-full'}>
                {discord.status ?
                    (<div className={'mx-auto'}>

                            <div>
                                <div className='avatar'>
                                    <img alt={'Discord avatar'} className='inline-block h-24 w-24 rounded-full'
                                         src={discord.data.avatar} />
                                </div>
                            </div>


                            <div>
                                <h2 className={`${dark ? 'text-slate-300' : 'text-black'} my-2`}>{discord.data.username}{discord.data.discriminator !== '0' && `#${discord.data.discriminator}`}</h2>
                                <button
                                    type='button'
                                    disabled={loading}
                                    onClick={() => discordLink()}
                                    className='rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                >
                                    {t('account.form1.discord.unlink')}
                                </button>
                            </div>
                        </div>
                    )
                    :
                    <div className={'mx-auto'}>
                        <button
                            type='button'
                            disabled={loading}
                            onClick={() => discordLink()}
                            className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            {t('account.form1.discord.link')}
                        </button>
                    </div>

                }
            </div>

        </div>
    );
}

export function Google({ account }: { account: Account }) {
    const google = account.google;
    const [loading, setLoading] = useState(false);
    const { dark } = useDark();
    const { mutate } = useSWR(
        'https://api-mc.labnat.se/api/client/web/auth/isLogged?infos=true',
        fetcher,
    );
    const { t } = useTranslation();

    const googleLink = (() => {
        setLoading(true);
        linkOauth('google').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    const googleUnlink = (() => {
        setLoading(true);
        deleteOauth('google').then((data) => {
            if (data.data['status'] === 'success') {
                toast.success(`${t('account.form1.utils.unlink1')} Google ${t('account.form1.utils.unlink2')}!`, {
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
                setLoading(false);
            } else {
                toast.error(`Error: ${data.data['message']}`, {
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
                setLoading(false);
            }
        });
    });
    return (
        <div>
            <h2 className={`${dark ? 'text-slate-200' : 'text-black'} text-2xl my-4 text-center`}>{google.status ? t('account.form1.google.title1') : t('account.form1.google.title2')}</h2>
            <div className={'mx-auto text-center mt-4 flex space-x-8 w-full'}>
                {google.status ?
                    (<div className={'mx-auto'}>

                            <div>
                                <div className='avatar'>
                                    <img alt={'Google Avatar'} className='inline-block h-24 w-24 rounded-full'
                                         src={google.data.avatar} />
                                </div>
                            </div>


                            <div>
                                <h2 className={`${dark ? 'text-slate-300' : 'text-black'} my-2`}>{google.data.username}</h2>
                                <button
                                    type='button'
                                    disabled={loading}
                                    onClick={() => googleUnlink()}
                                    className='rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                >
                                    {t('account.form1.google.unlink')}
                                </button>
                            </div>
                        </div>
                    )
                    :
                    <div className={'mx-auto'}>
                        <button
                            type='button'
                            disabled={loading}
                            onClick={() => googleLink()}
                            className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            {t('account.form1.google.link')}
                        </button>
                    </div>

                }
            </div>

        </div>
    );
}

export function Github({ account }: { account: Account }) {
    const github = account.github;
    const { dark } = useDark();
    const [loading, setLoading] = useState(false);
    const { mutate } = useSWR(
        'https://api-mc.labnat.se/api/client/web/auth/isLogged?infos=true',
        fetcher,
    );
    const githubLink = (() => {
        setLoading(true);
        linkOauth('github').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    const { t } = useTranslation();

    const githubUnlink = (() => {
        setLoading(true);
        deleteOauth('github').then((data) => {
            if (data.data['status'] === 'success') {
                toast.success(`${t('account.form1.utils.unlink1')} Github ${t('account.form1.utils.unlink2')}!`, {
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
                setLoading(false);
            } else {
                toast.error(`Error: ${data.data['message']}`, {
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
                setLoading(false);
            }
        });
    });
    return (
        <div>
            <h2 className={`${dark ? 'text-slate-200' : 'text-black'} text-2xl my-4 text-center`}>{github.status ? t('account.form1.github.title1') : t('account.form1.github.title2')}</h2>
            <div className={'mx-auto text-center mt-4 flex space-x-8 w-full'}>
                {github.status ?
                    (<div className={'mx-auto'}>

                            <div>
                                <div className='avatar'>
                                    <img alt={'Github Avatar'} className='inline-block h-24 w-24 rounded-full'
                                         src={github.data.avatar} />
                                </div>
                            </div>


                            <div>
                                <h2 className={`${dark ? 'text-slate-300' : 'text-black'} my-2`}>{github.data.username} {github.data.plan === 'pro' &&
                                    <span
                                        className={`${dark ? 'bg-bg450-logodisabled text-white ring-bg450-logohover' : 'bg-purple-50 text-purple-700 ring-purple-700/10'} inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset `}>Pro</span>}</h2>
                                <button
                                    type='button'
                                    disabled={loading}
                                    onClick={() => githubUnlink()}
                                    className='rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                >
                                    {t('account.form1.github.unlink')}
                                </button>
                            </div>
                        </div>
                    )
                    :
                    <div className={'mx-auto'}>
                        <button
                            type='button'
                            disabled={loading}
                            onClick={() => githubLink()}
                            className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            {t('account.form1.github.link')}
                        </button>
                    </div>

                }
            </div>

        </div>
    );
}
