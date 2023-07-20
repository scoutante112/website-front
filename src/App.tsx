import "./assets/App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStylesheet from "./assets/css/GlobalStylesheet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Crisp } from "crisp-sdk-web";
import NavBar from "./components/NavBar";
import LazyLoad from "react-lazyload";

const Loading = lazy(() => import('./components/Elements/Loading'));
const Products = lazy(() => import('./components/Products'));
const Licenses = lazy(() => import('./components/Licenses'));
const Login = lazy(() => import('./components/Auth/Login'));
const Product = lazy(() => import('./components/Products/Product'));
const Register = lazy(() => import('./components/Auth/Register'));
const AccountContainer = lazy(() => import('./components/Account/Manager/AccountContainer'));
const AccountLicenseContainer = lazy(() => import('./components/Account/License/AccountLicenseContainer'));
const AccountOrderContainer = lazy(() => import('./components/Account/Order/AccountOrderContainer'));
const Purchase = lazy(() => import('./components/Products/Purchase'));
const TokenLogin = lazy(() => import('./components/Auth/TokenLogin'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const Contact = lazy(() => import('./components/Contact'));
const OauthCallback = lazy(() => import('./components/Auth/OauthCallback'));
const AccountLinkOauthCallback = lazy(() => import('./components/Account/Manager/Forms/AccountLinkOauthCallback'));
const TicketContainer = lazy(() => import('./components/Account/Ticket/TicketContainer'));
const TicketViewContainer = lazy(() => import('./components/Account/Ticket/TicketViewContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const BlogsContainer = lazy(() => import('./components/Account/Admin/Blogs/BlogsContainer'));
const NewsCard = lazy(() => import('./components/News/NewsCard'));


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
    name: "purchase",
    link: "/product/purchase/:id",
    component: <Purchase />
  }
];

function App() {

  useEffect(() => {
    Crisp.configure("f82a715b-c38a-4a43-9559-426a2bf504d9");
  }, []);


    return (
      <>
        <GlobalStylesheet />
        <Router>
          <LazyLoad once> <ToastContainer /></LazyLoad>

          <div className="navbar border-b-2 border-neutral">
            <Suspense fallback={<Loading />}>
            <NavBar/>
            </Suspense>
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

          <footer className="footer p-10 border-t-2 border-neutral mt-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.bagou450.com/website/assets/logo/bagou-white-nobg.webp"
                className="h-16 w-16 hidden md:block"
                alt="Logo" />
              <p className="text-lg font-semibold">
                Bagou450.<br />Provide Sysadmin service since 2016. <br />Provide Pterodactyl addons since 2020.
              </p>
            </div>
            <div className="space-y-4">
              <span className="footer-title font-semibold">About</span>
              <div><Link to={"/contact"} className="link link-hover"><p>Contact</p></Link>

              <Link to={"/tos"} className="link link-hover"> <p>Terms of Service</p></Link>
                <Link to={"/ppo"} className="link link-hover"> <p>  Privacy Policy</p></Link>
              <Link to={"/rp"} className=" link link-hover">  <p>  Refund Policy</p></Link>
            <Link to={"/lm"} className="link link-hover">   <p>   Legal Mention</p></Link>
              </div>
            </div>

          </footer>
        </Router>



      </>
    );
}

export default App;
