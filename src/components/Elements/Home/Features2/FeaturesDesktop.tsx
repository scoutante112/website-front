import React from 'react';
import { useDark } from '../../../../App';
import { CommandLineIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Feature2 } from '../Features2';


export default function FeaturesDesktop() {
    const {dark} = useDark();
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
            image: dark ? 'https://cdn.bagou450.com/assets/img/presentation/dashboard_white.webp' : 'https://cdn.bagou450.com/assets/img/presentation/dashboard_dark.webp',
            icon: WrenchIcon
        },
    ];
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