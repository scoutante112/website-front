import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { langs } from './i18n';
import { useNavigate } from 'react-router-dom';
import { changeLanguage } from 'i18next';

export default function LanguageRedirect() {
    const navigate = useNavigate();

    let language = Cookies.get('lang') || navigator.language.split('-')[0]; // Assurez-vous de ne garder que la partie langue sans région
    if (!langs.includes(language)) {
        language = 'en';
    }
    Cookies.set('lang', language);
    changeLanguage(language).then(() => {
        navigate(`/${language}${window.location.pathname}`, { replace: true });
    });

    return null;
}
