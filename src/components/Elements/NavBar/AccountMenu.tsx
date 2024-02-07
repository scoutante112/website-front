// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import React from 'react';
import { NavLink } from 'react-router-dom';
import md5 from 'blueimp-md5';
import logout from '../../../api/auth/logout';
import { toast } from 'react-toastify';
import { useDark } from '../../../App';

export default function AccountMenu({data, mutate}: {data: any, mutate: any}) {
    const { dark } = useDark();

    return (
        <div className={'flex'}>
            <NavLink
                to={'/account/'}
                className='relative my-4 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>Open user menu</span>
                <img
                    src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${data.data.name}/128/042049/5271ff`}
                    alt='User Logo'
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
                });
                mutate();
            })} className={'block px-4 py-2 text-sm text-red-700 ml-auto my-auto'}>Logout</NavLink>

        </div>
    );
}