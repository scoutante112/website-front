import React, { useState } from 'react';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import register from '../../api/auth/register';
import { toast } from 'react-toastify';

export function RegisterForm() {
    const form = object({
        email: string().email('This is not a valid email.').required('You need to enter a email.'),
        username: string()
            .min(8, 'The username needs to have at least 8 characters.')
            .max(32, 'The username needs to have fewer than 32 characters.')
            .required('You need to enter a username.'),
    });
    const [loading, setLoading] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: { email: '', username: ''},
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            register(values.email, values.username).then((data) => {
                if (data.data['status'] === 'error') {
                    toast.error(data.data['message'], {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
                    });
                    setLoading(false);
                }

            }).catch(() => {
                toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-010', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
                });
                setLoading(false);

            });
        }});

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">


            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">

                <div className=" px-6 pb-12 pt-4 sm:rounded-lg sm:px-12">

                    <div className="sm:mx-auto sm:w-full sm:max-w-md">

                        <h2 className="mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create an account
                        </h2>
                    </div>
                    <form className='space-y-6' action='#' method='POST' onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor='email' className='block text-sm leading-6 text-gray-900 font-bold'>
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    onChange={formik.handleChange}
                                    autoComplete='email'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm leading-6 text-gray-900 font-bold'>
                                Username
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='username'
                                    name='username'
                                    type='text'
                                    onChange={formik.handleChange}
                                    autoComplete='username'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className={`${
                                    loading && 'opacity-50'
                                } flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                Register
                            </button>

                        </div>
                    </form>

                    <div>
                        <div className='relative mt-10'>
                            <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                                <div className='w-full border-t border-gray-200' />
                            </div>
                            <div className='relative flex justify-center text-sm font-medium leading-6'>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    );
}
