import './assets/App.css';
import React, { createContext, lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStylesheet from './assets/css/GlobalStylesheet';
import 'react-toastify/dist/ReactToastify.min.css';
import LazyLoad from 'react-lazyload';
import { ToastContainer } from 'react-toastify';
import MainRouter from './components/MainRouter';
import Cookies from 'js-cookie';
const CookiesBanner = lazy(() => import('./components/Elements/CookiesBanner'));
const Loading = lazy(() => import('./components/Elements/Loading'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
import AccountRouter from './components/Account/AccountRouter';



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
   /* if(window.chatwootSDK) {
        return;
    }
    const g = document.createElement('script');
    const s = document.getElementsByTagName('script')[0];
    g.src = 'https://chat.bagou450.com/packs/js/sdk.js';
    g.defer = true;
    g.async = true;
    s.parentNode?.insertBefore(g, s);
    g.onload = () => {
        window.chatwootSDK.run({
            websiteToken: 'zruKdBbZgYCnzPFz7EmExMyo',
            baseUrl: 'https://chat.bagou450.com',
        });
    };*/
};

export const loadGA4 = async () => {
    const trackingID = 'G-EHDSK41TPK';
    const gtmScript = document.createElement('script');
    gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    gtmScript.async = true;

    document.head.appendChild(gtmScript);

    await new Promise((resolve) => {
        gtmScript.addEventListener('load', resolve);
    });
    
    const { default: ReactGA } = await import('react-ga4');
    ReactGA.initialize(trackingID);
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


            <GlobalStylesheet />
            <Router>
                <LazyLoad once>
                    <Suspense fallback={<Loading />}>
                        <ToastContainer />
                    </Suspense>
                </LazyLoad>


                <div className={dark ? 'min-h-screen bg-bg450-dark' : 'min-h-screen bg-white'}>
                        <Routes>
                            <Route path={'/account/*'} element={<Suspense fallback={<Loading/>}> <AccountRouter/></Suspense>} />
                            <Route path={'/*'} element={<Suspense fallback={<Loading/>}> <MainRouter/> </Suspense>}/>
                            <Route path={'*'} element={<NotFoundPage/>}/>
                        </Routes>
                </div>
                {!cookieConsent && <Suspense fallback={<></>}><CookiesBanner setCookieConsent={setCookieConsent}/></Suspense>}
            </Router>


        </DarkContext.Provider>
    );
}

export default App;
