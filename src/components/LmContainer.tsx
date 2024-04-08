import { Helmet } from 'react-helmet';
import { useDark } from '../App';
import { useTranslation } from 'react-i18next';

export default function LmContainer() {
    const {dark} = useDark();
    const { t } = useTranslation();
    document.title = `Bagou450 | ${t('legalmention.title')}`;

    return (
        <section className="mx-4 md:mx-16">
            <Helmet>
                <meta name='description' content={t('legalmention.description')}/>

                <meta name="twitter:description"  content={t('legalmention.description')}/>

                <meta property="og:description"  content={t('legalmention.description')}/>
            </Helmet>
            <h1 className={`text-4xl text-center ${dark ? 'text-white' : 'text-black'}`}><strong>{t('legalmention.title')}</strong></h1>
            <div className="my-8">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.subtitle1')}</h2>
                <p className={`my-4 font-bold ${dark ? 'text-white' : 'text-black'}`}>
                    {t('legalmention.name')} BAGOU450<br/>
                    {t('legalmention.form')}<br/>
          SIREN: 951 613 033<br/>
                    {t('legalmention.siret')} 951 613 033 00012<br/>
                    {t('legalmention.office')}: 2 RUE DES ORCHIDEES, 35450 DOURDAIN, France
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.subtitle2')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.directorname')} ROMAIN GUILLEMOT<br/>
                    {t('legalmention.birth')} 30 November 2005</p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.subtitle3')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.postal')} BAGOU450, 2 RUE DES ORCHIDEES, 35450 DOURDAIN, France<br/>
                    {t('legalmention.email')} contact@bagou450.com
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.subtitle4')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.webhost')}
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.subtitle5')}</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>{t('legalmention.intellectual')}
                </p>
            </div>
        </section>
    );
}