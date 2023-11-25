import React from 'react';
import { useDark } from '../../App';

export default function Loading() {
    const { dark } = useDark();
    return (
        <div className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} h-screen flex flex-col justify-center items-center`}>
            <img
                src="https://cdn.bagou450.com/assets/img/bg5.webp"
                className={'h-44 w-44'} // Remove any animation classes
                alt="Logo Bagou450"
                style={{ animation: 'spin 2s linear infinite' }} // Add inline style for infinite rotation
            />
            <h1 className={`text-2xl mt-4 ${dark ? 'text-white' : 'text-black'}`}>Loading...</h1>
        </div>
    );
}
