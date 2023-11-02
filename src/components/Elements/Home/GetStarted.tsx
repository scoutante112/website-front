import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GetStarted() {
    return (
        <section
            id="getstarted"
            aria-label="Features for running your books"
            className="relative overflow-hidden pb-28 pt-20 sm:py-32 bg-[#2763d8]"
        >

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
                    <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl'>
                        Ready to Enhance Your Panel Experience?
                    </h2>
                    <p className='mt-6 text-lg tracking-tight text-blue-100'>
                        Explore our range of tools and addons tailored to elevate your Pterodactyl management. Step
                        into a more streamlined, efficient, and user-friendly interface.
                    </p>
                    <NavLink
                        to={'/products'}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        className={'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10'}>
                        Get Started Now
                    </NavLink>

                </div>
            </div>
        </section>
    )
}