// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment, useEffect, useState } from 'preact/compat';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '../NavBar';
import Cookies from 'js-cookie';
import { useDark } from '../../App';
import { langs } from '../../utils/i18n';
import { changeLanguage } from 'i18next';
import { useLocation } from 'react-router-dom';

export const langFullname = {
    'en': 'English',
    'fr': 'French',
};
export default function LanguageChanger() {
    const { dark } = useDark();
    let language = Cookies.get('lang') || 'en';


    const changeLang = (lang: string) => {
        changeLanguage(lang);
        Cookies.set('lang', lang);
        const actualPath = window.location.pathname.split('/');
        actualPath[1] = lang;
        window.location.href = actualPath.join('/');
    };
    return (
        <Menu as='div'>
            <div>
                <Menu.Button className='relative my-auto h-6 w-6'>
                    <img
                        src={`https://flagsapi.com/${language === 'en' ? 'GB' : language.toUpperCase()}/flat/64.png`} />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items
                    className={`absolute right-0 z-10 mt-2 w-32 origin-top-left rounded-md ${dark ? 'bg-bg450-dark' : 'bg-white'} shadow-md  z-5 ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className='py-1'>
                        {langs.map((lang, index) => (
                            <Menu.Item key={index}>
                                <div
                                    className={`relative h-6 w-6 mx-2 my-2 gap-x-4 flex ${dark ? 'text-white' : 'text-gray-900'} hover:opacity-75`}
                                    onClick={() => changeLang(lang)}>
                                    <img
                                        src={`https://flagsapi.com/${lang === 'en' ? 'GB' : lang.toUpperCase()}/flat/64.png`} /> {langFullname[lang]}
                                </div>
                            </Menu.Item>
                        ))}


                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}