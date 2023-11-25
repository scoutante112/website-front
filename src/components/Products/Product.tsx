import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Elements/Loading';
import { config } from '../../config/config';
import { basketItem } from '../Elements/BasketIcon';
import { fetcher } from '../../api/http';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import getDownloadOneLink from '../../api/shop/getDownloadOneLink';
import ReactHtmlParser from 'react-html-parser';
import 'react-quill/dist/quill.snow.css';
import '../Admin/Blogs/toolBar.scss';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { CheckBadgeIcon, CheckCircleIcon, CogIcon, StarIcon } from '@heroicons/react/24/solid';
import { useDark } from '../../App';
import { Helmet } from 'react-helmet';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import {sanitize} from 'dompurify';


export default function Product() {
    const {dark} = useDark();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const navigate = useNavigate();
    if(!id) {
        navigate('/');
    }
    const { data, error, isLoading } = useSWR(`${config.privateapilink}/addons/getone?id=${id}`, fetcher);
    const [basket, setBasket] = useState<basketItem[]>();
    const [inBasket, setInBasket] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [index, setIndex] = React.useState(-1);
    const [images, setImages] = useState<SlideImage[]>([]);

    const retrieveImages = () => {
        const imageElements = document.querySelectorAll('#lightbox img');
        const imageUrls: SlideImage[] = Array.from(imageElements).map((img) => ({
            type: 'image',
            src: img.getAttribute('src') || '',
            alt: img.getAttribute('alt') || '',
        }));
        setImages(imageUrls);

    };

    React.useEffect(() => {
        if(data && (!error || !isLoading)) {

            retrieveImages();
        }
    }, [data,error,isLoading]);
    const handleLocalStorageChange = () => {
        const storedBasket = localStorage.getItem('basket');
        if(!storedBasket) {
            setInBasket(false);
            setBasket([]);
            return;
        }
        const basketArray: basketItem[] = JSON.parse(storedBasket);
        setInBasket(basketArray.some((basketelement: basketItem) => basketelement.longId.toString() === id));
        setBasket(basketArray);

    };

    useEffect(() => {
        handleLocalStorageChange();
        window.addEventListener('basket', handleLocalStorageChange);

        return () => {
            window.removeEventListener('basket', handleLocalStorageChange);
        };
    }, []);
    if(!data || (error || isLoading)) {
        return (<Loading/>);
    }
    if(data.status === 'error') {
        if(data.message === 'No product found') {
            toast.error('The referenced product is currently non-existent.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });
            return navigate('/');
        }
    }

    const addon = data.data;


    const downloadProduct = () => {
        setLoading(true);
        toast.info('Please wait during the generation of the file...', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light',
        });
        if (addon.id != null) {
            getDownloadOneLink(addon.id).then((data) => {
                fetch(`${config.privateapilink}${data.data.data}?product=${addon.id}`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${Cookies.get('access_token')}`
                    }
                }).then(response => response.blob()).then(blob => {

                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `Bagou450-${addon.name}.zip`);
                    document.body.appendChild(link);
                    link.addEventListener('load', () => {
                        URL.revokeObjectURL(url);
                    });
                    link.click();
                    if (link.parentNode) {
                        link.parentNode.removeChild(link);
                    }
                    toast.success('Your file is now downloaded!', {
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
                toast.error('An unexcepted error happend. Please contact one of our support team.', {
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

        setLoading(false);

    };

    const addBasket = () => {
        const elements = localStorage.getItem('basket');

        if(elements) {
            const basketArray: basketItem[] = JSON.parse(elements);
            setBasket(basketArray);
        } else {
            setBasket([]);
        }
        const newItem = { id: addon.id, name: addon.name, price: addon.price, tag: addon.tag, icon: `${config.iconlink}${addon.icon}`, longId: id };
        if(!basket || !basket.length) {
            localStorage.setItem('basket', JSON.stringify([newItem]));
            window.dispatchEvent(new Event('basket'));

            return;
        }
        if (basket.some((basketelement: basketItem) => basketelement.id === addon.id)) {
            return;
        }

        basket.push(newItem);
        const updatedBasket = JSON.stringify(basket);
        localStorage.setItem('basket', updatedBasket);
        window.dispatchEvent(new Event('basket'));

    };
    const findParentWithId = (node: any, id: string): any | null => {
        if (!node) {
            return null;
        }

        if (node.attribs && node.attribs.id === id) {
            return node;
        }

        return findParentWithId(node.parent, id);
    };
    const transformImg = (node: { name: string; attribs: any; parent: any }) => {
        const lightboxParent = findParentWithId(node.parent, 'lightbox');

        if (node.name === 'img' && lightboxParent && lightboxParent.name === 'div') {
            const { alt } = node.attribs;
            if (alt) {
                return React.createElement('img', {
                    ...node.attribs,
                    onClick: () => setIndex(parseInt(alt)),
                });
            }
        }
    };


    document.title = 'Bagou450 - ' + addon.name;
    return (
        <section className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>
            <Helmet>
                <meta name='description' content={addon.tag} />

                <meta name='twitter:description' content={addon.tag} />
                <meta name='twitter:title' content={'Bagou450 addon - Pterodactyl ' + addon.name} />

                <meta property='og:description' content={addon.tag} />
                <meta name='twitter:title' content={'Bagou450 addon - Pterodactyl ' + addon.name} />

            </Helmet>
            <main className="mx-auto px-4 pb-4 pt-14 sm:px-6 sm:pb-6 sm:pt-16 lg:max-w-7xl lg:px-8">
                {dark && (
                    <div
                        className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2d67d3] to-[#224fa3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                )}
                {/* Product */}
                <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* Product image */}
                    <div className="lg:col-span-4 lg:row-end-1">
                        <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src={`${config.iconlink}${addon.icon}`}
                                alt={addon.name}
                                height={'500px'}
                                width={'500px'}
                                className="object-cover object-center"
                                onError={(e) => {
                                    e.target.src = 'https://i0.wp.com/nigoun.fr/wp-content/uploads/2022/04/placeholder.png?ssl=1';
                                }}
                            />
                        </div>
                    </div>

                    {/* Product details */}
                    <div
                        className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                        <div className="flex flex-col-reverse">
                            <div className="mt-4">
                                <h1 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-2xl font-bold tracking-tight sm:text-3xl`}><strong>{addon.name}</strong></h1>

                                <h2 id="information-heading" className="sr-only">
                                    Pterodactyl addon product information
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    Version {addon.version}{`${addon.version}`.length === 1 && '.0'}
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    <dl className='mx-auto grid grid-cols-1 gap-px lg:grid-cols-2 gap-x-2 gap-y-2'>
                                        <div
                                            className={`${dark ? 'bg-bg450-inputdark' : 'bg-white'} overflow-hidden rounded-lg px-4 py-5 sm:p-6 shadow-lg`}>
                                            <dt className='truncate text-sm font-medium text-gray-500 flex gap-x-2'>
                                                <CheckCircleIcon className={'h-6 w-6  text-indigo-700 '} /> Compatible
                                            </dt>
                                            <dd className='mt-1 text-3xl font-semibold tracking-tight text-indigo-700'>1.X</dd>
                                        </div>
                                        <div
                                            className={`${dark ? 'bg-bg450-inputdark' : 'bg-white'} overflow-hidden rounded-lg px-4 py-5 sm:p-6 shadow-lg`}>
                                            <dt className='truncate text-sm font-medium text-gray-500 flex gap-x-2'>
                                                {addon.isWings ?
                                                    <ExclamationTriangleIcon
                                                        className={'h-6 w-6  text-yellow-700'} />
                                                    :
                                                    <CheckBadgeIcon className={'h-6 w-6  text-green-700'} />
                                                }
                                                 Wings
                                                Modification
                                            </dt>
                                            <dd className={`mt-1 text-xl font-semibold tracking-tight ${addon.isWings ? 'text-yellow-700' : 'text-green-700'}`}>{!addon.isWings ? 'No wings modification required' : 'You need to edit wings!'}</dd>
                                        </div>
                                        <div
                                            className={`${dark ? 'bg-bg450-inputdark' : 'bg-white'} lg:col-span-2 overflow-hidden rounded-lg px-4 py-5 sm:p-6 shadow-lg`}>
                                            <dt className='truncate text-sm font-medium text-gray-500 flex gap-x-2'>
                                                <CogIcon
                                                    className={`h-6 w-6 ${addon.autoinstaller ? 'text-green-500' : 'text-red-500'}`} />Auto
                                                Installer
                                            </dt>
                                            <dd className={`mt-1 text-3xl font-semibold tracking-tight text-gray-900  ${addon.autoinstaller ? 'text-green-500' : 'text-red-500'}`}>{addon.autoinstaller ? 'Available' : 'N/A'}</dd>
                                        </div>
                                    </dl>
                                </p>
                            </div>

                            <div>
                                <h3 className='sr-only'>Reviews</h3>
                                <div className='flex items-center'>
                                    {[0, 1, 2, 3, 4].map((_, key) => (
                                        <StarIcon
                                            className={'text-yellow-400 h-5 w-5 flex-shrink-0'}
                                            aria-hidden='true'
                                            key={key}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className='mt-6 text-gray-500'>{addon.tag}</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => {
                                    if (!inBasket && !data.owned && addon.price !== 0) {
                                        addBasket();
                                    }
                                    if (data.owned || addon.price === 0) {
                                        downloadProduct();
                                    }
                                }}
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-bg450-logo px-8 py-3 text-base font-medium text-white hover:bg-bg450-logohover focus:outline-none focus:ring-2 focus:ring-bg450-logo focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                {inBasket ? 'Already in basket' : data.owned ? 'Download' : addon.price === 0 ? 'Download' : `Pay ${addon.price}€`}
                            </button>
                            <a
                                href={'https://demo.bagou450.com'}
                                target={'_blaknk'}
                                rel={'referrer'}

                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Demo
                            </a>
                        </div>

                    </div>
                </div>
            </main>
            <div className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span
                            className={`${dark ? 'bg-bg450-lessdark text-slate-300' : 'bg-white text-base '} px-3 font-semibold leading-6 text-gray-900`}>Description</span>
                    </div>
                </div>

                <section className='my-4 ql w-full h-full overflow-y-auto'>
                    <div className={dark ? 'dark-content' : 'light-content'}>
                        {ReactHtmlParser(sanitize(addon.description.replaceAll('rel="noopener noreferrer" target="_blank"', '')), {
                            transform: transformImg,
                        })}
                    </div>
                </section>
                <Lightbox
                    index={index}
                    slides={images}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2d67d3] to-[#224fa3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

        </section>
    );
}
