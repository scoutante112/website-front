import { MainNavRoutes } from '../../MainRouter';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, lazy, Suspense } from 'react';
import { h } from 'preact';
import { useDark } from '../../../App';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading';
import { UserIcon } from '@heroicons/react/24/outline';
import BasketIcon from '../BasketIcon';
import LanguageChanger from '../LanguageChanger';
import DarkModeIcon from '../DarkModeIcon';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';

const LoggedMenu = lazy(() => import('./LoggedMenu'));

export default function Fullnav() {
    const { dark } = useDark();
    const language = Cookies.get('lang') || 'en';
    const { t } = useTranslation();

    return (
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
    );
}

export function ProfileDropdown() {
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    const { dark } = useDark();


    if (!data || (error || isLoading)) {
        return <></>;
    }
    const logged = data.status;
    return (
        <div className='flex relative px-2 lg:px-0 justify-end gap-x-6 my-auto'>

            {logged ? (
                <Suspense fallback={<Loading />}>
                    <LoggedMenu data={data} mutate={mutate} />
                </Suspense>
            ) : <div>
                <NavLink title='Login and Register Button'
                    className={`${dark ? 'text-white' : 'text-gray-600'} hidden xl:block hover:opacity-50 duration-200 px-2`}
                    to={'/login'}>
                    <UserIcon className={'h-6 w-6 opacity-75'} />
                </NavLink>

            </div>
            }
            <BasketIcon />
            <LanguageChanger />
            <DarkModeIcon />
        </div>
    );
}