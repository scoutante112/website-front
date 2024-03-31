import React, { useState } from 'react';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import register from '../../api/auth/register';
import { toast } from 'react-toastify';
import { useDark } from '../../App';
const form = object({
    email: string().email('This is not a valid email.').required('You need to enter a email.'),
    username: string()
        .min(8, 'The username needs to have at least 8 characters.')
        .max(32, 'The username needs to have fewer than 32 characters.')
        .required('You need to enter a username.'),
});
export default function RegisterForm({setEmail, email, setIsRegistred}: {setEmail: React.Dispatch<React.SetStateAction<string>>, email: string, setIsRegistred: React.Dispatch<React.SetStateAction<boolean>>}) {
    const {dark} = useDark();
    const [loading, setLoading] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: { email: email, username: email.split('@')[0]},
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
                        theme: dark ? 'dark' : 'light',
                    });
                    setLoading(false);

                }
                setIsRegistred(true);
                setEmail(values.email);
            }).catch(() => {
                toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-010', {
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
        }});

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">


            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">

                <div className=" px-6 pb-12 pt-4 sm:rounded-lg sm:px-12">

                    <div className="sm:mx-auto sm:w-full sm:max-w-md">

                        <h1 className={`${dark ? 'text-slate-200' : 'text-black'} mb-8 text-center text-2xl font-bold leading-9 tracking-tight`}>
                            <strong>Create an account</strong>
                        </h1>
                    </div>
                    <form className='space-y-6' action='#' method='POST' onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor='email' className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`}>
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    defaultValue={email}
                                    type='email'
                                    onChange={formik.handleChange}
                                    autoComplete='email'
                                    required
                                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='username' className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`}>
                                Username
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='username'
                                    name='username'
                                    defaultValue={email.split('@')[0]}
                                    type='text'
                                    onChange={formik.handleChange}
                                    autoComplete='username'
                                    required
                                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                onClick={() => {
                                    if(formik.errors.username) {
                                        toast.error( formik.errors.username, {
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
                                    if(formik.errors.email) {
                                        toast.error( formik.errors.email, {
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
                                }}
                                className={`${
                                    loading && 'opacity-50'
                                } flex w-full justify-center rounded-md bg-bg450-logo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled`}
                            >
                                Register
                            </button>

                        </div>
                    </form>


                </div>


            </div>
        </div>
    );
}
