import React, { useState } from 'react';
import login from '../../api/auth/login'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const form = object({
  email: string().email('This is not a valid email.').required('You need to enter a email.'),
  password: string().required('You need to enter a password.')
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showerror, setError] = useState('');
  const [showmessage, setMessage] = useState('');
  const navigate = useNavigate();

  
  const { data, mutate, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/auth/isLogged`,
    fetcher
  );
  const formik = useFormik({
    initialValues: { email: '', username: '', password: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      login(values.email,values.password).then((data) => {
        console.log(data.data);
        if(data.data['status'] === 'error') {
          setError(data.data['message']);
          setMessage('');
        } else {
          console.log(data.data['data']['access_token']);
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
          setError('');
          mutate();
          navigate('/');
          window.location.reload();
        }
        setLoading(false)
      }).catch((e) => {
        setError('An unexcepted error happend. Please contact one of our support team.');
        setLoading(false)
      })

    }
  });
  if (!data || (error || isLoading)) {
    return <></>;
  }
  if (data['status'] === true) {
    return <Navigate to="/" />
  }
  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Login</h1>
      <h2 className='text-2xl my-4 text-center text-red-500'>{showerror}</h2>
      <h2 className='text-2xl my-4 text-center text-green-500'>{showmessage}</h2>

      <section className='my-4 text-center mx-auto'>
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
            <label className="label mx-auto text-center w-fit">
            <span className="label-text">Password<br/><span className='text-red-500'>{formik.errors.password}</span></span>
          </label>
            <input id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              required
              className="input input-bordered input-info w-full max-w-xs" />
         <br/>
          <button className="btn btn-outline btn-accent mt-4 w-full max-w-[16rem]" type="submit" disabled={loading || formik.errors.email ? true : false || formik.errors.password ? true : false}>
            Submit
          </button><br/>
          <span>You don't have a account? <Link to='/register' className='text-blue-500'>Register now</Link></span>
        </form>
      </section>
    </>
  );
}
