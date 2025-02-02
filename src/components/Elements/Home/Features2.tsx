// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { lazy, Suspense } from 'preact/compat';
import { useDark } from '../../../App';
import clsx from 'clsx';
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';

const FeaturesDesktop = lazy(() => import('./Features2/FeaturesDesktop'));
const FeaturesMobile = lazy(() => import('./Features2/FeaturesMobile'));

export interface Feature2 {
    name: any;
    summary: string;
    description: string;
    height: string;
    width: string;
    image: string;
    icon: ComponentType;
}


export default function Features2() {
    const { dark } = useDark();
    const { t } = useTranslation();

    return (
        <section
            id='secondary-features'
            aria-label='Features for simplifying everyday business tasks'
            className='pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32'
        >
            <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                <div className='mx-auto max-w-2xl md:text-center'>
                    <h2 className={`${dark ? 'text-slate-400' : 'text-slate-900'} font-display text-3xl tracking-tight sm:text-4xl`}>
                        {t('features2.title')}
                    </h2>
                    <h3 className={`${dark ? 'text-slate-500' : 'text-slate-700'} mt-4 text-lg tracking-tight`}>
                        {t('features2.subtitle')}
                    </h3>
                </div>
                <Suspense fallback={<Loading />}>
                    <FeaturesMobile />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <FeaturesDesktop />
                </Suspense>
            </div>
        </section>
    );
}

export function FeatureM({
    feature,
    isActive,
    isDesktop,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'> & {
    feature: Feature2
    isActive: boolean
    isDesktop: boolean
}) {
    const { dark } = useDark();

    return (
        <div
            className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
            {...props}
        >

            {!isDesktop ? (
                <>
                    <div
                        className={clsx(
                            'w-9 rounded-lg',
                            isActive ? 'bg-blue-600' : 'bg-slate-500',
                        )}
                    >
                        <svg aria-hidden='true' className='h-9 w-9' fill='none'>
                            <feature.icon />
                        </svg>
                    </div>

                    <h4
                        className={clsx(
                            'mt-6 text-sm font-medium',
                            isActive ? 'text-blue-600' : dark ? 'text-slate-400' : 'text-slate-600',
                        )}
                    >
                        {feature.name}
                    </h4>
                </>
            ) : (
                feature.name
            )

            }

            <p className={`${dark ? 'text-slate-500' : 'text-slate-900'} mt-2 font-display text-xl`}>
                {feature.summary}
            </p>
            <p className={`${dark ? 'text-slate-400' : 'text-slate-600'} mt-4 text-sm`}>{feature.description}</p>
        </div>
    );
}
