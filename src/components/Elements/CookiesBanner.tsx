import Cookies from 'js-cookie';
import { loadGA4, loadScript } from '../../App';
import { useTranslation } from 'react-i18next';

export default function CookiesBanner({ setCookieConsent }: {
    setCookieConsent: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const acceptCookies = () => {
        Cookies.set('CookieConsent', 'true');
        setCookieConsent(true);
        loadScript();
        loadGA4();
    };
    const { t } = useTranslation();
    return (
        <div
            className='fixed bottom-0 left-0 right-0 bg-bg450-logo p-4 z-50'
            aria-label='Cookie consent banner'
        >
            <div className='flex justify-between items-center z-50'>
                <p className='text-white' role='alert'>
                    {t('cookies.message')}
                </p>
                <button
                    onClick={acceptCookies}
                    className='bg-white text-slate-900 px-4 py-2 rounded hover:bg-blue-50'
                    aria-label={t('cookies.button')}
                >{t('cookies.button')}
                </button>
            </div>
        </div>
    );
}