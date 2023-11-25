import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
    const navigate = useNavigate();


    const goToHomePage = () => {
        navigate('/');
    };

    const goToContactPage = () => {
        navigate('/contact');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Helmet>
                <meta name='description' content={'Oh no! This page is lost in cyberspace... While our server searches for it, why not explore our Linux services and gaming modules? Bagou450 has a world of offerings waiting for you.'} />

                <meta name="twitter:description" content={'Oh no! This page is lost in cyberspace... While our server searches for it, why not explore our Linux services and gaming modules? Bagou450 has a world of offerings waiting for you.'} />

                <meta property="og:description" content={'Oh no! This page is lost in cyberspace... While our server searches for it, why not explore our Linux services and gaming modules? Bagou450 has a world of offerings waiting for you.'} />
            </Helmet>
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <h2 className="text-2xl">Oh no! This page is lost in cyberspace...</h2>
                <p>While our server searches for it, why not explore our Linux services and gaming modules?</p>
                <div className="space-x-2">
                    <button onClick={goToHomePage} className="btn btn-primary">
            Back to Homepage
                    </button>
                    <button onClick={goToContactPage} className="btn btn-secondary">
            Contact Us
                    </button>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto mt-8">
                <img src="https://cdn.bagou450.com/assets/img/404.webp" alt="Server searching" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default NotFoundPage;