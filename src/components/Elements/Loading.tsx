import React from 'react';
import { useDark } from '../../App';

export default function Loading() {
    const { dark } = useDark();
    return (
        <div className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} h-screen flex flex-col justify-center items-center`}>
            <img
                src="https://cdn.bagou450.com/assets/img/bg5.webp"
                className="h-44 w-44 animate-spin-slow"
                alt="Logo"
            />
            <p className="text-2xl mt-4">Loading...</p>
        </div>
    );
}
