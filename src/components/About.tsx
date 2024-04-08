import { AcademicCapIcon, CurrencyEuroIcon, ServerIcon } from '@heroicons/react/24/solid';
import { useDark } from '../App';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    document.title = `Bagou450 | ${t('about.title')}`;
    const { dark } = useDark();
    return (
        <div className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} py-24 sm:py-32`}>
            <Helmet>
                <meta name='description'
                    content={t('about.description')} />

                <meta name='twitter:description'
                    content={t('about.description')} />
                <meta property='og:description'
                    content={t('about.description')} />
            </Helmet>
            <div className=' px-6 lg:px-8'>
                <div
                    className='mx-auto grid max-w-4xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    <div className='lg:pr-4'>
                        <div
                            className={`relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
                            <img
                                className='absolute inset-0 h-full w-full object-cover brightness-125 saturate-0'
                                src='data:image/png;base64,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'
                                alt=''
                            />
                            <div className='absolute inset-0 bg-gray-900 mix-blend-multiply' />
                            <div
                                className='absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl'
                                aria-hidden='true'
                            >
                                <div
                                    className={`aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-bg450-logo opacity-40 ${dark ? 'to-bg450-lessdark' : 'to-slate-200'}`}
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div>
                            <figure className='relative isolate'>
                                <svg
                                    viewBox='0 0 162 128'
                                    fill='none'
                                    aria-hidden='true'
                                    className='absolute -left-2 -top-4 -z-10 h-32 stroke-white/20'
                                >
                                    <path
                                        id='0ef284b8-28c2-426e-9442-8655d393522e'
                                        d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z'
                                    />
                                    <use href='#0ef284b8-28c2-426e-9442-8655d393522e' x={86} />
                                </svg>

                                <blockquote className='mt-6 text-xl font-semibold leading-8'>
                                    <p className="text-slate-200">
                                        {t('about.blockquote')}
                                    </p>
                                </blockquote>
                                <figcaption className='mt-6 text-sm leading-6 text-gray-300'>
                                    <strong className='font-semibold text-white'>Romain
                                        Guillemot,</strong> {t('about.ceo')}
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className={'lg:col-span-2'}>
                        <div className='px-6 lg:contents'>
                            <div
                                className='mx-auto pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:flex-none lg:pt-0'>
                                <p className='text-base font-semibold leading-7 text-bg450-logo'>{t('about.content.subtitle1')}</p>
                                <h1 className={`${dark ? 'text-slate-200' : 'text-gray-900'} mt-2 text-3xl font-bold tracking-tight sm:text-4xl`}>
                                    {t('about.content.title')}
                                </h1>
                                <p className={`mt-6 text-xl leading-8 ${dark ? 'text-slate-200' : 'text-gray-900'}`}>
                                    {t('about.content.description1')}                                </p>

                                <div
                                    className={`mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none ${dark ? 'text-slate-200' : 'text-gray-900'}`}>
                                    <h2 className={`${dark ? 'text-slate-200' : 'text-gray-900'} mt-2 text-xl font-semibold tracking-tight sm:text-2xl`}>
                                        {t('about.content.subtitle2')}
                                    </h2>
                                    <p className={dark ? 'text-slate-200' : 'text-black'}>
                                        {t('about.content.description2')}
                                    </p>
                                    <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                                        <li className='flex gap-x-3'>
                                            <AcademicCapIcon className='mt-1 h-5 w-5 flex-none text-indigo-600'
                                                aria-hidden='true' />
                                            <span className={dark ? 'text-slate-200' : 'text-gray-900'}>
                                                <strong
                                                    className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-900'}`}>{t('about.content.list1.title')}</strong>
                                                {t('about.content.list1.description')}

                                            </span>
                                        </li>
                                        <li className='flex gap-x-3'>
                                            <CurrencyEuroIcon className='mt-1 h-5 w-5 flex-none text-indigo-600'
                                                aria-hidden='true' />
                                            <span className={dark ? 'text-slate-200' : 'text-gray-900'}>
                                                <strong
                                                    className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-900'}`}>{t('about.content.list2.title')}</strong>
                                                {t('about.content.list2.description')}
                                            </span>
                                        </li>
                                        <li className='flex gap-x-3'>
                                            <ServerIcon className='mt-1 h-5 w-5 flex-none text-indigo-600'
                                                aria-hidden='true' />
                                            <span className={dark ? 'text-slate-200' : 'text-gray-900'}>
                                                <strong
                                                    className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-900'}`}>{t('about.content.list3.title')}</strong>
                                                {t('about.content.list3.description')}
                                            </span>
                                        </li>
                                    </ul>
                                    <p className={`mt-8 ${dark ? 'text-slate-200' : 'text-gray-900'}`}>
                                        {t('about.content.sub-description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <dl className={`mx-auto mt-4 grid grid-cols-2 gap-8 border-t sm:grid-cols-4 pt-10 pb-24 sm:pb-32 ${dark ? 'border-slate-200/10' : 'border-gray-900/10'}`}>
                            <div>
                                <dt className={`text-center text-sm font-semibold leading-6 ${dark ? 'text-slate-100' : 'text-gray-600'}`}>{t('about.stats.founded')}</dt>
                                <dd className={`text-center mt-2 text-3xl font-bold leading-10 tracking-tight ${dark ? 'text-slate-200' : 'text-gray-900'}`}>2016</dd>
                            </div>
                            <div>
                                <dt className={`text-center -sm font-semibold leading-6 ${dark ? 'text-slate-100' : 'text-gray-600'}`}>{t('about.stats.products')}</dt>
                                <dd className={`text-center mt-2 text-3xl font-bold leading-10 tracking-tight ${dark ? 'text-slate-200' : 'text-gray-900'}`}>+30</dd>
                            </div>
                            <div>
                                <dt className={`text-center text-sm font-semibold leading-6 ${dark ? 'text-slate-100' : 'text-gray-600'}`}>{t('about.stats.customers')}</dt>
                                <dd className={`text-center mt-2 text-3xl font-bold leading-10 tracking-tight ${dark ? 'text-slate-200' : 'text-gray-900'}`}>+1000</dd>
                            </div>
                            <div>
                                <dt className={`text-center text-sm font-semibold leading-6 ${dark ? 'text-slate-100' : 'text-gray-600'}`}>{t('about.stats.servers')}</dt>
                                <dd className={`text-center mt-2 text-3xl font-bold leading-10 tracking-tight ${dark ? 'text-slate-200' : 'text-gray-900'}`}>+10</dd>
                            </div>
                        </dl>

                    </div>
                </div>
            </div>
        </div>
    );
}