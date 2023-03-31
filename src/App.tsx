import './assets/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalStylesheet from './assets/css/GlobalStylesheet';
import Products from './components/Products';
import Licenses from './components/Licenses';
import Login from './components/Auth/Login';
import Product from './components/Products/Product';
import Register from './components/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AccountContainer from './components/Auth/Account//Manager/AccountContainer';
import NavBar from './components/NavBar';
import AccountLicenseContainer from './components/Auth/Account/License/AccountLicenseContainer';
import AccountOrderContainer from './components/Auth/Account/Order/AccountOrderContainer';
import Purchase from './components/Products/Purchase';
import Cookies from 'js-cookie';




const MainNavRoutes = [
 /* {
    name: 'home',
    link: '/home',
    component: <Home />
  },
  {
    name: 'projects',
    link: '/projects',
    component: <Projects />
  },*/
  {
    name: 'products',
    link: '/products',
    component: <Products />
  },

 /* {
    name: 'services',
    link: '/services',
    component: <Services />
  },*/
  {
    name: 'licenses',
    link: '/licenses',
    component: <Licenses />
  },
 
];
const AuthRoutes = [
  {
    name: 'login',
    link: '/login',
    component: <Login />
  },
  {
    name: 'register',
    link: '/register',
    component: <Register />
  },
  {
    name: 'account',
    link: '/account/manage',
    component: <AccountContainer />
  },
  {
    name: 'account',
    link: '/account/licenses',
    component: <AccountLicenseContainer />
  },
  {
    name: 'account',
    link: '/account/orders',
    component: <AccountOrderContainer />
  }
]

const OthersRoutes = [
  {
    name: 'products',
    link: '/product/:id',
    component: <Product />
  },
  {
    name: 'purchase',
    link: '/product/purchase/:id',
    component: <Purchase />
  },
]
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const App = () => {
 /*  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };*/
  let theme = Cookies.get('theme');
  if(!theme) {
    theme = 'night'
  }
  return (
    <>
      <GlobalStylesheet />
      <Router>
        <ToastContainer/>
      <div className="navbar bg-base-100" data-theme={theme}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {MainNavRoutes.map((routes, key) => (
                    <li key={key}><Link to={routes.link}>{routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}</Link></li>
                  ))}
              </ul>
            </div>
            <Link to={'/'} className="btn btn-ghost normal-case text-xl transition  delay-150 text-white hover:text-blue-700 hover:bg-transparent duration-300"> 
            <img
                  src="https://cdn.bagou450.com/assets/img/logo_full_colored.png"
                  className={`h-8 hidden md:block`}
                  alt='Logo'
                />
            </Link>
            <ul className="menu menu-horizontal px-1">
                {MainNavRoutes.map((routes, key) => (
                  <li key={key}><Link to={routes.link}>{routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}</Link></li>
                ))}
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
              <NavBar/>
          </div>
         {
         // <div className="navbar-end">
           // <div className="avatar">
            //  <div className="w-24 rounded-full">
                //</div><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              //</div>
            //</Router></div>
          //</></div>
        }
                  </div>


          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Products />} />
           
            {MainNavRoutes.map((routes, key) => (
              <Route key={key} path={routes.link} element={routes.component} />
            ))}
          {AuthRoutes.map((routes, key) => (
              <Route key={key+500} path={routes.link} element={routes.component} />
            ))}
                {OthersRoutes.map((routes, key) => (
              <Route key={key+1000} path={routes.link} element={routes.component} />
            ))}
            
          </Routes>

      </Router>
      <footer className="footer p-10 bg-base-100 text-base-content border-t-2 border-neutral mt-4" data-theme={theme}>
    <div className='flex '>
        <img
            src="https://cdn.bagou450.com/website/assets/logo/bagou-white-nobg.png"
            className={`h-16 hidden md:block`}
            alt='Logo'
        />
        <p>Bagou450.<br/>Provide Sysadmin service since 2016. <br/> Provide Pterodactyl addons since 2020.</p>
    </div> 
    <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Pterodactyl installation</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Whmcs installation + setup</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Virtualizor installation + setup</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Custom Pterodactyl addons</a>
    </div> 
    <div>
        <span className="footer-title">Shop</span> 
        <a className="link link-hover" href="https://shop.bagou450.com/collections">Pterodactyl addons</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/products/minecraft-premium-versions-changer">Minecraft versions changer</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/products/pterodactyl-addon-artifacts-changer">Artifacts changer</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/products/pterodactyl-addon-cloud-servers">Cloud servers</a>
    </div> 
    <div>
        <span className="footer-title">About</span> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Contact</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/terms-of-service">Terms of Service</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/privacy-policy">Privacy Policy</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/refund-policy">Refund Policy</a>
    </div>
    </footer>
    </>
  );
};

export default App;
