import React, { useState } from 'react';
import login from '../../api/auth/login'
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import loginOauth from "../../api/auth/loginOauth";
import Loading from "../Elements/Loading";
import GoogleButton from 'react-google-button'
import { config } from "../../config/config";


export default function Login({ loginError }: { loginError?: string }) {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${config.privateapilink}/auth/isLogged`,
    fetcher
  );
  if (!data || (error || isLoading)) {
    return <Loading/>;
  }
  if (data['status'] === true) {
    return <Navigate to="/" />
  }
  document.title = 'Bagou450 - Sign In'
  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Sign In</h1>
      {loginError &&
        <div className="alert alert-error mx-auto w-2/4 my-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{loginError}</span>
        </div>
      }
      <section className='my-4 text-center mx-auto'>
        <LoginForm/>
      </section>
      <section className='my-4 text-center mx-auto'>
          <div className="divider w-1/5 mx-auto">OR</div>
        <DiscordButton/>
        <GoogleButtonClick/>
        <GitHubButtonClick/>
      </section>

    </>
  );
}




function LoginForm() {
  const form = object({
    email: string().email('This is not a valid email.').required('You need to enter a email.'),
  });
  const [loading, setLoading] = useState<number>(0);
  const [showerror, setError] = useState('');
  const [showmessage, setMessage] = useState('');

  const formik = useFormik({
    initialValues: { email: '', username: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(1)
      login(values.email).then((data) => {
        if(data.data['status'] === 'error') {
          setError(data.data['message']);
          setMessage('');
          setLoading(3);
        } else {
          setError('');
          setLoading(2)
          setMessage('To complete the authentication process, please check your email and follow the instructions provided.');
        }
      }).catch((data) => {
        setError('No account found with this email.');
        setLoading(3)
      })

    }
  });

  return (
    <div>
      {showerror &&
        <div className="alert alert-error mx-auto w-2/4 my-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{showerror}</span>
        </div>
      }
      {showmessage &&
          <div className="alert alert-success mx-auto w-2/4 my-4">
            <svg  xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{showmessage}</span>
          </div>


      }

    <form onSubmit={formik.handleSubmit}>

      <label className="label mx-auto text-center w-fit">
        <span className="label-text">Your Email<br/><span className='text-red-500'>{formik.errors.email}</span></span>
      </label>
      <input id="email"
             name="email"
             type="email"
             placeholder="exemple@exemple.com"
             onChange={formik.handleChange}
             required
             className="input input-bordered input-info w-full  max-w-xs" />

      <br/>
      <button className={`btn btn-outline mt-4 w-full max-w-[16rem] mb-4 ${loading === 0 || loading === 1 ? 'btn-primary  border-0' : loading === 2 ? 'btn-success' : 'btn-error '}`} type="submit" disabled={loading !== 0 || formik.errors.email ? true : false}>
        {loading === 0 ? 'Sign in' : loading === 1 ? <span className="loading loading-spinner loading-sm text-secondary"></span> : loading === 2 ? 'Success' : 'Error'}
      </button><br/>
      <span>You don't have a account? <Link to='/register' className='text-blue-500'>Register now</Link></span>
    </form>
    </div>
  )
}



function DiscordButton() {
  const [loading, setLoading] = useState(false);
  const discordLogin = (() => {
    setLoading(true);
    loginOauth('discord').then((data) => {
      window.location.href = data.data.data.url

    })
  })
  return (
    <div className={'mx-auto'}>
      <button className={`btn btn-neutral flex mx-auto`} disabled={loading} onClick={() => discordLogin()}><FaDiscord size={'35px'}/> <p className={'my-auto mx-2 text-ml'}>{loading ? <span className="loading loading-spinner loading-sm"/>  : 'Sign in with Discord'}</p></button>

    </div>
  )
}

function GoogleButtonClick() {
  const [loading, setLoading] = useState(false);
  const googleLogin = (() => {
    setLoading(true);
    loginOauth('google').then((data) => {
      window.location.href = data.data.data.url

    })
  })
  return (
    <div className={'mx-auto mt-4'}>
      <GoogleButton className={'mx-auto'} type="dark" disabled={loading} onClick={() => googleLogin()}/>

    </div>
  )
}


function GitHubButtonClick() {
  const [loading, setLoading] = useState(false);
  const githubLogin = (() => {
    setLoading(true);
    loginOauth('github').then((data) => {
      window.location.href = data.data.data.url

    })
  })
  return (
    <div className={'mx-auto mt-4'}>
      <button className={`btn flex mx-auto`} disabled={loading} onClick={() => githubLogin()}><FaGithub size={'35px'}/> <p className={'my-auto mx-2 text-ml'}>{loading ? <span className="loading loading-spinner loading-sm"/>  : 'Sign in with GitHub'}</p></button>

    </div>
  )
}