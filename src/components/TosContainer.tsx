import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDark } from '../App';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

export default function TosContainer() {
    const { dark } = useDark();
    const { t } = useTranslation();
    const en = window.location.pathname.startsWith('/en');
    document.title = `Bagou450 | ${t('tos.title')}`;
    return (
        <section className="mx-4 md:mx-16">
            <Helmet>
                <meta name='description'
                    content={t('tos.description')} />
                <meta name='twitter:description'
                    content={t('tos.description')} />
                <meta name='og:description'
                    content={t('tos.description')} />
            </Helmet>
            <h1 className={`text-4xl text-center ${dark ? 'text-white' : 'text-black'}`}><strong>{t('tos.title')}</strong></h1>
            {!en ? ( <h2 className={`text-xl text-center opacity-60 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.translate')}</h2> ) : null}
            <div className='my-8'>
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-black'}`}>{t('tos.overview.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.overview.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section1.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section1.description')}</p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section2.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section2.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section3.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section3.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section4.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section4.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section5.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section5.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section6.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section6.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section7.title')}S</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>  {t('tos.section7.description')}</p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section8.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}> {t('tos.section8.description')}     </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section9.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section9.description')}        </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section10.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section10.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section11.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section11.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section12.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section12.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}> {t('tos.section13.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section13.description')}                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section14.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section14.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section15.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section15.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section16.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section16.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section17.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section17.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section18.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section18.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section19.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section19.description')}
                </p>
            </div>
            <div className="my-8">

                <h2  className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.section20.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('tos.section20.description')}
                </p>
            </div>
        </section>
    );
}