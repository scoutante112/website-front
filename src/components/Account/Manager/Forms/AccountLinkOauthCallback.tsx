import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../../api/http";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Loading from "../../../Elements/Loading";
import AccountContainer from "../AccountContainer";
import { config } from "../../../../config/config";


export default function AccountLinkOauthCallback() {
  const [loading, setLoading] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type')
  const code = urlParams.get('code');
  const { mutate } = useSWR(
    `${config.privateapilink}/auth/isLogged?infos=true`,
    fetcher
  );
  const fetchUrl = `${config.privateapilink}/account/oauthCallback?token=${code}&type=${type}`;
  const fetchData = async () => {
    try {
      const response = await fetch(fetchUrl, {headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('access_token')}`
        }});
      const data = await response.json();
      setLoading(false);
      if (data.status === 'success') {
        toast.success(`You have linked your ${type} account successfully!`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
        mutate();
      } else {
        const message = data.message ? data.message : 'An unexpected error happened.';
        toast.error(`Error: ${message}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
        mutate();
      }
    } catch (error) {
      setLoading(false);
      toast.error('An unexpected error occurred.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });
      mutate();
    }
  };
  fetchData();
  if (loading) {
    return <Loading />;
  }

  return (
    <div className={'flex flex-col items-center justify-center h-full'}>
      <AccountContainer/>
    </div>
  )
}
