import { ReactNode, useEffect } from 'preact/compat';
import { langs } from './i18n';
import { changeLanguage } from 'i18next';
import Cookies from 'js-cookie';

export default function LanguageDetector({ children }: {children: ReactNode}) {
    useEffect(() => {
        const path = window.location.pathname.split('/')[1];

        if (langs.includes(path)) {
            changeLanguage(path);
            document.documentElement.lang = path;
            Cookies.set('lang', path);
        }
    }, [history]);

    return <>{children}</>;
}