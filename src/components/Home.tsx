import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDark } from '../App';
import Features1 from './Elements/Home/Features1';
import GetStarted from './Elements/Home/GetStarted';
import TrustedBy from './Elements/Home/TrustedBy';

export default function Home() {

    const {dark} = useDark();

    function scrollToFeatures(event: any) {
        event.preventDefault();

        const targetId = 'features';
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    }
    return (
        <div className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>

            <div className="relative isolate pt-8">
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
                <div className="py-24 sm:py-32 ">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className={`${dark ? 'text-white' : 'text-gray-900'} text-4xl font-bold tracking-tight sm:text-6xl`}>
                                Unleashing the Pterodactyl Potential
                            </h1>
                            <p className={`${dark ? 'text-gray-400' : 'text-gray-600'} mt-6 text-lg leading-8`}>
                                Harness the power of our premium Pterodactyl addons, tailored for performance and reliability. Web
                                solutions and
                                server configurations also available.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <NavLink
                                    to={'/products'}
                                    className="rounded-md bg-bg450-logo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Explore Our Pterodactyl Addons
                                </NavLink>
                                <a href={'/#features'} className={`text-sm font-semibold leading-6 ${dark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`} onClick={scrollToFeatures}>
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div
                                className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="https://cdn.bagou450.com/assets/img/addons/mcversions/computer/1.webp"
                                    alt="Pterodactyl addons presentation image"
                                    width={2432}
                                    height={1442}
                                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
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
            </div>
            <TrustedBy/>
            <Features1/>
            <GetStarted/>
        </div>
    );
}





