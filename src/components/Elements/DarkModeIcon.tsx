import Cookies from 'js-cookie';
import { useDark } from '../../App';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function DarkModeIcon() {
    const { dark, setDark } = useDark();
    const toggleDarkTheme = () => {
        Cookies.set('dark', dark ? 'false' : 'true');
        setDark(!dark);
        // @ts-ignore
        window.chatwootSettings = {
            darkMode: dark ? 'dark' : 'light',
        };

    };
    if (dark) {
        return (
            <div className='relative'>
                <button
                    onClick={toggleDarkTheme}
                    title={'Enable white mode'}
                    aria-label={'White Mode Button'}
                    className='text-white relative items-center hover:opacity-50 opacity-75 duration-300 flex'
                >
                    <SunIcon className='h-6 w-6 mr-2' />
                </button>

            </div>

        );
    }
    return (
        <div className='relative'>
            <button
                onClick={toggleDarkTheme}
                title={'Enable Dark mode'}
                aria-label={'Dark Mode Button'}
                className='text-gray-600 relative items-center hover:opacity-50 opacity-75 duration-300 flex'
            >
                <MoonIcon className='h-6 w-6 mr-2' />
            </button>

        </div>

    );
}