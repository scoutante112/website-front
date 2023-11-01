import React, { Fragment } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logout from '../api/auth/logout';
import useSWR from 'swr';
import md5 from 'blueimp-md5';
import { fetcher } from '../api/http';
import { config } from '../config/config';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { MainNavRoutes } from './MainRouter';
import BasketIcon from './Elements/BasketIcon';
import { UserIcon } from '@heroicons/react/24/outline';
import { useDark } from '../App';
import DarkModeIcon from './Elements/DarkModeIcon';

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
export default function NavBar() {
    const navigate = useNavigate();
    const { dark } = useDark();

    const location = useLocation();
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );


    if (!data || (error || isLoading)) {
        return <></>;
    }
    const logged = data.status;
    if(window.location.pathname === '/licenses' && !logged) {
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
                            <div className='hidden relative xl:flex px-2 lg:px-0 justify-start'>
                                <div className='flex flex-shrink-0 items-center sm:space-x-8 opacity-75'>
                                    {MainNavRoutes.map((routes, key) => (
                                        <Link to={routes.link} key={key}
                                            className={`${dark ? 'text-white' : 'text-gray-900'} inline-flex items-center hover:opacity-75 duration-200 px-1 pt-1 text-sm font-medium ${location.pathname === routes.link && 'border-b-2 border-bg450-logo hover:opacity-100'} `}>{routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}</Link>
                                    ))}
                                    <a href={'https://help.bagou450.com'} rel={'follow'} className={`inline-flex items-center hover:opacity-75 duration-200 px-1 pt-1 text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>Helpdesk</a>

                                </div>
                            </div>

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
                            <div className='relative flex lg:px-0 justify-center w-full'>
                                <Link to={'/'} className='w-full sm:max-w-xs my-auto'>
                                    <img
                                        src={'https://cdn.bagou450.com/assets/img/logo_full_colored.webp'}
                                        className={'h-8 w-auto mx-auto'}
                                        alt={'Logo Bagou450'} />
                                </Link>
                            </div>

                            {/* Pc Profile dropdown */}
                            <div className='flex relative px-2 lg:px-0 justify-end gap-x-6 my-auto'>

                                {logged ? (

                                    <Menu as='div' className='relative ml-3 '>
                                        <div className={'h-full relative hidden lg:flex items-center'}>
                                            <Menu.Button
                                                className='my-auto relative hidden lg:flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            >
                                                <span className='absolute -inset-1.5' />
                                                <span className='sr-only'>Open user menu</span>
                                                <img
                                                    src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=404`}
                                                    alt='test'
                                                    onError={({ currentTarget }) => {
                                                        currentTarget.onerror = null; // prevents looping
                                                        currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data.name}`;
                                                    }}
                                                    className={'rounded-full h-10 w-10 hover:opacity-75 '}
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-200'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'
                                        >
                                            <Menu.Items
                                                className={`${dark ? 'bg-bg450-dark' : 'bg-white'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>

                                                <Menu.Item>
                                                    <Link
                                                        className={`${dark ? 'hover:bg-bg450-inputdark' : 'hover:bg-gray-200'} block px-4 py-2 text-sm `}
                                                        to={'/account/'}><p className={dark ? 'text-slate-200' : 'text-black'}>My account</p>
                                                    </Link>
                                                    
                                                </Menu.Item>
                                                <Menu.Item onClick={() => logout().then(() => {
                                                    toast.success('You are now logged out.', {
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
                                                    mutate();
                                                })}>
                                                    <p className={`${dark ? 'hover:bg-bg450-inputdark' : 'hover:bg-gray-200'} text-red-500 block px-4 py-2 text-sm `}>
                                                        Logout
                                                    </p>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : <div>
                                    <NavLink className={`${dark ? 'text-white' : 'text-gray-600'} hidden xl:block hover:opacity-50 duration-200 px-2`} to={'/login'}>
                                        <UserIcon className={'h-6 w-6 opacity-75'} />
                                    </NavLink>

                                </div>
                                }
                                <BasketIcon />
                                <DarkModeIcon/>
                            </div>

                        </div>


                    </div>


                    <Disclosure.Panel as='nav' className='xl:hidden' aria-label='Global'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {MainNavRoutes.map((routes, key) => (
                                <NavLink to={routes.link}>

                                    <Disclosure.Button
                                        key={key}
                                        as='a'
                                        className={classNames(
                                            location.pathname === routes.link ? `${dark ? 'bg-bg450-lessdark' : 'bg-gray-900'} text-white` : `${dark ? 'text-white' : 'text-black'} hover:opacity-95`,
                                            'block rounded-md py-2 px-3 text-base font-medium',
                                        )}
                                    >
                                        {routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}

                                    </Disclosure.Button>
                                </NavLink>
                            ))}
                        </div>
                        <div className="border-t border-gray-700">
                            {logged ? (
                                <div className={'flex'}>
                                    <NavLink
                                        to={'/account/'}
                                        className='relative my-4 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                    >
                                        <span className='absolute -inset-1.5' />
                                        <span className='sr-only'>Open user menu</span>
                                        <img
                                            src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=404`}
                                            alt='test'
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data.name}`;
                                            }}
                                            className={'rounded-full h-10 w-10 hover:opacity-75 mx-2'}
                                        /> <span className={`${dark ? 'text-slate-300' : 'text-black'} my-auto`}>My account</span>
                                    </NavLink>
                                    <NavLink to={'/'} onClick={() => logout().then(() => {
                                        toast.success('You are now logged out.', {
                                            position: 'bottom-right',
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: dark ? 'dark' : 'light',
                                        }); mutate();})} className={'block px-4 py-2 text-sm text-red-700 ml-auto my-auto'}>Logout</NavLink>
                                    
                                </div>
                            ) : <div>
                                <NavLink className={`${dark ? 'text-white' : 'text-black'} hover:opacity-75 duration-200 px-2 flex py-4`}
                                    to={'/login'}>

                                    <Disclosure.Button className={'flex'}>
                                        <UserIcon className={'h-6 w-6 opacity-50 mx-1'} /> Login/Register
                                    </Disclosure.Button>
                                </NavLink>


                            </div>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    );
}
