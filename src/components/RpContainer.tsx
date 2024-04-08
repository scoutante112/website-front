import { Helmet } from 'react-helmet';
import { useDark } from '../App';
import { useTranslation } from 'react-i18next';

export default function RpContainer() {
    const {dark} = useDark();
    const { t } = useTranslation();
    const en = window.location.pathname.startsWith('/en');
    document.title = `Bagou450 | ${t('refund.title')}`;
    return (
        <section className="mx-4 md:mx-16">
            <Helmet>
                <meta name='description' content={t('refund.description')} />

                <meta name="twitter:description" content={t('refund.description')} />

                <meta property="og:description" content={t('refund.description')} />
            </Helmet>
            <h1 className={`text-4xl text-center ${dark ? 'text-white' : 'text-black'}`}><strong>{t('refund.title')}</strong></h1>
            {!en ? ( <h2 className={`text-xl text-center opacity-60 ${dark ? 'text-white' : 'text-black'}`}>{t('tos.translate')}</h2> ) : null}

            <div className="my-8">
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('refund.overview')}</p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('refund.problems.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('refund.problems.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('refund.exceptions.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('refund.exceptions.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('refund.europe.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('refund.exceptions.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('refund.request.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('refund.request.description')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('refund.refunds.title')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>
                    {t('refund.refunds.description')}
                </p>
            </div>

        </section>
    );
}