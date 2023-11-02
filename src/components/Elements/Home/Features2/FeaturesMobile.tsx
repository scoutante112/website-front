import React from 'react';
import { useDark } from '../../../../App';
import { CommandLineIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';
import { Feature2 } from '../Features2';

export default function FeaturesMobile() {
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
            image: dark ? 'https://cdn.bagou450.com/assets/img/presentation/dashboard_dark.webp' : 'https://cdn.bagou450.com/assets/img/presentation/dashboard_white.webp',
            icon: WrenchIcon
        },
    ];
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
