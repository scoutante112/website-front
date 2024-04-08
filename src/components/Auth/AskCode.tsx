// @ts-nocheck
import { Fragment, useState } from 'preact/compat';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useDark } from '../../App';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import addPasskey from '../../api/auth/passkeys/addPasskey';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { config } from '../../config/config';
import { fetcher } from '../../api/http';
import Field from '../Elements/Form/Field';

const form = object({
    code: string().required('You need to enter the code.'),
});
export default function AskCode({ email }: {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    email: string
}) {
    const { dark } = useDark();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );

    function getEmailAction(email: string) {
        if (email.includes('@')) {
            const domain = email.split('@')[1].toLowerCase();

            if (domain === 'gmail.com') {
                return (
                    <span>
          Go to your <a href='https://mail.google.com' target='_blank' rel='noreferrer' className='text-bg450-logo'>Gmail mailbox</a>
                    </span>
                );
            } else if (domain === 'yahoo.com') {
                return (
                    <span>
          Go to your <a href='https://mail.yahoo.com' target='_blank' rel='noreferrer' className='text-bg450-logo'>Yahoo Mail mailbox</a>
                    </span>
                );
            } else if (domain === 'outlook.com' || domain === 'hotmail.com' || domain === 'live.com') {
                return (
                    <span>
          Go to your <a href='https://outlook.live.com' target='_blank' rel='noreferrer' className='text-bg450-logo'>Outlook mailbox</a>
                    </span>
                );
            } else if (domain === 'aol.com') {
                return (
                    <span>
          Go to your <a href='https://mail.aol.com' target='_blank' rel='noreferrer' className='text-bg450-logo'>AOL Mail mailbox</a>
                    </span>
                );
            } else if (domain === 'icloud.com') {
                return (
                    <span>
          Go to your <a href='https://www.icloud.com/mail' target='_blank' rel='noreferrer' className='text-bg450-logo'>iCloud Mail mailbox</a>
                    </span>
                );
            } // Ajoutez d'autres conditions pour d'autres domaines de messagerie ici

            // Si le domaine de messagerie ne correspond à aucun cas connu, retournez null
            return null;
        } else {
            // Si l'e-mail ne contient pas de caractère "@", retournez null
            return null;
        }
    }

    const formik = useFormik({
        initialValues: { code: '' },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            if (values.code.length !== 6) {
                toast.error('Your code is incorrect.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                return setLoading(false);
            }
            addPasskey(values.code).then((data) => {
                document.cookie = `access_token=${data.data.data}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
                setLoading(false);
                toast.success('You are now logged in, and your passkey has been successfully linked to your account!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                return mutate().then(() => navigate('/'));
            }).catch(() => {
                setLoading(false);
                toast.error('An unexpected error occurred. Do you use the correct code? Code: BagAuth-057', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });

            });

        },
    });
    return (


        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    enterTo='opacity-100 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-100 translate-y-0 sm:scale-100'
                >
                    <Dialog.Panel
                        className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`}>

                        <div className='sm:flex sm:items-start'>
                            <div
                                className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-tellow-100 sm:mx-0 sm:h-10 sm:w-10'>
                                <ExclamationTriangleIcon className='h-6 w-6 text-yellow-600' aria-hidden='true' />
                            </div>
                            <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                                <Dialog.Title as='h3'
                                    className={`text-base font-semibold leading-6 ${dark ? 'text-slate-200' : 'text-gray-900'}`}>
                                    Add a new PassKey
                                </Dialog.Title>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        For finish the creation of the passkey you need to enter the code that has been
                                        sent to your email.<br />
                                        {getEmailAction(email)}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <form className='space-y-6' action='#' method='POST'
                                        onSubmit={formik.handleSubmit}>
                                        <Field name={'Enter the code'} id={'code'} type={'text'}
                                            onChange={formik.handleChange} required />
                                        <div
                                            className='flex justify-end'>
                                            <button
                                                type='submit'
                                                className={`${
                                                    loading && 'opacity-50'
                                                } bg-bg450-logo px-3 py-1.5 text-white hover:bg-bg450-logohover inline-flex rounded-md text-sm font-semibold shadow-sm sm:w-auto`}
                                            >
                                                Add PassKey
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
    );
}