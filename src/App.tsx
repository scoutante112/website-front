import './assets/App.css';
import React, { createContext, lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStylesheet from './assets/css/GlobalStylesheet';
import 'react-toastify/dist/ReactToastify.min.css';
import LazyLoad from 'react-lazyload';
import { ToastContainer } from 'react-toastify';
import MainRouter from './components/MainRouter';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';


const Loading = lazy(() => import('./components/Elements/Loading'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const AccountRouter = lazy(() => import('./components/Account/AccountRouter'));



const DarkContext = createContext({
    dark: true,
    setDark: (value: boolean) => {},
});
export function useDark() {
    return useContext(DarkContext);
}


function App() {
    const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    useEffect(() => {
        const cookie = Cookies.get('dark');
        if(cookie) {
            setDark(cookie === 'true');
        }
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


                <div className={'min-h-screen'}>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path={'/account/*'} element={<Suspense fallback={<Loading />}>
                                <AccountRouter />
                            </Suspense>}/>
                            <Route path={'/*'} element={<Suspense fallback={<Loading />}>
                                <MainRouter />
                            </Suspense>}/>
                            <Route path={'*'} element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </div>
                <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

            </Router>



        </DarkContext.Provider>
    );
}

export default App;
