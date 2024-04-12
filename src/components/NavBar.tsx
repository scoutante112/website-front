// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment } from 'preact/compat';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { fetcher } from '../api/http';
import { config } from '../config/config';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useDark } from '../App';

import Fullnav, { ProfileDropdown } from './Elements/NavBar/Fullnav';
import Mobilenav from './Elements/NavBar/Mobilenav';


export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
export default function NavBar() {
    const navigate = useNavigate();
    const { dark } = useDark();

    const { data, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );


    if (!data || (error || isLoading)) {
        return <></>;
    }
    const logged = data.status;
    if(/^\/\w+\/licenses/.test(window.location.pathname) && !logged) {
        navigate('/login');
        toast.error('You need to be logged for see this page.', {
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

    return (
        <Disclosure as="header" className={`${dark ? 'bg-bg450-dark' : 'bg-white'} shadow-md w-full z-5`}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-screen px-2 sm:px-4 lg:px-8 z-5">
                        <div className='relative h-16 grid grid-cols-3'>
                            {/* Pc Routes list */}
                            <Fullnav/>

                            {/* Mobile menu */}
                            <div className='relative z-10 flex items-center xl:hidden'>
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>Open menu</span>
                                    {open ? (
                                        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Pc + Mobile logo */}
                            <div className='relative flex lg:px-0 lg:justify-center w-full'>
                                <Link to={'/'} className='w-full sm:max-w-xs my-auto'>
                                    <img
                                        sizes='(max-width: 1860px) 100vw, 1860px'
                                        src='https://cdn.bagou450.com/assets/img/logo/Logo_Bagou450_Full.svg'
                                        className={'block h-8 w-auto mx-auto'}
                                        width='1860'
                                        height='930'
                                        loading={'lazy'}
                                        alt={'Logo Bagou450'} />

                                </Link>
                            </div>

                            {/* Pc Profile dropdown */}
                            <ProfileDropdown/>

                        </div>


                    </div>


                    <Disclosure.Panel as='nav' className='xl:hidden' aria-label='Global'>
                        <Mobilenav/>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    );
}
