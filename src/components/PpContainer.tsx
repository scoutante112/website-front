import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDark } from '../App';
import { useTranslation } from 'react-i18next';

export default function PpContainer() {
    const {dark} = useDark();
    const { t } = useTranslation();
    const en = window.location.pathname.startsWith('/en');
    document.title = `Bagou450 | ${t('privacy.title')}`;
    return (
        <section className="mx-4 md:mx-16">
            <Helmet>
                <meta name='description' content={t('privacy.description')} />

                <meta name="twitter:description" content={t('privacy.description')} />

                <meta property="og:description" content={t('privacy.description')} />
            </Helmet>
            <h1 className={`text-4xl text-center ${dark ? 'text-white' : 'text-black'}`}>
                <strong>{t('privacy.title')}</strong></h1>

            {!en ? (
                <h2 className={`text-xl text-center opacity-60 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.translate')}</h2>) : null}

            <div className="my-8">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section1.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section1.description')}</p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section2.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section2.description')}</p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section3.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section3.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section4.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section4.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section5.title')}
                </h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section5.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('privacy.section6.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section6.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section7.title')}
                </h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section7.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('privacy.section8.title')}
                </h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}> {t('privacy.section8.description')}
                </p>
            </div>

        </section>
    );
}