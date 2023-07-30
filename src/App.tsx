import "./assets/App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStylesheet from "./assets/css/GlobalStylesheet";
import "react-toastify/dist/ReactToastify.min.css";
import NavBar from "./components/NavBar";
import LazyLoad from "react-lazyload";
import { ToastContainer } from "react-toastify";

const ProductsContainer = lazy(() => import('./components/Admin/Products/ProductsContainer'));
const UsersContainer = lazy(() => import('./components/Admin/Users/UsersContainer'));
const Loading = lazy(() => import('./components/Elements/Loading'));
const Products = lazy(() => import('./components/Products'));
const Licenses = lazy(() => import('./components/Licenses'));
const Login = lazy(() => import('./components/Auth/Login'));
const Product = lazy(() => import('./components/Products/Product'));
const Register = lazy(() => import('./components/Auth/Register'));
const AccountContainer = lazy(() => import('./components/Account/Manager/AccountContainer'));
const AccountLicenseContainer = lazy(() => import('./components/Account/License/AccountLicenseContainer'));
const AccountOrderContainer = lazy(() => import('./components/Account/Order/AccountOrderContainer'));
const OrdersCallback = lazy(() => import('./components/Products/OrdersCallback'));
const TokenLogin = lazy(() => import('./components/Auth/TokenLogin'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const Contact = lazy(() => import('./components/Contact'));
const OauthCallback = lazy(() => import('./components/Auth/OauthCallback'));
const AccountLinkOauthCallback = lazy(() => import('./components/Account/Manager/Forms/AccountLinkOauthCallback'));
const TicketContainer = lazy(() => import('./components/Account/Ticket/TicketContainer'));
const TicketViewContainer = lazy(() => import('./components/Account/Ticket/TicketViewContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const BlogsContainer = lazy(() => import('./components/Admin/Blogs/BlogsContainer'));
const NewsCard = lazy(() => import('./components/News/NewsCard'));
const Footer = lazy(() => import('./components/Elements/Footer'));


export const MainNavRoutes = [

  {
    name: "products",
    link: "/products",
    component: <Products />
  },
  {
    name: "news",
    link: "/news",
    component: <NewsContainer />
  },
  {
    name: "licenses",
    link: "/licenses",
    component: <Licenses />
  },
  {
    name: "contact",
    link: "/contact",
    component: <Contact />
  }
];
export const AuthRoutes = [
  {
    name: "login",
    link: "/login",
    component: <Login />
  },
  {
    name: "register",
    link: "/register",
    component: <Register />
  },

  {
    name: "logintoken",
    link: "/login/token/:token",
    component: <TokenLogin />
  },
  {
    name: "oauthcallback",
    link: "/login/callback",
    component: <OauthCallback />
  },
  {
    name: "account",
    link: "/account/manage",
    component: <AccountContainer />
  },
  {
    name: "account",
    link: "/account/manage/OauthCallback",
    component: <AccountLinkOauthCallback />
  },
  {
    name: "account",
    link: "/account/licenses",
    component: <AccountLicenseContainer />
  },
  {
    name: "account",
    link: "/account/orders",
    component: <AccountOrderContainer />
  },
  {
    name: "tickets",
    link: "/account/tickets",
    component: <TicketContainer />
  },
  {
    name: "tickets",
    link: "/account/ticket/:id",
    component: <TicketViewContainer />
  }
];

export const AdminRoutes = [
  {
    name: "blogs",
    link: "/admin/blogs",
    component: <BlogsContainer />
  },
  {
    name: "users",
    link: "/admin/users",
    component: <UsersContainer />
  },
  {
    name: "products",
    link: "/admin/products",
    component: <ProductsContainer />
  },
]

export const OthersRoutes = [
  {
    name: "products",
    link: "/product/:id",
    component: <Product />
  },
  {
    name: "new",
    link: "/news/:id",
    component: <NewsCard />
  },
  {
    name: "order",
    link: "/order/:id",
    component: <OrdersCallback />
  }
];

function App() {

    return (
      <>
        <GlobalStylesheet />
        <Router>
          <LazyLoad once>
            <Suspense fallback={<Loading />}>
              <ToastContainer />
            </Suspense>
          </LazyLoad>

          <div className="navbar border-b-2 border-neutral">
            <Suspense fallback={<Loading />}>
            <NavBar/>
            </Suspense>

          </div>
          <div className={'mx-16'}>
            <div className="alert alert-warning my-4 min-w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>Warning: This website is still in beta phase, some bugs may occur!</span>
            </div>
          </div>

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
          <div className={'min-h-screen'}>
          <Suspense fallback={<Loading />}>
          <Routes>

            <Route path="/" element={<Products />} />

            {MainNavRoutes.map((routes, key) => (
              <Route key={key} path={routes.link} element={routes.component} />
            ))}
            {AuthRoutes.map((routes, key) => (
              <Route key={key + 500} path={routes.link} element={routes.component} />
            ))}
            {AdminRoutes.map((routes, key) => (
              <Route key={key + 1000} path={routes.link} element={routes.component} />
            ))}
            {OthersRoutes.map((routes, key) => (
              <Route key={key + 1000} path={routes.link} element={routes.component} />
            ))}
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
          </Suspense>
          </div>
          <Suspense fallback={<Loading />}>
          <Footer/>
          </Suspense>
        </Router>



      </>
    );
}

export default App;
