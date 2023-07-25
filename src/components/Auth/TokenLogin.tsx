import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../api/http";
import tokenLogin from "../../api/auth/tokenLogin";
import { toast } from "react-toastify";
import md5 from "blueimp-md5";
import Loading from "../Elements/Loading";
import { config } from "../../config/config";

const TokenLogin = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {data, error, isLoading} = useSWR(`${config.privateapilink}/auth/tokendata?token=${token}`, fetcher);
  if(!data || (error || isLoading)) {
    return (
      <Loading/>
    )
  }
  if(data.data['status'] === 'error' || !token) {
    return (
      <p className='text-center'>Invalid token.</p>
    )
  }
  const sendLogin = () => {
    tokenLogin(token).then((data) => {
      if(data.data['status'] === 'error') {
        toast.error('Error. Can\'t get your account data with this token.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        document.cookie = `access_token=${data.data['data']['access_token']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
        toast.success('Success! Your are now logged.', {
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
        window.location.reload();
      }
      setLoading(false)
    })
  }
  return (
   <div className={'flex flex-col items-center justify-center h-full'}>
     <img src={`https://www.gravatar.com/avatar/${md5(data.data['email'])}?d=404`} alt='test'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data['name']}`;
          } }
          className={'rounded-md h-64 w-64 my-4'} />
     <p className={'text-4xl'}>Login as {data.data['name']}</p>
     <button className={'btn btn-primary mt-4 btn-lg'} disabled={loading} onClick={() => sendLogin()}>Login</button>
   </div>
  )
}

export default TokenLogin