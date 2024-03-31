import React from 'react';
import { useDark } from '../App';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
    const dark = useDark();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Helmet>
                <meta name='description' content={'Oh no! This page is lost in cyberspace... While our server searches for it, why not explore our Linux services and gaming modules? Bagou450 has a world of offerings waiting for you.'} />

                <meta name="twitter:description" content={'Oh no! This page is lost in cyberspace... While our server searches for it, why not explore our Linux services and gaming modules? Bagou450 has a world of offerings waiting for you.'} />

                <meta property="og:description" content={'Oh no! This page is lost in cyberspace... While our server searches for it, why not explore our Linux services and gaming modules? Bagou450 has a world of offerings waiting for you.'} />
            </Helmet>
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <h2 className={`${dark ? 'text-slate-200' : 'text-gray-950'} text-2xl`}>Oh no! This page is lost in cyberspace...</h2>
                <p className={dark ? 'text-slate-200' : 'text-gray-950'}>While our server searches for it, why not explore our Linux services and gaming modules?</p>
                <div className='space-x-2 flex gap-x-2'>
                    <a href={'/'}
                        className='flex rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 relative'>
                        Back to Homepage
                    </a>
                    <a href={'/contact'}
                        className='flex rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 relative'>
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto mt-8">
                <img src="https://cdn.bagou450.com/assets/img/404.webp" alt="Server searching"
                    className="w-full h-auto" />
            </div>
        </div>
    );
};

export default NotFoundPage;