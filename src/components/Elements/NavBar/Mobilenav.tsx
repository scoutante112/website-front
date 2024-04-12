import { MainNavRoutes } from '../../MainRouter';
import { Link, NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Fragment, Suspense } from 'react';
import { h } from 'preact';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../NavBar';
import Loading from '../Loading';
import { UserIcon } from '@heroicons/react/24/outline';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import { lazy } from 'preact/compat';
import Cookies from 'js-cookie';

const AccountMenu = lazy(() => import('./AccountMenu'));

export default function Mobilenav() {
    const { dark } = useDark();
    const { t } = useTranslation();
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    const language = Cookies.get('lang') || 'en';


    if (!data || (error || isLoading)) {
        return <></>;
    }
    const logged = data.status;

    return (
        <Fragment>  
            <div className='space-y-1 px-2 pb-3 pt-2'>
                {MainNavRoutes.map((route, key) => {
                    if(!route.dropdown) {
                        return (
                            <NavLink to={`/${language}${route.link}`} key={key}>

                                <Disclosure.Button
                                    as='a'
                                    className={classNames(
                                        location.pathname === route.link ? `${dark ? 'bg-bg450-lessdark' : 'bg-gray-900'} text-white` : `${dark ? 'text-white' : 'text-black'} hover:opacity-95`,
                                        'block rounded-md py-2 px-3 text-base font-medium',
                                    )}
                                >
                                    {t(`navbar.routes.${route.name}`)}
                                </Disclosure.Button>
                            </NavLink>
                        );
                    } else {
                        return (
                            <Disclosure as="div" className="relative inline-block text-left" key={key}>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button
                                            className={classNames(
                                                location.pathname === route.link ? `${dark ? 'bg-bg450-lessdark' : 'bg-gray-900'} text-white` : `${dark ? 'text-white' : 'text-black'} hover:opacity-95`,
                                                'block rounded-md py-2 px-3 text-base font-medium',
                                            )}
                                        >
                                            {t(`navbar.routes.${route.name}`)}
                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <div
                                                className={`${dark ? 'bg-bg450-dark' : 'bg-white'} opacity-100 absolute left-0 z-99 mt-2 w-48 origin-top-right rounded-md py-1 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                                                {route.dropdownContent.map((dropdownRoute, dropdownKey) => (
                                                    <div key={dropdownKey}>
                                                        <Link
                                                            to={`/${language}${dropdownRoute.link}`}
                                                            className={classNames(
                                                                location.pathname === route.link ? `${dark ? 'bg-bg450-dark' : 'bg-gray-900'} text-white` : `${dark ? 'text-white' : 'text-black'} hover:opacity-95`,
                                                                'block rounded-md py-2 px-3 text-base font-medium',
                                                            )}

                                                        >
                                                            {t(`navbar.routes.${dropdownRoute.name}`)}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        );
                    }

                })}
            </div>
            <div className="border-t border-gray-700">
                {logged ? (
                    <Suspense fallback={<Loading />}><AccountMenu data={data} mutate={mutate} /></Suspense>
                ) : <div>
                    <NavLink
                        className={`${dark ? 'text-white' : 'text-black'} hover:opacity-75 duration-200 px-2 flex py-4`}
                        to={'/login'}>

                        <Disclosure.Button className={'flex'}>
                            <UserIcon title={'Login/Register'}
                                className={'h-6 w-6 opacity-50 mx-1'} /> {t('navbar.login')}
                        </Disclosure.Button>
                    </NavLink>


                </div>
                }
            </div>
        </Fragment>
    );
}