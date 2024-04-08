// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment } from 'preact/compat';
import { Menu, Transition } from '@headlessui/react';
import md5 from 'blueimp-md5';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../../../api/auth/logout';
import { toast } from 'react-toastify';
import { useDark } from '../../../App';

export default function LoggedMenu({ data, mutate }: { data: any, mutate: any }) {
    const { dark } = useDark();
    const navigate = useNavigate();

    return (
        <Menu as='div' className='relative ml-3 '>
            <div className={'h-full relative hidden lg:flex items-center'}>
                <Menu.Button
                    className='my-auto relative hidden lg:flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Open user menu</span>
                    <img
                        src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${data.data.name}/128/042049/5271ff`}
                        alt='User logo'
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
    );
}