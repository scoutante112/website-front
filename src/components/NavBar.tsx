import React, { lazy, Suspense } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { fetcher } from '../api/http';
import { config } from '../config/config';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { MainNavRoutes } from './MainRouter';
import { UserIcon } from '@heroicons/react/24/outline';
import { useDark } from '../App';
import DarkModeIcon from './Elements/DarkModeIcon';
import Loading from './Elements/Loading';

const BasketIcon = lazy(() => import('./Elements/BasketIcon'));
const AccountMenu = lazy(() => import('./Elements/NavBar/AccountMenu'));
const LoggedMenu = lazy(() => import('./Elements/NavBar/LoggedMenu'));
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
                            <div className='flex relative px-2 lg:px-0 justify-end gap-x-6 my-auto'>

                                {logged ? (
                                    <Suspense fallback={<Loading/>}>
                                        <LoggedMenu data={data} mutate={mutate}/>
                                    </Suspense>
                                ) : <div>
                                    <NavLink title='Login and Register Button' className={`${dark ? 'text-white' : 'text-gray-600'} hidden xl:block hover:opacity-50 duration-200 px-2`} to={'/login'}>
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
                                <AccountMenu data={data} mutate={mutate}/>
                            ) : <div>
                                <NavLink className={`${dark ? 'text-white' : 'text-black'} hover:opacity-75 duration-200 px-2 flex py-4`}
                                    to={'/login'}>

                                    <Disclosure.Button className={'flex'}>
                                        <UserIcon title={'Login/Register'} className={'h-6 w-6 opacity-50 mx-1'} /> Login/Register
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
