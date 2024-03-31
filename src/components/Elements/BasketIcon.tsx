import React, { Fragment, useEffect, useState } from 'react';
import createOrder from '../../api/shop/createOrder';
import { toast } from 'react-toastify';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useDark } from '../../App';

export interface basketItem {
  id: number,
  name: string,
  price: number,
  icon: string;
  tag: string;
  longId: string;
}
export default function BasketIcon() {
    const [basket, setBasket] = useState<basketItem[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const { dark } = useDark();
    const [isBasket, setisBacket] = useState<boolean>(false);
    const handleLocalStorageChange = () => {
        const storedBasket = localStorage.getItem('basket');
        if(!storedBasket || !storedBasket.length) {
            setisBacket(false);
            setOpen(false);
            return;
        }
        const basketArray: basketItem[] = JSON.parse(storedBasket);
        setisBacket(true);
        setBasket(basketArray);
    };
    const removeItem = (id: number) => {
        const storedBasket = localStorage.getItem('basket');
        if(!storedBasket) {
            setOpen(false);
            setisBacket(false);
            return;
        }
        const basketArray: basketItem[] = JSON.parse(storedBasket);
        const newBasket = basketArray.filter((basketelement: basketItem) => basketelement.id !== id);
        localStorage.setItem('basket', JSON.stringify(newBasket));
        window.dispatchEvent(new Event('basket'));

    };
    useEffect(() => {
        handleLocalStorageChange();
        window.addEventListener('basket', handleLocalStorageChange);

        return () => {
            window.removeEventListener('basket', handleLocalStorageChange);
        };
    }, []);
    if(!isBasket || !basket || !basket.length) {
        setOpen(false);
        return <></>;
    }
    const MakeOrder = () => {
        setLoading(true);
        const products: number[] = basket.map((item) => item.id);

        createOrder(products).then((data) => {
            setLoading(false);
            if(data.data.status === 'success') {
                window.location.href = data.data.data;
            }
            if(data.data.message === 'You need to be authentificated') {
                navigate('/login');
                setOpen(false);
                return toast.error('You need to be logged!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            } else if(data.data.message === 'You need to link a address to your account.') {
                navigate('/account');
                setOpen(false);
                return toast.error('You need to link a address to your account', {
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
            return toast.error('An unexpected error occurred. Please contact an administrator. Code: BagShop-001', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });
        }).catch((e) => {
            setLoading(false);
            if(e.response && e.response.data && e.response.data.message === 'You need to be authentificated') {
                navigate('/login');
                setOpen(false);
                return toast.error('You need to be logged!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            } else if(e.response && e.response.data && e.response.data.message === 'You need to link a address to your account.') {
                navigate('/account');
                setOpen(false);
                return toast.error('You need to link a address to your account', {
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
            return toast.error('An unexpected error occurred. Please contact an administrator. Code: BagShop-001', {
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
    };
    return (
        <div className={'lg:mx-2 h-max my-auto'}>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className={`${dark ? 'bg-bg450-lessdark text-white' : 'bg-white text-gray-900'} flex h-full flex-col overflow-y-scroll shadow-xl`}>
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium">Shopping cart</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {basket.map((product: basketItem) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={product.icon}
                                                                            alt={product.name}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium">
                                                                                <h3>
                                                                                    {product.name}
                                                                                </h3>
                                                                                <p className={dark ? 'ml-4 text-white' : 'ml-4 text-black'}>{product.price}€</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{product.tag}</p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => removeItem(product.id)}
                                                                                    disabled={loading}
                                                                                    className={`font-medium text-indigo-600 hover:text-indigo-500 ${loading && 'opacity-50'}`}
                                                                                >
                                                Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between font-medium">
                                                    <p className={dark ? 'text-white' : 'text-black'}>Subtotal</p>
                                                    <p className={dark ? 'text-white' : 'text-black'}>{basket.reduce((total, item) => total + item.price, 0)}€</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <button
                                                        onClick={() => MakeOrder()}
                                                        disabled={loading}
                                                        className={`flex w-full items-center justify-center rounded-md border border-transparent bg-bg450-logo px-6 py-3 font-medium text-white shadow-sm hover:bg-bg450-logohover ${loading && 'opacity-50'}`}
                                                    >
                                Checkout
                                                    </button>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-black opacacity-50">
                                                    <p className={dark ? 'text-white' : 'text-black'}>
                                or
                                                        <button
                                                            type="button"
                                                            className={`font-medium text-bg450-logo hover:text-bg450-logohover mx-2 ${loading && 'opacity-50'}`}
                                                            onClick={() => setOpen(false)}
                                                        >
                                  Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div>
                <div className="relative">
                    <button
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className={`${dark ? 'text-white' : 'text-gray-600'} relative items-center hover:opacity-50 opacity-75 duration-300 flex`}
                    >
                        <ShoppingCartIcon className="h-6 w-6 mr-2" /> <span className={'hidden lg:flex'}>{basket.length}</span>
                    </button>

                </div>



            </div>
        </div>
    );
}