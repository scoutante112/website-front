import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { CommandLineIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';
import { useDark } from '../App';

const features = [
    {
        title: 'Minecraft Versions changer',
        description:
        'Effortlessly switch between Minecraft versions and modpacks directly from the panel, with real-time fetching, extensive compatibility, and seamless integration.',
        image: 'https://cdn.bagou450.com/assets/img/addons/mcversions/computer/1.webp',
    },
    {
        title: 'Minecraft Plugins installer',
        description:
        'Instantly install a vast range of Minecraft plugins from SpigotMc, DevBukkit, PolyMart, and more, all directly from your panel with guaranteed uptime and compatibility.',
        image: 'https://cdn.bagou450.com/assets/img/addons/mcplugins/computer/1.webp',
    },
    {
        title: 'Artifacts Changer',
        description:
        'Easily update your FiveM artifacts with a single click, ensuring synchronized TxAdmin updates and real-time fetching from CFX servers.',
        image: 'https://cdn.bagou450.com/assets/img/addons/artifacts/computer/1.webp',
    },
    {
        title: 'Cloud Servers',
        description:
        'Empower your users to create their own servers with adjustable resources, seamlessly integrated with WHMCS and compatible across all Pterodactyl themes.',
        image: 'https://cdn.bagou450.com/assets/img/addons/cloudservers/computer/1.webp',
    },
];
export default function Home() {
    const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
        'horizontal',
    );
    const {dark} = useDark();
    useEffect(() => {
        const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

        function onMediaQueryChange({ matches }: { matches: boolean }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal');
        }

        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener('change', onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange);
        };
    }, []);
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
            <div className={'pb-24 sm:pb-32'}>
                <p className={`${dark ? 'text-slate-400' : 'text-slate-900'} text-lg font-display text-base text-center`}>
                    Trusted by these six companies so far
                </p>
                <ul
                    role="list"
                    className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
                >
                    {[
                        [
                            {
                                name: 'Ozlaloc',
                                logo: 'https://cdn.bagou450.com/assets/img/trustus/ozlaloc.webp',
                                link: 'https://ozlaloc.fr'
                            },
                            {
                                name: 'ServerEasy',
                                logo: 'https://cdn.bagou450.com/assets/img/trustus/ServerEasy.webp',
                                link: 'https://servereasy.it'
                            },
                            {
                                name: 'CapriceHost',
                                logo: 'https://cdn.bagou450.com/assets/img/trustus/capricehost.webp',
                                link: 'https://capricehost.com'
                            },
                        ],
                        [
                            {
                                name: 'OnPowered',
                                logo: 'https://cdn.bagou450.com/assets/img/trustus/powered.webp',
                                link: 'https://onpowered.net'
                            },
                            {
                                name: 'Laravel',
                                logo: 'https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg',
                                link: 'https://capricehost.com'
                            },
                            {
                                name: 'Statamic',
                                logo: 'https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg',
                                link: 'https://capricehost.com'
                            },
                        ],
                    ].map((group, groupIndex) => (
                        <li key={groupIndex}>
                            <ul
                                role="list"
                                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                            >
                                {group.map((company) => (

                                    <li key={company.name} className='flex'>
                                        <a href={company.link} rel={'noreferrer'} target={'_blank'}>
                                            <img src={company.logo} alt={company.name} />
                                        </a>
                                    </li>

                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <section
                id="features"
                aria-label="Features for running your books"
                className="relative overflow-hidden pb-28 pt-20 sm:py-32 bg-[#2763d8]"
            >
                {/*<img
                    className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
                    src={'https://cdn.bagou450.com/assets/img/background/bg-1.webp'}
                    alt=""
                    width={2245}
                    height={1636}
                />*/}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                            Pterodactyl Addons Redefined.
                        </h2>
                        <p className='mt-6 text-lg tracking-tight text-blue-100'>
                            Seamless integration for your game hosting and websites. Quality, speed, and reliability at
                            the
                            forefront.
                        </p>
                    </div>
                    <Tab.Group
                        as='div'
                        className='mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'
                        vertical={tabOrientation === 'vertical'}
                    >
                        {({ selectedIndex }) => (
                            <>
                                <div
                                    className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                    <Tab.List
                                        className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                        {features.map((feature, featureIndex) => (
                                            <div
                                                key={feature.title}
                                                className={clsx(
                                                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                                                    selectedIndex === featureIndex
                                                        ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                                        : 'hover:bg-white/10 lg:hover:bg-white/5',
                                                )}
                                            >
                                                <h3>
                                                    <Tab
                                                        className={clsx(
                                                            'font-display text-lg ui-not-focus-visible:outline-none',
                                                            selectedIndex === featureIndex
                                                                ? 'text-blue-600 lg:text-white'
                                                                : 'text-blue-100 hover:text-white lg:text-white',
                                                        )}
                                                    >
                                                        <span
                                                            className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                        {feature.title}
                                                    </Tab>
                                                </h3>
                                                <p
                                                    className={clsx(
                                                        'mt-2 hidden text-sm lg:block',
                                                        selectedIndex === featureIndex
                                                            ? 'text-white'
                                                            : 'text-blue-100 group-hover:text-white',
                                                    )}
                                                >
                                                    {feature.description}
                                                </p>
                                            </div>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels className="lg:col-span-7">
                                    {features.map((feature) => (
                                        <Tab.Panel key={feature.title} unmount={false}>
                                            <div className="relative sm:px-6 lg:hidden">
                                                <div
                                                    className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div
                                                className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                                <img
                                                    className="w-full"
                                                    src={feature.image}
                                                    alt=""
                                                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                                />
                                            </div>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </>
                        )}
                    </Tab.Group>
                </div>
            </section>
            <section
                id="secondary-features"
                aria-label="Features for simplifying everyday business tasks"
                className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
            >
                <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className={`${dark ? 'text-slate-400' : 'text-slate-900'} font-display text-3xl tracking-tight sm:text-4xl`}>
                            Easy Control with Bagou450 Tools.
                        </h2>
                        <p className={`${dark ? 'text-slate-500' : 'text-slate-700'} mt-4 text-lg tracking-tight`}>
                            Our addons make everything simpler for you.
                        </p>
                    </div>
                    <FeaturesMobile />
                    <FeaturesDesktop />
                </div>
            </section>

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
                                window.scrollTo(0,0);
                            }}
                            className={'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10'}>
                            Get Started Now
                        </NavLink>

                    </div>
                </div>
            </section>
        </div>
    );
}


interface Feature2 {
    name: React.ReactNode;
    summary: string;
    description: string;
    image: string;
    icon: React.ElementType;
}

const features2: Array<Feature2> = [
    {
        name: 'Bagou Center',
        summary: 'Centralized Product and Support Management.',
        description:
            'Manage your product versions, licenses, and settings directly from a user-friendly interface. Stay updated on support contacts and Bagou450 server status, all from one place.',
        image: 'https://cdn.bagou450.com/assets/img/presentation/bagoucenter.webp',
        icon: CommandLineIcon
    },
    {
        name: 'Auto Installer',
        summary:
            'One-command Addon Installation.',
        description:
            'Use our intuitive auto installer to seamlessly set up our products on your panel. Just key in your license, and the installer takes care of file adjustments and additions for you.',
        image: 'https://cdn.bagou450.com/assets/img/presentation/autoinstaller.webp',
        icon: CogIcon
    },
    {
        name: 'Simple dashboard',
        summary:
            'Unified Management for Orders, Licenses, and Tickets.',
        description:
            'Navigate through a user-friendly dashboard to oversee your orders, licenses, and tickets. Additionally, access and download your products with ease.',
        image: 'https://cdn.bagou450.com/assets/img/presentation/dashboard.webp',
        icon: WrenchIcon
    },
];

function Feature({
    feature,
    isActive,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'> & {
    feature: Feature2
    isActive: boolean
}) {
    const {dark} = useDark();

    return (
        <div
            className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
            {...props}
        >
            <div
                className={clsx(
                    'w-9 rounded-lg',
                    isActive ? 'bg-blue-600' : 'bg-slate-500',
                )}
            >
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <feature.icon />
                </svg>
            </div>
            <h3
                className={clsx(
                    'mt-6 text-sm font-medium',
                    isActive ? 'text-blue-600' : dark ? 'text-slate-400' : 'text-slate-600',
                )}
            >
                {feature.name}
            </h3>
            <p className={`${dark ? 'text-slate-500' : 'text-slate-900'} mt-2 font-display text-xl`}>
                {feature.summary}
            </p>
            <p className={`${dark ? 'text-slate-400' : 'text-slate-600'} mt-4 text-sm`}>{feature.description}</p>
        </div>
    );
}

function FeaturesMobile() {
    const {dark} = useDark();

    return (
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            {features2.map((feature) => (
                <div key={feature.summary}>
                    <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img
                                className="w-full"
                                src={feature.image}
                                alt=""
                                sizes="52.75rem"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function FeaturesDesktop() {
    const {dark} = useDark();

    return (
        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
            {({ selectedIndex }) => (
                <>
                    <Tab.List className="grid grid-cols-3 gap-x-8">
                        {features2.map((feature, featureIndex) => (
                            <Feature
                                key={feature.summary}
                                feature={{
                                    ...feature,
                                    name: (
                                        <Tab className="ui-not-focus-visible:outline-none">
                                            <span className="absolute inset-0" />
                                            {feature.name}
                                        </Tab>
                                    ),
                                }}
                                isActive={featureIndex === selectedIndex}
                                className="relative"
                            />
                        ))}
                    </Tab.List>
                    <Tab.Panels
                        className={`${dark ? 'bg-bg450-inputdark' : 'bg-slate-200'} relative mt-20 overflow-hidden rounded-4xl px-14 py-16 xl:px-16`}>
                        <div className="-mx-5 flex">
                            {features2.map((feature, featureIndex) => (
                                <Tab.Panel
                                    static
                                    key={feature.summary}
                                    className={clsx(
                                        'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                                        featureIndex !== selectedIndex && 'opacity-60',
                                    )}
                                    style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                                    aria-hidden={featureIndex !== selectedIndex}
                                >
                                    <div
                                        className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                        <img
                                            className="w-full"
                                            src={feature.image}
                                            alt=""
                                            sizes="52.75rem"
                                        />
                                    </div>
                                </Tab.Panel>
                            ))}
                        </div>
                        <div
                            className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
                    </Tab.Panels>
                </>
            )}
        </Tab.Group>
    );
}