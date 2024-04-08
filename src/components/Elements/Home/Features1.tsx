// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'preact/compat';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';


export default function Features1() {
    const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
        'horizontal',
    );
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
    const { t } = useTranslation();

    const features = [
        {
            title: t('features1.feature1.title'),
            description: t('features1.feature1.description'),
            image: 'https://cdn.bagou450.com/assets/img/addons/mcversions/computer/1.webp',
            imagemobile: 'https://cdn.bagou450.com/assets/img/addons/mcversions/mobile/1.webp',

        },
        {
            title: t('features1.feature2.title'),
            description: t('features1.feature2.description'),
            image: 'https://cdn.bagou450.com/assets/img/addons/mcplugins/computer/1.webp',
            imagemobile: 'https://cdn.bagou450.com/assets/img/addons/mcplugins/mobile/1.webp',

        },
        {
            title: t('features1.feature3.title'),
            description: t('features1.feature3.description'),
            image: 'https://cdn.bagou450.com/assets/img/addons/artifacts/computer/1.webp',
            imagemobile: 'https://cdn.bagou450.com/assets/img/addons/artifacts/mobile/1.webp',

        },
        {
            title: t('features1.feature4.title'),
            description: t('features1.feature4.description'),
            image: 'https://cdn.bagou450.com/assets/img/addons/cloudservers/computer/1.webp',
            imagemobile: 'https://cdn.bagou450.com/assets/img/addons/cloudservers/mobile/1.webp',

        },
    ];
    return (
        <section
            id='features'
            aria-label='Features for running your books'
            className='relative overflow-hidden pb-28 pt-20 sm:py-32 bg-bg450-logo'
        >
            {/*<img
                    className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
                    src={'https://cdn.bagou450.com/assets/img/background/bg-1.webp'}
                    alt=""
                    width={2245}
                    height={1636}
                />*/}
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
                    <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl'>
                        {t('features1.title')}
                    </h2>
                    <p className='mt-6 text-lg tracking-tight text-blue-100'>
                        {t('features1.subtitle')}
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
                                className='-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
                                <Tab.List
                                    className='relative flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
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

                                            <Tab
                                                className={clsx(
                                                    'font-display text-lg ui-not-focus-visible:outline-none',
                                                    selectedIndex === featureIndex
                                                        ? 'text-blue-600 lg:text-white'
                                                        : 'text-blue-100 hover:text-white lg:text-white',
                                                )}
                                            >
                                                <h3>
                                                    <span
                                                        className='absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none' />
                                                    {feature.title}
                                                </h3>
                                            </Tab>

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
                            <Tab.Panels className='lg:col-span-7'>
                                {features.map((feature) => (
                                    <Tab.Panel key={feature.title} unmount={false}>
                                        <div className='relative sm:px-6 lg:hidden'>
                                            <div
                                                className='absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl' />
                                            <p className='relative mx-auto max-w-2xl text-base text-white sm:text-center'>
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div
                                            className='mt-20 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
                                            <img
                                                loading={'lazy'}
                                                className='hidden md:block w-full'
                                                width={1920}
                                                height={1080}
                                                src={feature.image}
                                                alt={feature.title}
                                                sizes='(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem'
                                            />
                                            <img
                                                loading={'lazy'}
                                                className=' md:hidden w-full'
                                                width={630}
                                                height={994}
                                                src={feature.imagemobile}
                                                alt={feature.title}
                                                sizes='(min-width: 640px) 100vw, 45rem'
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
    );
}