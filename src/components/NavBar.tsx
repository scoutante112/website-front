// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment, lazy, Suspense } from 'preact/compat';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { fetcher } from '../api/http';
import { config } from '../config/config';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { MainNavRoutes } from './MainRouter';
import { UserIcon } from '@heroicons/react/24/outline';
import { useDark } from '../App';
import DarkModeIcon from './Elements/DarkModeIcon';
import Loading from './Elements/Loading';
import BasketIcon from './Elements/BasketIcon';
import LanguageChanger from './Elements/LanguageChanger';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const AccountMenu = lazy(() => import('./Elements/NavBar/AccountMenu'));
const LoggedMenu = lazy(() => import('./Elements/NavBar/LoggedMenu'));
export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
export default function NavBar() {
    const navigate = useNavigate();
    const { dark } = useDark();
    const language = Cookies.get('lang') || 'en';
    const { t } = useTranslation();

    const location = useLocation();
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );


    if (!data || (error || isLoading)) {
        return <></>;
    }
    const logged = data.status;
    if(window.location.pathname.startsWith('/licenses')  && !logged) {
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
                                <div className='flex flex-shrink-0 items-center sm:space-x-8'>
                                    {MainNavRoutes.map((route, key) => {
                                        if (!route.dropdown) {
                                            return (
                                                <Link to={`/${language}${route.link}`} key={key}
                                                    className={`${dark ? 'text-white' : 'text-gray-900'} inline-flex items-center hover:opacity-75 duration-200 px-1 pt-1 text-sm font-medium ${location.pathname === route.link && 'border-b-2 border-bg450-logo hover:opacity-100'}`}>
                                                    {t(`navbar.routes.${route.name}`)}
                                                </Link>
                                            );
                                        } else {
                                            return (
                                                <Menu as="div" className="relative inline-block text-left" key={key}>
                                                    <div>
                                                        <Menu.Button
                                                            className={`${dark ? 'text-white' : 'text-gray-900'} inline-flex items-center duration-200 px-1 pt-1 text-sm font-medium ${location.pathname === route.link && 'border-b-2 border-bg450-logo hover:opacity-100'}`}>
                                                            {t(`navbar.routes.${route.name}`)}
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} opacity-100 absolute left-0 z-99 mt-2 w-48 origin-top-right rounded-md py-1 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                                                            {route.dropdownContent.map((dropdownRoute, dropdownKey) => (
                                                                <Menu.Item key={dropdownKey}>
                                                                    <Link
                                                                        to={`/${language}${dropdownRoute.link}`}
                                                                        className={`${dark ? 'hover:bg-bg450-inputdark opacity-100 text-white' : 'text-gray-900 hover:bg-gray-200 opacity-100'} block px-4 py-2 text-sm`}

                                                                    >
                                                                        {t(`navbar.routes.${dropdownRoute.name}`)}
                                                                    </Link>
                                                                </Menu.Item>
                                                            ))}
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            );
                                        }
                                    })}
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
                                <LanguageChanger/>
                                <DarkModeIcon/>
                            </div>

                        </div>


                    </div>


                    <Disclosure.Panel as='nav' className='xl:hidden' aria-label='Global'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {MainNavRoutes.map((routes, key) => (
                                <NavLink to={routes.link} key={key}>

                                    <Disclosure.Button
                                        key={key}
                                        as='a'
                                        className={classNames(
                                            location.pathname === routes.link ? `${dark ? 'bg-bg450-lessdark' : 'bg-gray-900'} text-white` : `${dark ? 'text-white' : 'text-black'} hover:opacity-95`,
                                            'block rounded-md py-2 px-3 text-base font-medium',
                                        )}
                                    >
                                        {t(`navbar.routes.${routes.name}`)}
                                    </Disclosure.Button>
                                </NavLink>
                            ))}
                        </div>
                        <div className="border-t border-gray-700">
                            {logged ? (
                                <Suspense fallback={<Loading/>}><AccountMenu data={data} mutate={mutate}/></Suspense>
                            ) : <div>
                                <NavLink className={`${dark ? 'text-white' : 'text-black'} hover:opacity-75 duration-200 px-2 flex py-4`}
                                    to={'/login'}>

                                    <Disclosure.Button className={'flex'}>
                                        <UserIcon title={'Login/Register'} className={'h-6 w-6 opacity-50 mx-1'} /> {t('navbar.login')}
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
