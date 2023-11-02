import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Elements/Loading';
import Footer from './Elements/Footer';
import Home from './Home';
import Discount from './Elements/Discount';
import { useDark } from '../App';
import AddPasskey from './Auth/AddPasskey';

const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Products = lazy(() => import('./Products'));
const NewsContainer = lazy(() => import('./News/NewsContainer'));
const Licenses = lazy(() => import('./Licenses'));
const Contact = lazy(() => import('./Contact'));
const Login = lazy(() => import('./Auth/Login'));
const TokenLogin = lazy(() => import('./Auth/TokenLogin'));
const OauthCallback = lazy(() => import('./Auth/OauthCallback'));
const BlogsContainer = lazy(() => import('./Admin/Blogs/BlogsContainer'));
const UsersContainer = lazy(() => import('./Admin/Users/UsersContainer'));
const ProductsContainer = lazy(() => import('./Admin/Products/ProductsContainer'));
const LicensesContainer = lazy(() => import('./Admin/Licenses/LicensesContainer'));
const Product = lazy(() => import('./Products/Product'));
const NewsCard = lazy(() => import('./News/NewsCard'));
const OrdersCallback = lazy(() => import('./Products/OrdersCallback'));
const TosContainer = lazy(() => import('./TosContainer'));
const PpContainer = lazy(() => import('./PpContainer'));
const LmContainer = lazy(() => import('./LmContainer'));
const RpContainer = lazy(() => import('./RpContainer'));

export const MainNavRoutes = [
    {
        name: 'home',
        link: '/',
        component: <Home />
    },
    {
        name: 'Products',
        link: '/products',
        component: <Products />
    },
    {
        name: 'news',
        link: '/news',
        component: <NewsContainer />
    },
    {
        name: 'licenses',
        link: '/licenses',
        component: <Licenses />
    },
    {
        name: 'contact',
        link: '/contact',
        component: <Contact />
    }
];
export const AuthRoutes = [
    {
        name: 'login',
        link: '/login',
        component: <Login />
    },
    {
        name: 'logintoken',
        link: '/login/token/:token',
        component: <TokenLogin />
    },
    {
        name: 'addpasskey',
        link: '/login/addkey/:token',
        component: <AddPasskey />
    },
    {
        name: 'oauthcallback',
        link: '/login/callback',
        component: <OauthCallback />
    }
];

export const AdminRoutes = [
    {
        name: 'blogs',
        link: '/admin/blogs',
        component: <BlogsContainer />
    },
    {
        name: 'users',
        link: '/admin/users',
        component: <UsersContainer />
    },
    {
        name: 'products',
        link: '/admin/products',
        component: <ProductsContainer />
    },
    {
        name: 'licenses',
        link: '/admin/licenses',
        component: <LicensesContainer />
    },
];

export const OthersRoutes = [
    {
        name: 'products',
        link: '/product/:id',
        component: <Product />
    },
    {
        name: 'new',
        link: '/news/:id',
        component: <NewsCard />
    },
    {
        name: 'order',
        link: '/order/:id',
        component: <OrdersCallback />
    },
    {
        name: 'tos',
        link: '/tos',
        component: <TosContainer />
    },
    {
        name: 'pp',
        link: '/pp',
        component: <PpContainer />
    },
    {
        name: 'lm',
        link: '/lm',
        component: <LmContainer />
    },
    {
        name: 'rp',
        link: '/rp',
        component: <RpContainer />
    }
];

export default function MainRouter() {
    const {dark} = useDark();
    return (
        <>

            <div className={`navbar ${dark ? 'border-b-2 border-bg450-logo' : 'border-b-2 border-white'}`}>
                <Suspense fallback={<Loading />}>
                    <NavBar/>
                </Suspense>

            </div>
            <Suspense fallback={<Loading />}>
                <Discount/>
            </Suspense>



            {/*<div className="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Warning: This website is still in development. Some functionality is still missing and some bugs may occur!</span>
            </div>
          </div>*/}
            <div>
                <Suspense fallback={<Loading />}>
                    <Routes>

                        {MainNavRoutes.map((routes, key) => (
                            <Route key={key} path={routes.link} element={<Suspense fallback={<Loading/>}>{routes.component}</Suspense>} />
                        ))}
                        {AuthRoutes.map((routes, key) => (
                            <Route key={key + 500} path={routes.link} element={<Suspense fallback={<Loading/>}>{routes.component}</Suspense>} />
                        ))}
                        {AdminRoutes.map((routes, key) => (
                            <Route key={key + 1000} path={routes.link} element={<Suspense fallback={<Loading/>}>{routes.component}</Suspense>} />
                        ))}
                        {OthersRoutes.map((routes, key) => (
                            <Route key={key + 1000} path={routes.link} element={<Suspense fallback={<Loading/>}>{routes.component}</Suspense>} />
                        ))}
                       
                        <Route path={'*'} element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </div>
            {window.location.pathname !== '/contact' &&
            <Suspense fallback={<Loading />} >
                <div className={dark ? 'border-t-2 border-bg450-logo' : 'border-t-2 border-white'}>
                    <Footer/>
                    <p className={`${dark ? 'bg-bg450-dark text-gray-300' : 'bg-white'} text-center pb-2  w-full`}>© 2022 - 2023 Bagou450. All Rights Reserved.</p>
                </div>
            </Suspense>
            }


        </>
    );
}