import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import logout from '../api/auth/logout';
import useSWR from 'swr';
import md5 from 'blueimp-md5';
import { fetcher } from '../api/http';
import { MainNavRoutes } from '../App';
import LazyLoad from 'react-lazyload';
import { config } from '../config/config';
import BasketIcon from './Elements/BasketIcon';

export default function NavBar() {
    const navigate = useNavigate();

    const location = useLocation();
    const infos = location.pathname.startsWith('/account') || location.pathname.startsWith('/admin');
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=${infos}`,
        fetcher
    );
    const navigation = useNavigate();



    if (!data || (error || isLoading)) {
        return <></>;
    }

    if(infos && !data.status) {
        mutate();
        navigation('/login');
    }
    if(location.pathname.startsWith('/admin') && !data.data.role) {
        navigation('/');
    }
    return (
        <><div className="navbar-start ">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {MainNavRoutes.map((routes, key) => (
                        <li key={key}><Link to={routes.link}>{routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}</Link></li>
                    ))}
                </ul>
            </div>
            <Link to={'/'} className="btn hidden md:block btn-ghost normal-case text-xl transition  delay-150 text-white hover:text-blue-700 hover:bg-transparent duration-300"><LazyLoad>
                <img
                    src="https://cdn.bagou450.com/assets/img/logo_full_colored.webp"
                    className={'h-8 w-full'}
                    alt='Logo' />
            </LazyLoad></Link>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {MainNavRoutes.map((routes, key) => (
                        <li key={key} className={'mr-2'}><Link to={routes.link}>{routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}</Link></li>
                    ))}
                </ul>
            </div>
        </div><div className="navbar-end lg:flex">
            <ToastContainer />

            <ul className="menu menu-horizontal px-1">
                {data['status'] ?
                    <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn h-full mx-2"> <img src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=404`} alt='test'
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data.name}`;
                                } }
                                className={'rounded-full h-16 w-16 '} /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-40">
                                <li><Link to={'/account/manage'}><p>My account</p></Link></li>
                                <li onClick={() => logout().then(() => {
                                    toast.success('You are now logged out.', {
                                        position: 'bottom-right',
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
                                    });
                                    navigate('/');
                                    mutate();
                                })}><p className='text-red-800'>Logout</p></li>
                            </ul>
                        </div>
                    </>


                    :
                    <><li className={'my-auto'}><Link to={'/login'}>Login</Link></li><li className={'mx-2 my-auto'}><Link to={'/register'}>Register</Link></li></>}

                <BasketIcon/>
            </ul>

        </div>

        </>
    );
}
