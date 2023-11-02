import React from 'react';
import { useDark } from '../../../App';
import FeaturesMobile from './Features2/FeaturesMobile';
import clsx from 'clsx';
import FeaturesDesktop from './Features2/FeaturesDesktop';

export interface Feature2 {
    name: React.ReactNode;
    summary: string;
    description: string;
    image: string;
    icon: React.ElementType;
}



export default function Features2() {
    const {dark} = useDark();
    return (
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
    );
}

export function Feature({
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
