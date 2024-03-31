import React, { useState } from 'react';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { DiscordButton, GitHubButtonClick, GoogleButtonClick, PatreonButtonClick } from './Login';
import isAccount from '../../api/auth/isAccount';
import { useDark } from '../../App';

const form = object({
    email: string().required('You need to enter a email/username.'),
});
export default function LoginForm({setIsRegistred, setEmail}: {setIsRegistred: React.Dispatch<React.SetStateAction<boolean>>, setEmail: React.Dispatch<React.SetStateAction<string>>}) {

    const [loading, setLoading] = useState<boolean>(false);
    const {dark} = useDark();



    const formik = useFormik({
        initialValues: { email: ''},
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            isAccount(values.email).then(async (data) => {
                if (data.data['status'] === 'error') {
                    setLoading(false);
                    setEmail(values.email);
                    return setIsRegistred(false);
                } else {
                    setLoading(false);
                    return setEmail(values.email);
                }
            }).catch((e) => {
                if (e.response && e.response.data && e.response.data.message === 'This username was not found in our database.') {
                    setEmail(values.email);
                    setIsRegistred(false);
                } else {
                    toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-001', {
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

                setLoading(false);
            });

        }
    });

    return (
       
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">


            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">

                <div className=" px-6 pb-12 pt-4 sm:rounded-lg sm:px-12">

                    <div className="sm:mx-auto sm:w-full sm:max-w-md">

                        <h1 className={`${dark ? 'text-slate-200' : 'text-black'} mb-8 text-center text-2xl font-bold leading-9 tracking-tight`}>
                            <strong>Sign in to your account</strong>
                        </h1>
                    </div>
                    <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email" className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`}>
                                    Email address or username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    autoComplete="email"
                                    required
                                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className={`${
                                    loading && 'opacity-50'
                                } flex w-full justify-center rounded-md bg-bg450-logo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled`}
                            >
                                    Sign in
                            </button>

                        </div>
                    </form>

                    <div>
                        <div className="relative mt-10">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className={`${dark ? 'bg-bg450-lessdark text-slate-300' : 'bg-white text-gray-700'} px-6 `}>Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <DiscordButton/>
                            <GoogleButtonClick/>
                            <GitHubButtonClick/>
                            <PatreonButtonClick/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
       

    );
}
