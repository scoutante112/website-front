import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../../../api/http";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Loading from "../../../Elements/Loading";
import AccountContainer from "../AccountContainer";


export default function AccountLinkOauthCallback() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type')
  const code = urlParams.get('code');
  const { mutate } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=true`,
    fetcher
  );
  const fetchUrl = `https://privateapi.bagou450.com/api/client/web/account/oauthCallback?token=${code}&type=${type}`;
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
          theme: 'dark',
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
          theme: 'dark',
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
        theme: 'dark',
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
