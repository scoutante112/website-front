import './assets/App.css';
import React, { createContext, lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStylesheet from './assets/css/GlobalStylesheet';
import 'react-toastify/dist/ReactToastify.min.css';
import LazyLoad from 'react-lazyload';
import { ToastContainer } from 'react-toastify';
import MainRouter from './components/MainRouter';
import Cookies from 'js-cookie';
import ErrorBoundary from './utils/ErrorBoundary';
import { langs } from './utils/i18n';
import LanguageRedirect from './utils/LanguageRedirect';
import LanguageDetector from './utils/LanguageDetector';

const  CookiesBanner = lazy(() => import('./components/Elements/CookiesBanner'));
const Loading = lazy(() => import('./components/Elements/Loading'));
const AccountRouter = lazy(() => import('./components/Account/AccountRouter'));



const DarkContext = createContext({
    dark: true,
    setDark: (value: boolean) => {},
});
export function useDark() {
    return useContext(DarkContext);
}
declare global {
    interface Window {
        chatwootSDK: {
            run(config: { websiteToken: string; baseUrl: string }): void;
        };
        chatwootSettings: {
            darkMode: 'dark' | 'light';
        };
    }
}
export const loadScript = () => {
    const scriptId = 'BagouChat';

    if(window.chatwootSDK || document.getElementById(scriptId)) {
        return;
    }
    try {
        const g = document.createElement('script');
        g.src = 'https://chat.bagou450.com/packs/js/sdk.js';
        g.defer = true;
        g.async = true;
        g.id = scriptId;
        document.head.appendChild(g);
        g.onload = () => {
            window.chatwootSDK.run({
                websiteToken: 'zruKdBbZgYCnzPFz7EmExMyo',
                baseUrl: 'https://chat.bagou450.com',
            });
        };
    } catch (error) {
        console.error('Error loading BagouChat:', error);
    }
};

export const loadGA4 = async () => {
    const trackingID = 'G-EHDSK41TPK';
    const scriptId = 'ga-4-script';

    if (document.getElementById(scriptId)) {
        return;
    }

    const gtmScript = document.createElement('script');
    gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    gtmScript.async = true;
    gtmScript.id = scriptId;

    document.head.appendChild(gtmScript);

    try {
        await new Promise((resolve, reject) => {
            gtmScript.onload = resolve;
            gtmScript.onerror = () => reject(new Error('Failed to load GA4 script'));
        });

        const { default: ReactGA } = await import('react-ga4');
        ReactGA.initialize(trackingID);
    } catch (error) {
        console.error('Error loading GA4:', error);
    }
};
function App() {
    const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [cookieConsent, setCookieConsent] = useState<boolean>(Cookies.get('CookieConsent') === 'true');
    useEffect(() => {

        const cookie = Cookies.get('dark');
        if(cookie) {
            if(cookie === 'true') {
                setDark(true);

            }

        }
        if(cookieConsent) {
            loadScript();
            loadGA4();
        }
        window.chatwootSettings = {
            darkMode: dark ? 'dark' : 'light',
        };

    }, []);


    return (
        <DarkContext.Provider value={{ dark, setDark }}>

            <ErrorBoundary>
                <LanguageDetector>
                    <GlobalStylesheet />
                    <Router>
                        <LazyLoad once>
                            <Suspense fallback={<Loading />}>
                                <ToastContainer />
                            </Suspense>
                        </LazyLoad>


                        <div className={dark ? 'min-h-screen bg-bg450-dark' : 'min-h-screen bg-white'}>

                            <Routes>
                                {langs.map((lang, index) => (
                                    <React.Fragment key={index}>
                                        <Route path={`/${lang}/account/*`} element={<Suspense fallback={<Loading />} >
                                            <AccountRouter />
                                        </Suspense>} />
                                        <Route path={`/${lang}/admin/*`} element={<Suspense fallback={<Loading />} >
                                            <AccountRouter />
                                        </Suspense>} />
                                        <Route path={`/${lang}/*`} element={<MainRouter />}/>

                                    </React.Fragment>
                                ))}

                                <Route path={'/*'} element={<Suspense fallback={<Loading />}><LanguageRedirect/> </Suspense>} />


                            </Routes>
                        </div>
                        {!cookieConsent && <Suspense fallback={<></>}><CookiesBanner setCookieConsent={setCookieConsent}/></Suspense>}
                    </Router>
                </LanguageDetector>
            </ErrorBoundary>
        </DarkContext.Provider>
    );
}

export default App;
