import React, { Fragment, useEffect, useState } from 'react';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import editUser from '../../../api/admin/users/editUser';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { debounce } from 'debounce';
import Pagination from '../../Elements/Pagination';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';


interface Discord {
  id: number;
  user_id: number;
  discord_id: string;
  username: string;
  avatar: string;
  discriminator: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface Github {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  github_id: string;
  avatar: string;
  plan: string;
}

interface Google {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  google_id: string;
  avatar: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  api_token: string | null;
  society: string | null;
  address: string;
  city: string;
  country: string;
  region: string;
  postal_code: string;
  phone_number: string | null;
  firstname: string;
  lastname: string;
  login_token: string | null;
  role: number;
  discord: Discord  | null;
  github: Github  | null;
  google: Google  | null;
}

export default function UsersContainer() {
    const [page, setPage] = useState<number>(1);
    const [perpage] = useState<number>(20);
    const [search, setSearch] = useState<string>('');
    const {data, error, isLoading} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
    if(!data || (error || isLoading)) {
        return <Loading/>;
    }
    const searchValue = debounce((value: string) => {
        setSearch(value);
        setPage(1);
    }, 500);
    return (
        <>
            <div className='px-4 sm:px-6 lg:px-8'>

                <div className='sm:flex sm:items-center'>
                    <div className='sm:flex-auto'>
                        <h1 className='text-base font-semibold leading-6 text-gray-900'>Users</h1>
                        <p className='mt-2 text-sm text-gray-700'>
                  You are on the <strong
                                className='font-semibold text-gray-900'>users</strong> page.
                  You can here see and manage all users
                        </p>
                    </div>
             

                </div>
            </div>
            <div className='-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300 text-black'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                    Id
                            </th>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                    Username
                            </th>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                    First Name
                            </th>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                    Last Name
                            </th>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                    Email
                            </th>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                    Discord
                            </th>
                            <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                                <span className='sr-only'>Actions</span>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((user: User, index: number) => {
                            return (
                                <UserRow user={user} index={index} page={page} perpage={perpage} search={search} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className={'text-center mt-2'}>
                <Pagination totalPages={data.total} page={page} setPage={setPage} />

            </div>
        </>
    );
}
const form = object({
    name: string().required(),
    email: string().required(),
    phone_number: string().optional().nullable(),
    role: string().required(),
    society: string().nullable(),
    address: string().optional().nullable(),
    city: string().optional().nullable(),
    firstname: string().optional().nullable(),
    lastname: string().optional().nullable(),
    postal_code: string().optional().nullable(),
});

function UserRow({ user, index, page, perpage, search }: {
  user: User,
  index: number,
  page: number;
  perpage: number,
  search: string
}) {
    const [open, setOpen] = useState<boolean>(false);
    const { mutate } = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);

    return (
        <tr key={index}>
            <EditUserForm user={user} open={open} setOpen={setOpen} mutate={mutate}/>

            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{user.id}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{user.name}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{user.firstname}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{user.lastname}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{user.email}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{user.discord?.discord_id} ({user.discord?.username})</td>
         
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'
            >
                <div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>
                    <button                         className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() => { 
                            setOpen(!open);
                        }}>Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}

const EditUserForm = ({user, open, setOpen, mutate}: {user: User, open: boolean, setOpen: any, mutate: any}) => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        async function fetchRegion(data: {
      country_name: any;
      data: {
        country: React.SetStateAction<string>;
        country_name: React.SetStateAction<string>;
        region: React.SetStateAction<string>;
        data: { region: string; };
      };
      region: any;
    }) {
            const response = await fetch('https://ipapi.co/json/');
            const responseData = await response.json();
            setCountry(responseData.country_name && data.data.country === '' ? responseData.country_name : data.data.country !== '' ? data.data.country : '');
            setRegion(responseData.region && data.data.region === '' ? responseData.region : data.data.region !== '' ? data.data.region : '');
        }

        formik.setValues({
            name: user.name ? user.name : '',
            email: user.email ? user.email : '',
            phone_number: user.phone_number ? user.phone_number : '',
            role: user.role ? `${user.role}` : '0',
            society: user.society ? user.society : '',
            address: user.address ? user.address : '',
            city: user.city ? user.city : '',
            postal_code: user.postal_code ? user.postal_code : '',
            lastname: user.lastname ? user.lastname : '',
            firstname: user.firstname ? user.firstname : '' });
        setCountry(user.country);
        setRegion(user.region);
    }, []);

    const handleCountryChange = (value: React.SetStateAction<string>) => {
        setCountry(value);
    };

    const handleRegionChange = (value: React.SetStateAction<string>) => {
        setRegion(value);
    };

    const formik = useFormik({
        initialValues: { name: '', email: '', society: '', address: '', city: '', postal_code: '', firstname: '', lastname: '', phone_number: '', role: '' },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);

            if (region === '' || !region) {
                setLoading(false);
                return;

            }
            if (country === '' || !country) {
                setLoading(false);
                return;
            }
            editUser(user.id, values.name,values.email, values.society, values.address, values.city, country, region, values.postal_code, values.phone_number, values.firstname, values.lastname, values.role).then((data) => {
                if (data.data['status'] === 'error') {
                    toast.error(data.data['message'], {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                    setLoading(false);

                } else {
                    mutate();
                    toast.success('Success! Your informations was edited.', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                    setLoading(false);
                    setOpen(false);
                }
                setLoading(false);
            }).catch((e) => {
                toast.error(`Error: ${e.response.data.message}`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                setLoading(false);
            });
        }
    }); 
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-black font-semibold leading-6">
                            Create news
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="absolute -inset-2.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                            <h3 className='font-bold text-black text-lg'>Create news:</h3>

                                            <form onSubmit={formik.handleSubmit} className='grid md:grid-cols-2 gap-x-4'>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='title'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Society
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='text'
                                                        name='society'
                                                        defaultValue={user.society ? user.society : ''}
                                                        onChange={formik.handleChange}
                                                        id='society'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='city'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  City
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='text'
                                                        name='city'
                                                        defaultValue={user.city ? user.city : ''}
                                                        onChange={formik.handleChange}
                                                        id='city'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='address'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Address
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='address'
                                                        name='address'
                                                        defaultValue={user.address ? user.address : ''}
                                                        onChange={formik.handleChange}
                                                        id='address'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='postal_code'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Postal code
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='postal_code'
                                                        name='postal_code'
                                                        defaultValue={user.postal_code ? user.postal_code : ''}
                                                        onChange={formik.handleChange}
                                                        id='postal_code'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>

                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='firstname'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Fist name
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='firstname'
                                                        name='firstname'
                                                        defaultValue={user.firstname ? user.firstname : ''}
                                                        onChange={formik.handleChange}
                                                        id='firstname'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='lastname'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Last name
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='lastname'
                                                        name='lastname'
                                                        defaultValue={user.lastname ? user.lastname : ''}
                                                        onChange={formik.handleChange}
                                                        id='lastname'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />
                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>

                                                    <label htmlFor='country'
                                                        className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                Country
                                                    </label>
                                                    <CountryDropdown
                                                        id='country'
                                                        name='country'
                                                        value={country}
                                                        onChange={handleCountryChange}
                                                        disabled={loading}
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />
                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <label htmlFor='region'
                                                        className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                State/Region
                                                    </label>
                                                    <RegionDropdown
                                                        id='region'
                                                        name='region'
                                                        country={country}
                                                        value={region}
                                                        onChange={handleRegionChange}
                                                        disabled={loading}
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='name'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Username
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='name'
                                                        name='name'
                                                        defaultValue={user.name ? user.name : ''}
                                                        onChange={formik.handleChange}
                                                        id='name'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='email'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Email
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='email'
                                                        name='email'
                                                        defaultValue={user.email ? user.email : ''}
                                                        onChange={formik.handleChange}
                                                        id='email'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='phone_number'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Phone Number
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='phone_number'
                                                        name='phone_number'
                                                        defaultValue={user.phone_number ? user.phone_number : ''}
                                                        onChange={formik.handleChange}
                                                        id='phone_number'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>
                                                <div className='mx-auto w-full max-w-sm'>
                                                    <div>
                                                        <label htmlFor='role'
                                                            className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                  Role
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='role'
                                                        name='role'
                                                        defaultValue={user.role ? user.role : ''}
                                                        onChange={formik.handleChange}
                                                        id='role'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />

                                                </div>

                                                <div className='col-span-2 flex ml-auto my-2'>
                                                    <button
                                                        className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                                                        type={'submit'}
                                                        disabled={loading || formik.errors.postal_code ? true : formik.errors.address ? true : formik.errors.city ? true : formik.errors.firstname ? true : !!formik.errors.lastname}
                                                    >Edit user
                                                    </button>

                                                    <button
                                                        className='mx-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                        onClick={() => {
                                                            setOpen(false);
                                                        }} disabled={loading}>Close
                                                    </button>


                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

    );
};