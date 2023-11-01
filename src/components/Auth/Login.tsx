import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.min.css';
import loginOauth from '../../api/auth/loginOauth';
import Loading from '../Elements/Loading';
import { config } from '../../config/config';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import FinalAuthForm from './FinalAuthForm';
import { useDark } from '../../App';


export default function Login() {
    const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
    const [Isregistred, setIsRegistred] = useState<boolean>(true);
    const {dark} = useDark();

    const [email, setEmail] = useState<string>('');
    const { data, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged`,
        fetcher
    );
    if (!data || (error || isLoading)) {
        return <Loading/>;
    }
    if (data['status'] === true) {
        return <Navigate to="/" />;
    }

    document.title = 'Bagou450 - Sign In';
    return (
        <div className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>

            <section className='py-4 text-center mx-auto'>
                {Isregistred && email === '' ?
                    <LoginForm setEmail={setEmail} setIsRegistred={setIsRegistred}/>
                    : Isregistred && email !== '' ?
                        <FinalAuthForm email={email}/>
                        :
                        <RegisterForm setEmail={setEmail} email={email} setIsRegistred={setIsRegistred}/>


                }
            </section>


        </div>
    );
}





export function DiscordButton() {
    const [loading, setLoading] = useState(false);
    const discordLogin = (() => {
        setLoading(true);
        loginOauth('discord').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    return (
        <div className={'mx-auto mt-4'}>
            <button
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#7289DA] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7289DA]"
                disabled={loading} onClick={() => discordLogin()}>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="text-sm font-semibold leading-6">Discord</span>
            </button>
        </div>
    );
}

export function GoogleButtonClick() {
    const [loading, setLoading] = useState(false);
    const googleLogin = (() => {
        setLoading(true);
        loginOauth('google').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    return (
        <div className={'mx-auto mt-4'}>
            <button
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
                disabled={loading} onClick={() => googleLogin()}>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
            </button>
        </div>

    );
}


export function GitHubButtonClick() {
    const [loading, setLoading] = useState(false);
    const githubLogin = (() => {
        setLoading(true);
        loginOauth('github').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    return (
        <div className={'mx-auto mt-4'}>
            <button
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                disabled={loading} onClick={() => githubLogin()}>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
            </button>

        </div>
    );
}