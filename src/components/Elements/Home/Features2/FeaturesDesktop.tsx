import React from 'react';
import { useDark } from '../../../../App';
import { CommandLineIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Feature2, FeatureM } from '../Features2';
import { Tab } from '@headlessui/react';


export default function FeaturesDesktop() {
    const {dark} = useDark();
    const features2: Array<Feature2> = [
        {
            name: 'Bagou Center',
            summary: 'Centralized Product and Support Management.',
            description:
                'Manage your product versions, licenses, and settings directly from a user-friendly interface. Stay updated on support contacts and Bagou450 server status, all from one place.',
            image: 'https://cdn.bagou450.com/assets/img/presentation/bagoucenter.webp',
            height: '939',
            width: '1920',
            icon: CommandLineIcon
        },
        {
            name: 'Auto Installer',
            summary:
                'One-command Addon Installation.',
            description:
                'Use our intuitive auto installer to seamlessly set up our products on your panel. Just key in your license, and the installer takes care of file adjustments and additions for you.',
            image: 'https://cdn.bagou450.com/assets/img/presentation/autoinstaller.webp',
            height: '964',
            width: '1920',
            icon: CogIcon
        },
        {
            name: 'Simple dashboard',
            summary:
                'Unified Management for Orders, Licenses, and Tickets.',
            description:
                'Navigate through a user-friendly dashboard to oversee your orders, licenses, and tickets. Additionally, access and download your products with ease.',
            image: !dark ? 'https://cdn.bagou450.com/assets/img/presentation/dashboard_white.webp' : 'https://cdn.bagou450.com/assets/img/presentation/dashboard_dark.webp',
            height: '939',
            width: '1920',
            icon: WrenchIcon
        },
    ];
    return (
        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
            {({ selectedIndex }) => (
                <>
                    <Tab.List className="grid grid-cols-3 gap-x-8">
                        {features2.map((feature, featureIndex) => (
                            <FeatureM
                                key={feature.summary}
                                isDesktop
                                feature={{
                                    ...feature,
                                    name: (
                                        <Tab>
                                            <div
                                                className={clsx(
                                                    'w-9 rounded-lg',
                                                    featureIndex === selectedIndex ? 'bg-blue-600' : 'bg-slate-500',
                                                )}
                                            >
                                                <svg aria-hidden='true' className='h-9 w-9' fill='none'>
                                                    <feature.icon />
                                                </svg>
                                            </div>

                                            <h4
                                                className={clsx(
                                                    'mt-6 text-sm font-medium',
                                                    featureIndex === selectedIndex ? 'text-blue-600' : dark ? 'text-slate-400' : 'text-slate-600',
                                                )}
                                            >
                                                <div className='ui-not-focus-visible:outline-none'>
                                                    <span className='absolute inset-0' />
                                                    {feature.name}
                                                </div>
                                            </h4>
                                        </Tab>
                                    ),
                                }}
                                isActive={featureIndex === selectedIndex}
                                className='relative'
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
                                            loading={'lazy'}
                                            className="w-full"
                                            src={feature.image}
                                            alt={feature.name ? feature.name : ''}
                                            sizes="52.75rem"
                                            height={feature.height}
                                            width={feature.width}
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