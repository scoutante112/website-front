import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createOption from '../../api/auth/passkeys/createOption';
import {
    create,
    get,
    parseCreationOptionsFromJSON,
    parseRequestOptionsFromJSON,
} from '@github/webauthn-json/browser-ponyfill';
import addPasskey from '../../api/auth/passkeys/addPasskey';
import { toast } from 'react-toastify';
import login from '../../api/auth/login';
import usePasskey from '../../api/auth/passkeys/usePassKey';
import useSWR from 'swr';
import { config } from '../../config/config';
import { fetcher } from '../../api/http';
import { useDark } from '../../App';
import verificationPasskey from '../../api/auth/passkeys/verificationPasskey';
import { Dialog, Transition } from '@headlessui/react';
import AskCode from './AskCode';

export default function FinalAuthForm({email}: {email: string}) {
    const [loading, setLoading] = useState<boolean>(false);
    const {dark} = useDark();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const navigate = useNavigate();
    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    const addKey = () => {
        setLoading(true);
        try {
            createOption(email).then(async (data) => {
                if (data.data.status !== 'success') {
                    toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-020', {
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
                    return;
                }
                const options = data.data.data;

                if (data.data.isKey) {
                    await get(
                        parseRequestOptionsFromJSON({
                            publicKey: options,
                        })
                    ).then((credential) => {
                        if (!credential) {
                            toast.error('An unexpected error occurred. Are you sure that you used the correct key? Code: BagAuth-004', {
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
                        usePasskey(credential, email).then((data) => {
                            document.cookie = `access_token=${data.data['data']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
                            toast.success('Success! Your are now logged.', {
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
                        }).catch(() => {
                            setLoading(false);
                            toast.error('An unexpected error occurred. Are you sure that you used the correct key? Code: BagAuth-002', {
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
                    }).catch(() => {
                        setLoading(false);
                        toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-003', {
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
                } else {
                    await create(parseCreationOptionsFromJSON({
                        publicKey: options,
                    })).then((credential) => {
                        if (!credential) {
                            setLoading(false);
                            toast.error('An unexpected error occurred. You used the correct key? Code: BagAuth-021', {
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
                        verificationPasskey(credential, email).then(() => {
                            setOpenModal(true);
                            toast.success('Please check your email to complete the Passkey addition process.', {
                                position: 'bottom-right',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: dark ? 'dark' : 'light',
                            });

                        }).catch(() => {
                            setLoading(false);
                            toast.error('An unexpected error occurred. You used the correct key? Code: BagAuth-021', {
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
                    }).catch(() => {
                        toast.error('An unexpected error occurred. You used the correct key? Code: BagAuth-022', {
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
                }
            }).catch(() => {

                toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-027', {
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

        } catch (error) {
            toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-023', {
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
    };
    const emailLogin = () => {
        login(email).then((data) => {
            if(data.data['status'] === 'error') {
                toast.error(`Error: ${data.data['message']} Code: BagAuth-030`, {
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
                toast.success('To complete the authentication process, please check your email and follow the instructions provided.', {
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
        }).catch((e) => {
            if(e.response && e.response.data && e.response.data.message === 'Error during email sending.') {
                toast.error('Our server can\'t send a email to your email address are you sure that you used a valid email? Code: BagAuth-033', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            } else {
                toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-031', {
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
    };
    return (
        <>
            <Transition.Root show={openModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpenModal(true)} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-100"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <AskCode setOpenModal={setOpenModal} email={email}/>
                </Dialog>
            </Transition.Root>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>

                <h1 className={`${dark ? 'text-slate-200' : 'text-white'} mb-8 text-center text-2xl font-bold leading-9 tracking-tight`}>
                    Choose a authentification method
                </h1>
            </div>

            <div className={'grid grid-cols-2 gap-4 mx-4 md:lg-8 md:gap-6 lg:mx-24 lg:gap-8 xl:mx-32 xl:gap-12 2xl:mx-44 '}>
                <div className={`${dark ? 'bg-bg450-inputdark' : 'bg-gray-100'} duration-200 hover:scale-110 p-4 lg:p-8 text-center items-center ${loading && 'opacity-50'}`}
                    onClick={() => addKey()}>
                    <img src={'https://cdn.bagou450.com/assets/img/illustration/keypass.webp'}
                        className={'mx-auto my-2 lg:my-4'} alt={'KeyPass Illustration Image'}
                        title={'KeyPass Illustration Image'} />
                    <div className="flex flex-col items-center justify-center">
                        <h2 className={`${dark ? 'text-slate-300' : 'text-gray-700'} text-lg font-bold flex lg:text-2xl`}>
                            PassKey <span className="mx-1 lg:mx-2 my-auto inline-flex items-center rounded-md bg-green-50 px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Recommended
                            </span>
                        </h2>
                        <h4 className={`${dark ? 'text-slate-400' : 'text-gray-600'} hidden lg:flex text-sm text-center text-black font-semibold lg:text-lg`}>Keypass is a more
                            secure
                            login method than traditional passwords, providing enhanced protection for accessing our
                            website.</h4>
                    </div>
                </div>
                <div className={`${dark ? 'bg-bg450-inputdark' : 'bg-gray-100'} duration-200 hover:scale-110 p-4 lg:p-8 text-center items-center ${loading && 'opacity-50'}`} onClick={() => emailLogin()}>
                    <img src={'https://cdn.bagou450.com/assets/img/illustration/email.webp'}
                        className={'mx-auto my-2 lg:my-4'} alt={'Email Illustration Image'}
                        title={'Email Illustration Image'} />
                    <div className="flex flex-col items-center justify-center">
                        <h2 className={`${dark ? 'text-slate-300' : 'text-gray-700'} text-lg text-black font-bold flex lg:text-2xl`}>
                            Email
                        </h2>
                        <h4 className={`${dark ? 'text-slate-400' : 'text-gray-600'} hidden lg:flex text-sm lg:text-lg text-center  font-semibold`}>Email-based
                            login
                            is a method of accessing your account through a secure link sent to your email address,
                            providing a convenient and secure way to log in.</h4>
                    </div>
                </div>
            </div>


        </>
    );
}