import React, { ElementType, createContext, Fragment, lazy, Suspense, useState } from 'react';
import Loading from '../Elements/Loading';
import { Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
    ArrowLongLeftIcon, BellIcon, ChevronDownIcon,
    ClipboardIcon,
    HomeIcon, MagnifyingGlassIcon,
    ShoppingBagIcon,
    TicketIcon, UserCircleIcon,
} from '@heroicons/react/24/solid';
import NotFoundPage from '../NotFoundPage';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { BiRightArrow } from 'react-icons/bi';
import useSWR from 'swr';
import { config } from '../../config/config';
import { fetcher } from '../../api/http';
import { Account as Acc } from './Manager/Forms/EditAccountForm';
import md5 from 'blueimp-md5';
import logout from '../../api/auth/logout';
import './AccountCss.css';
import { toast } from 'react-toastify';
import BlogsContainer from '../Admin/Blogs/BlogsContainer';
import UsersContainer from '../Admin/Users/UsersContainer';
import ProductsContainer from '../Admin/Products/ProductsContainer';
import LicensesContainer from '../Admin/Licenses/LicensesContainer';
import DarkModeIcon from '../Elements/DarkModeIcon';
import { useDark } from '../../App';

const AccountContainer = lazy(() => import('./Manager/AccountContainer'));
const AccountLicenseContainer = lazy(() => import('./License/AccountLicenseContainer'));
const AccountOrderContainer = lazy(() => import('./Order/AccountOrderContainer'));
const AccountLinkOauthCallback = lazy(() => import('./Manager/Forms/AccountLinkOauthCallback'));
const TicketContainer = lazy(() => import('./Ticket/TicketContainer'));
const TicketViewContainer = lazy(() => import('./Ticket/TicketViewContainer'));
interface RouteItem {
    name: string;
    link: string;
    component: JSX.Element;
    icon?: ElementType;
}
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
export const NavContext = createContext('');
export const routesList: RouteItem[] = [
    {
        name: 'Account',
        link: '/',
        component: <AccountContainer />,
        icon: HomeIcon
    },
    {
        name: 'Oauth',
        link: '/manage/OauthCallback',
        component: <AccountLinkOauthCallback />
    },
    {
        name: 'Licenses',
        link: '/licenses',
        component: <AccountLicenseContainer />,
        icon: ClipboardIcon
    },
    {
        name: 'Orders',
        link: '/orders',
        component: <AccountOrderContainer />,
        icon: ShoppingBagIcon
    },
    {
        name: 'Tickets',
        link: '/tickets',
        component: <TicketContainer />,
        icon: TicketIcon
    },
    {
        name: 'Tickets-info',
        link: '/ticket/:id',
        component: <TicketViewContainer />
    }
];
export const AdminRoutes: RouteItem[] = [
    {
        name: 'blogs',
        link: '/admin/blogs',
        component: <BlogsContainer />,
        icon: ClipboardIcon
    },
    {
        name: 'users',
        link: '/admin/users',
        component: <UsersContainer />,
        icon: ClipboardIcon
    },
    {
        name: 'products',
        link: '/admin/products',
        component: <ProductsContainer />,
        icon: ClipboardIcon
    },
    {
        name: 'licenses',
        link: '/admin/licenses',
        component: <LicensesContainer />,
        icon: ClipboardIcon
    },
];


export default function AccountRouter() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [active, setActive] = useState<string>('');
    const [admin, setAdmin] = useState<boolean>(window.location.pathname.startsWith('/account/admin'));
    const {dark} = useDark();
    const navigate = useNavigate();

    const infos = true;

    const { data, error, mutate, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=${infos}`,
        fetcher
    );
    if (!data || (error || isLoading)) {
        return <></>;
    }
    const myaccount: Acc = {
        role: data.data.role,
        name: data.data.name,
        email: data.data.email,
        discord: data.data.discord,
        google: data.data.google,
        github: data.data.github
    };

    if(!myaccount.role) {
        setAdmin(false);
    }
    return (
        <NavContext.Provider value={{ active, setActive }}>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <NavLink to={'/'}>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://cdn.bagou450.com/assets/img/logo_full_colored.webp"
                                                    alt="Bagou450"
                                                />
                                            </NavLink>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {admin && AdminRoutes.map((route) => (
                                                            route.icon && (
                                                                <li key={route.name}>
                                                                    <NavLink
                                                                        to={`/account${route.link}`}
                                                                        className={classNames(
                                                                            active === `/account${route.link}`
                                                                                ? dark ? 'bg-bg450-inputdark text-slate-200' : 'bg-gray-50 text-blue-600'
                                                                                : dark ? 'text-slate-200 hover:text-slate-300 hover:bg-bg450-lessdark' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                        )}
                                                                    >
                                                                        <route.icon
                                                                            className={classNames(
                                                                                active === `/account${route.link}` ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
                                                                                'h-6 w-6 shrink-0'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                        {route.name}
                                                                    </NavLink>
                                                                </li>
                                                            )
                                                        ))}
                                                        {!admin && routesList.map((route) => (
                                                            route.icon && (
                                                                <li key={route.name}>
                                                                    <NavLink
                                                                        to={`/account${route.link}`}
                                                                        className={classNames(
                                                                            active === `/account${route.link}`
                                                                                ? dark ? 'bg-bg450-inputdark text-slate-200' : 'bg-gray-50 text-blue-600'
                                                                                : dark ? 'text-slate-200 hover:text-slate-300 hover:bg-bg450-lessdark' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                        )}
                                                                    >
                                                                        <route.icon
                                                                            className={classNames(
                                                                                active === `/account${route.link}` ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
                                                                                'h-6 w-6 shrink-0'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                        {route.name}
                                                                    </NavLink>
                                                                </li>
                                                            )
                                                        ))}
                                                    </ul>
                                                </li>
                                                {myaccount.role &&
                                                    <li className="mt-auto">
                                                        <button onClick={() => setAdmin(!admin)} className="w-full group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                                                            <UserCircleIcon
                                                                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                                                                aria-hidden="true"
                                                            />
                                                            {admin ? 'Return to user View' : 'Go to admin view'}
                                                        </button>
                                                    </li>
                                                }
                                                <li className="mt-auto">

                                                    <NavLink
                                                        to="/"
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                                    >
                                                        <BiRightArrow
                                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                                                            aria-hidden="true"
                                                        />
                                                        Back the the shop
                                                    </NavLink>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className={`${dark ? 'bg-bg450-dark border-bg450-logo' : 'bg-white border-gray-200'} flex grow flex-col gap-y-5 overflow-y-auto border-r px-6 pb-4`}>
                        <NavLink to={'/'} className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://cdn.bagou450.com/assets/img/logo_full_colored.webp"
                                alt="Bagou450"
                            />
                        </NavLink>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {admin && AdminRoutes.map((route) => (
                                            route.icon && (
                                                <li key={route.name}>
                                                    <NavLink
                                                        to={`/account${route.link}`}
                                                        className={classNames(
                                                            active === `/account${route.link}`
                                                                ? dark ? 'bg-bg450-inputdark text-slate-200' : 'bg-gray-50 text-blue-600'
                                                                : dark ? 'text-slate-200 hover:text-slate-300 hover:bg-bg450-lessdark' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                        )}
                                                    >
                                                        <route.icon
                                                            className={classNames(
                                                                active === `/account${route.link}` ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
                                                                'h-6 w-6 shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {route.name}
                                                    </NavLink>
                                                </li>
                                            )
                                        ))}
                                        {!admin && routesList.map((route) => (
                                            route.icon && (
                                                <li key={route.name}>
                                                    <NavLink
                                                        to={`/account${route.link}`}
                                                        className={classNames(
                                                            active === `/account${route.link}`
                                                                ? dark ? 'bg-bg450-inputdark text-slate-200' : 'bg-gray-50 text-blue-600'
                                                                : dark ? 'text-slate-200 hover:text-slate-300 hover:bg-bg450-lessdark' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                        )}
                                                    >
                                                        <route.icon
                                                            className={classNames(
                                                                active === `/account${route.link}` ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
                                                                'h-6 w-6 shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {route.name}
                                                    </NavLink>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                </li>

                                <li className="mt-auto">
                                    {myaccount.role ?
                                        <li className="mt-auto">
                                            <button onClick={() => setAdmin(!admin)} className={`${dark ? 'text-slate-200 hover:text-slate-300 hover:bg-bg450-lessdark' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}>
                                                <UserCircleIcon
                                                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                                                    aria-hidden="true"
                                                />
                                                {admin ? 'Return to user View' : 'Go to admin view'}
                                            </button>
                                        </li>
                                        : <></>}
                                    <NavLink
                                        to="/"
                                        className={`${dark ? 'text-slate-200 hover:text-slate-300 hover:bg-bg450-lessdark' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}
                                    >
                                        <ArrowLongLeftIcon
                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                                            aria-hidden="true"
                                        />
                                        Back to the shop
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="lg:pl-72">
                    <div className={`${dark ? 'bg-bg450-dark border-bg450-logo' : 'bg-white border-gray-200'} sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8`}>
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Separator */}
                        <div className={`${dark ? 'bg-b450-dark' : 'bg-gray-200'} h-6 w-px lg:hidden`} aria-hidden="true" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form className="relative flex flex-1" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    className={`${dark ? 'bg-bg450-dark' : 'bg-white'} pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400`}
                                    aria-hidden="true"
                                />
                                <input
                                    id="search-field"
                                    className={`${dark ? 'text-slate-300 placeholder:text-slate-400' : 'text-gray-900 placeholder:text-gray-400'} block h-full w-full border-0 py-0 pl-8 pr-0 focus:ring-0 sm:text-sm`}
                                    placeholder="Search..."
                                    style={dark ? {backgroundColor: '#192231'} : {backgroundColor: '#FFFFFF'}}
                                    name="search"
                                />

                            </form>
                            <div className='flex items-center gap-x-4 lg:gap-x-6'>

                                <DarkModeIcon/>
                                {/* Separator */}
                                <div className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200' aria-hidden='true' />

                                {/* Profile dropdown */}
                                <Menu as='div' className='relative ml-3 '>
                                    <div className={'h-full relative flex items-center'}>
                                        <Menu.Button
                                            className='flex my-auto relative rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        >
                                            <span className='absolute -inset-1.5' />
                                            <span className='sr-only'>Open user menu</span>
                                            <img
                                                className='h-8 w-8 rounded-full bg-gray-50'
                                                src={`https://www.gravatar.com/avatar/${md5(myaccount.email)})}?d=404`}
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null;
                                                    currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data.name}`;
                                                }}
                                                alt={`${myaccount.name} Avatar`}
                                            />
                                            <span className='my-auto hidden lg:flex lg:items-center'>
                                                <span className={`${dark ?  'text-slate-200' : 'text-gray-900'} ml-4 text-sm font-semibold leading-6`}
                                                    aria-hidden='true'>
                                                    {myaccount.name}
                                                </span>
                                                <ChevronDownIcon className={`${dark ?  'text-slate-300' : 'text-gray-900'} ml-2 h-5 w-5 text-gray-400`}
                                                    aria-hidden='true' />
                                            </span>

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

                            </div>
                        </div>
                    </div>


                    <main className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} py-10 bg-gray-50`}>
                        <div className='px-4 sm:px-6 lg:px-8'>
                            <Suspense fallback={<Loading />}>
                                <Routes>


                                    {routesList.map((route: RouteItem, key: number) => (
                                        <Route key={key} path={route.link} element={route.component} />
                                    ))}
                                    {admin && AdminRoutes.map((route: RouteItem, key: number) => (
                                        <Route key={key} path={route.link} element={route.component} />
                                    ))}
                                    <Route path={'*'} element={<NotFoundPage />} />

                                </Routes>
                            </Suspense>
                        </div>
                    </main>
                </div>
            </div>




        </NavContext.Provider>
    );
}