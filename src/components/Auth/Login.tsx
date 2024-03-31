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
import { Helmet } from 'react-helmet';


export default function Login() {
    const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
    const [Isregistred, setIsRegistred] = useState<boolean>(true);
    const {dark} = useDark();
    document.title = Isregistred ? 'Bagou450 - Login' : 'Bagou450 - Register';

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
            <Helmet>
                <meta name='description' content={'Access Bagou450\'s combined Login and Registration page to create an account or sign in securely. Join our community and unlock exclusive features and benefits.'} />

                <meta name="twitter:description" content={'Access Bagou450\'s combined Login and Registration page to create an account or sign in securely. Join our community and unlock exclusive features and benefits.'} />

                <meta property="og:description" content={'Access Bagou450\'s combined Login and Registration page to create an account or sign in securely. Join our community and unlock exclusive features and benefits.'} />
            </Helmet>
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
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#7289DA] duration-50 hover:opacity-70 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7289DA]'
                disabled={loading} onClick={() => discordLogin()}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='h-5 w-5'
                    viewBox='0 0 16 16'>
                    <path
                        d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612' />
                </svg>

                <span className='text-sm font-semibold leading-6'>Discord</span>
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
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] duration-50 hover:opacity-70 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]'
                disabled={loading} onClick={() => googleLogin()}>
                <svg xmlns='http://www.w3.org/2000/svg' className={'w-5 h-5'} fill='currentColor' viewBox='0 0 16 16'>
                    <path
                        d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                </svg>

                <span className='text-sm font-semibold leading-6'>Google</span>
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
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] duration-50 hover:opacity-70 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                disabled={loading} onClick={() => githubLogin()}>
                <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                        fillRule='evenodd'
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
            </button>

        </div>
    );
}


export function PatreonButtonClick() {
    const [loading, setLoading] = useState(false);
    const githubLogin = (() => {
        setLoading(true);
        loginOauth('patreon').then((data) => {
            window.location.href = data.data.data.url;

        });
    });
    return (
        <div className={'mx-auto mt-4'}>
            <button
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] duration-50 hover:opacity-70 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                disabled={loading} onClick={() => githubLogin()}>
                <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                        fillRule='evenodd'
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="text-sm font-semibold leading-6">GPatreon</span>
            </button>

        </div>
    );
}