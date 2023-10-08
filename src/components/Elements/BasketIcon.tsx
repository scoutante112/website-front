import React, { lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import createOrder from '../../api/shop/createOrder';
import { toast } from 'react-toastify';
import { DiscordButton, GitHubButtonClick, GoogleButtonClick, LoginForm } from '../Auth/Login';
import { config } from '../../config/config';

const Register = lazy(() => import('../Auth/Register'));
const EditAccountInfosForm = lazy(() => import('../Account/Manager/Forms/EditAccountInfosForm'));

export interface basketItem {
  id: number,
  name: string,
  price: number,
  icon: string;
  tag: string
}
export default function BasketIcon({ loginError }: { loginError?: string }) {
    const [basket, setBasket] = useState<basketItem[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [showLogin, setLogin] = useState<boolean>(false);
    const [showRegister, setRegister] = useState<boolean>(false);
    const [showAddress, setAddress] = useState<boolean>(false);

    const [isBasket, setisBacket] = useState<boolean>(false);
    const handleLocalStorageChange = () => {
        const storedBasket = localStorage.getItem('basket');
        if(!storedBasket || !storedBasket.length) {
            setisBacket(false);
            const basketmodal = document.getElementById('basketmodal');
            if(basketmodal) {
                // @ts-ignore
                basketmodal.close();
            }
            return;
        }
        const basketArray: basketItem[] = JSON.parse(storedBasket);
        setisBacket(true);
        setBasket(basketArray);
    };
    const removeItem = (id: number) => {
        const storedBasket = localStorage.getItem('basket');
        if(!storedBasket) {
            setisBacket(false);
            const basketmodal = document.getElementById('basketmodal');
            if(basketmodal) {
                // @ts-ignore
                basketmodal.close();
            }
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
        return <></>;
    }
    const MakeOrder = (products: number[]) => {
        setLoading(true);
        createOrder(products).then((data) => {
            setLoading(false);
            if(data.data.status === 'success') {
                window.location.href = data.data.data;
            }
            setError(data.data.message);
            if(data.data.message === 'You need to be authentificated') {
                setLogin(true);
                setRegister(false);
                setAddress(false);
            } else if(data.data.message === 'You need to link a adress to your account.') {
                setLogin(false);
                setRegister(false);
                setAddress(true);
            }
        }).catch((error) => {
            setLoading(false);
            if(error.response.data.message === 'You need to be authentificated') {
                setLogin(true);
                setRegister(false);
                setAddress(false);
                return;
            } else if(error.response.data.message === 'You need to link a adress to your account.') {
                setLogin(false);
                setRegister(false);
                setAddress(true);
                return;

            }
            toast.error('A unexcepted error happend.', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
            });
        });
    };
    return (
        <div className={'mx-2 h-max my-auto'}>

            <dialog id="basketmodal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <AnimatePresence>  {!showAddress && !showLogin && !showRegister ? (
                        <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}>
                            <h3 className="font-bold text-lg">Basket</h3>
                            {error ?
                                <div className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>error</span>
                                </div>
                                :<></>
                            }
                            <div className="overflow-x-auto">
                                {basket.length ?
                                    <>
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {basket.map((item: basketItem) => {
                                                    return (
                                                        <tr className="hover">
                                                            <td><div className={'flex w-full gap-x-2'}><img alt={item.name} src={`${config.privateiconlink}${item.icon}`} className={'h-16 w-16'}/><div className={'my-auto'}>{item.name}</div></div></td>
                                                            <td>{item.tag}</td>
                                                            <td>{item.price}€</td>
                                                            <td><div><MdClose className={'hover:text-red-700 hover:border-red-600 hover:border-2 h-6 w-6 duration-75'} onClick={() => removeItem(item.id)}/></div></td>

                                                        </tr>
                                                    );
                                                })}

                                                <tr>
                                                    <td className={'my-2'}>

                                                        <h4 className={'text-xl'}>Total</h4>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className={'my-2'}>
                                                        <h4 className="text-xl">{(basket.reduce((total, item) => total + item.price, 0)).toFixed(2)}€</h4>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </>
                                    :
                                    <p className={'text-center opacity-80'}>There are no items in the basket</p>
                                }
                            </div>
                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                {basket.length ?
                                    <button className="btn btn-outline btn-primary outline-0" onClick={() => MakeOrder(basket.map(item => item.id))} disabled={loading}>Checkout</button>
                                    : <></>}
                                <button className="btn outline-0" disabled={loading} onClick={() => {
                                    const basketmodal = document.getElementById('basketmodal');
                                    if(basketmodal) {
                                        // @ts-ignore
                                        basketmodal.close();
                                    }
                                }}>Close</button>
                            </div>
                        </motion.div>
                    ) : !showRegister && !showAddress && showLogin ? (
                        <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}>
                            <h3 className="font-bold text-xl text-center">Login</h3>
                            {loginError &&
                <div className="alert alert-error mx-auto w-2/4 my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{loginError}</span>
                </div>
                            }
                            <section className='my-4 text-center mx-auto'>
                                <LoginForm setRegister={setRegister} setLogin={setLogin}/>
                            </section>
                            <section className='my-4 text-center mx-auto'>
                                <div className="divider w-1/5 mx-auto">OR</div>
                                <DiscordButton/>
                                <GoogleButtonClick/>
                                <GitHubButtonClick/>
                            </section>
                        </motion.div>
                    ) : showRegister && !showAddress && !showLogin ?             <motion.div initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}><Register setRegister={setRegister} setLogin={setLogin}/></motion.div>

                        : !showRegister && showAddress && !showLogin ? <EditAccountInfosForm setAddress={setAddress}/> :<></>}
                    </AnimatePresence>
                </div>

            </dialog>

            <motion.div initial={{ opacity: 0, scale: 0 }} layout transition={{ duration: 0.25, delay: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}>

                <div  onClick={()=> {
                    const basketmodal = document.getElementById('basketmodal');
                    if(basketmodal) {
                        // @ts-ignore
                        basketmodal.showModal();
                    }
                }} className={'indicator hover:opacity-75 duration-300'}>

                    <div className="indicator-item indicator-bottom badge badge-secondar">
                        {basket.length}
                    </div>
                    <div><FaShoppingBasket className={'text-white h-8 w-8'} /></div>

                </div>

            </motion.div>
        </div>
    );
}