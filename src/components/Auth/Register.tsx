import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import { useFormik } from 'formik';
import { object, string } from 'yup';
import register from '../../api/auth/register';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loading from "../Elements/Loading";
import { config } from "../../config/config";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const form = object({
  email: string().email('This is not a valid email.').required('You need to enter a email.'),
  username: string().required('You need to enter a username.'),
});

export default function Register({setRegister, setLogin}: {setRegister?: React.Dispatch<React.SetStateAction<boolean>>, setLogin?: React.Dispatch<React.SetStateAction<boolean>>;}) {
  const [loading, setLoading] = useState(false);
  const [showerror, setError] = useState('');
  const [showmessage, setMessage] = useState('');
  const navigate = useNavigate();

  
  const { data, mutate, error, isLoading } = useSWR(
    `${config.privateapilink}/auth/isLogged`,
    fetcher
  );
  const formik = useFormik({
    initialValues: { email: '', username: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      register(values.email,values.username).then((data) => {
        console.log(data.data);
        if(data.data['status'] === 'error') {
          setError(data.data['message']);
          setMessage('');
          setLoading(false)
        } else {
          setError('');

          setMessage('To complete the authentication process, please check your email and follow the instructions provided.');
        }
      }).catch(() => {
        setError('An unexcepted error happend. Please contact one of our support team.');
        setLoading(false)
      })

    }
  });
  if (!data || (error || isLoading)) {
    return <Loading/>;
  }
  if (data['status'] === true) {
    return <Navigate to="/" />
  }
  document.title = 'Bagou450 - Register'

  return (
    <>
      <h1 className={`text-center ${setRegister ? 'text-xl' : 'text-4xl my-4'}`}>Register</h1>
      <h2 className='text-2xl my-4 text-center text-red-500'>{showerror}</h2>
      <h2 className='text-2xl my-4 text-center text-green-500'>{showmessage}</h2>

      <section className='my-4 text-center mx-auto'>
        <form onSubmit={formik.handleSubmit}>
          <label className="label mx-auto text-center w-fit">
            <span className="label-text">Username<br/><span className='text-red-500'>{formik.errors.username}</span></span>
          </label>
            <input id="username"
              name="username"
              type="username"
              placeholder="Bagouox"
              onChange={formik.handleChange}
              required
              className="input input-bordered input-info w-full max-w-xs" />

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

           
        
          <br />
          <button className="btn btn-outline btn-primary mt-4 w-full max-w-[16rem]" type="submit" disabled={loading || formik.errors.email ? true : false || formik.errors.username ? true : false}>
            Submit
          </button>
          <br/>
          <span>You already have a account? {setRegister && setLogin ? <p className={'text-blue-500 hover:underline'} onClick={() => {setRegister(false); setLogin(true)}}>Login now</p> : <Link to='/login' className='text-blue-500'>Login now</Link>}</span>
        </form>
      </section>
      {!setRegister &&
        <section className='min-h-screen'></section>
      }
    </>
  );
}
