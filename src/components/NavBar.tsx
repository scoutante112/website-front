import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import logout from '../api/auth/logout';
import useSWR from "swr";
import md5 from 'blueimp-md5';
import { fetcher } from '../api/http';
import Cookies from 'js-cookie';

export default function NavBar() {
  const navigate = useNavigate();
  const { data, mutate, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/auth/isLogged`,
    fetcher
  );
  if (!data || (error || isLoading)) {
    return <></>;
  }
  const themeslist = ["default", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

  return (
    <>
      <ToastContainer />

      <ul className="menu menu-horizontal px-1">
        {data['status'] ?
          <>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn"> <img src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=404`} alt='test'
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data.name}`;
                }}
                className={'rounded-full h-16 w-16 '} /></label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72">
                <li><Link to={'/account/manage'}><p>My account</p></Link></li>
                <li onClick={() => logout().then(() => {
                  toast.success('You are now logged out.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                  navigate('/');
                  mutate();
                })}><p className='text-red-800'>Logout</p></li>
              </ul>
            </div>
          </>


          :
          <><li><Link to={'/login'}>Login</Link></li><li><Link to={'/register'}>Register</Link></li></>

        }
        <li>
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <label tabIndex={1} className="btn m-1">Theme</label>
            <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              {themeslist.map((theme, key) => {
                return <li key={key} onClick={() => Cookies.set('theme', theme === 'default' ? 'night' : theme)}>{theme[0].toUpperCase() + theme.slice(1, theme.length).toUpperCase()}</li>
              })}
            </ul>
          </div>

        </li>
      </ul>


    </>
  );
}
