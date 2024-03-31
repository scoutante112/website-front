import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetcher } from '../../api/http';
import useSWR from 'swr';
import Loading from '../Elements/Loading';
import { config } from '../../config/config';

interface tabs {
    tab: string;
}
export default function NavBarAccount(tab: tabs) {
    const location = useLocation();
    const [admin, showAdmin] = useState<boolean>(location.pathname.startsWith('/admin/'));
    const navigation = useNavigate();

    const { data, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    if (!data || (error || isLoading)) {
        return <Loading/>;
    }
    if(!data.status) {
        return <></>;
    }

    return (
        <>      <h1 className='text-4xl my-4 text-center'>Hello, {!data || (error || isLoading) ? 'User' : data.data.name[0].toUpperCase() + data.data.name.slice(1, data.data.name.length)}</h1>
            <section className='mx-auto text-center'>
                <ul className="menu menu-vertical lg:menu-horizontal rounded-box gap-x-2" >
                    {!admin ? (
                        <>
                            <li>
                                <Link className={tab.tab === 'manage' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/account/manage'} >
                                    <svg xmlns="https://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Manage Account
                                </Link>
                            </li>
                            <li>
                                <Link className={tab.tab === 'licenses' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/account/licenses'}>
                                    <svg xmlns="https://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Licenses
                                </Link>
                            </li>
                            <li>
                                <Link to={'/account/orders'} className={tab.tab === 'orders' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''}>
                                    <svg xmlns="https://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Orders
                                </Link>
                            </li>
                            <li>
                                <Link className={tab.tab === 'tickets' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/account/tickets'} >
                                    <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
  Tickets
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link className={tab.tab === 'users' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/admin/users'} >
                                    <svg className="w-5 h-5" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
Users
                                </Link>
                            </li>
                            <li>
                                <Link className={tab.tab === 'products' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/admin/products'} >
                                    <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
Products
                                </Link>
                            </li>
                            <li>
                                <Link className={tab.tab === 'licensesadmin' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/admin/licenses'} >
                                    <svg xmlns="https://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

                  Licenses
                                </Link>
                            </li>

                            <li>
                                <Link className={tab.tab === 'blogs' ? 'bg-neutral-content dark:bg-neutral-focus disabled' : ''} to={'/admin/blogs'} >
                                    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm5 3h6M7 10h10M7 14h10M7 18h7" />
                                    </svg>
                  Blog
                                </Link>
                            </li>
                        </>

                    )}
                    {data.data.role ?
                        <>
                            <input type="checkbox" className="toggle toggle-success ml-8 my-auto" checked={admin} onClick={() => showAdmin(!admin)} /> <p className="mx-2 my-auto">Show admin</p></>
                        :
                        <></>
                    } 
                </ul>

            </section>

        </>
    );
}
