import React, { useState } from 'react';
import useSWR from 'swr';
import { config } from '../../config/config';
import { fetcher } from '../../api/http';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Discount() {
    const [show, setShow] = useState<boolean>(true);
    const { data, error, isLoading } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );
    if (!data || (error || isLoading)) {
        return <></>;
    }
    if(data.discount.status && show) {
        return (
            
            <div className='flex items-center gap-x-6 bg-bg450-logo px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
                <p className='text-sm leading-6 text-white'>
                    <a href='#'>
                        <strong className='font-semibold'>Special Offer</strong>
                        <svg viewBox='0 0 2 2' className='mx-2 inline h-0.5 w-0.5 fill-current' aria-hidden='true'>
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        Apply promo code &ldquo;<span className={'font-bold'}>{data.discount.code}</span>&ldquo; to receive a {data.discount.value}% discount on your
                    upcoming purchase!
                    </a>
                </p>
                <div className='flex flex-1 justify-end'>
                    <button type='button' className='-m-3 p-3 focus-visible:outline-offset-[-4px]'  onClick={() => setShow(false)}>
                        <span className='sr-only'>Dismiss</span>
                        <XMarkIcon className='h-5 w-5 text-white' aria-hidden='true' />
                    </button>
                </div>
            </div>
      
        );
    }

    return (<></>);
}