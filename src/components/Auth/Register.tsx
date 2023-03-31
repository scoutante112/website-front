import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import { useFormik } from 'formik';
import { object, string } from 'yup';
import register from '../../api/auth/register';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const form = object({
  email: string().email('This is not a valid email.').required('You need to enter a email.'),
  username: string().required('You need to enter a username.'),
  password: string().required('You need to enter a password.').min(8, 'Your password needs to have a minimum of 8 characters.')
});

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [passwordnotsame, setPassword] = useState(false);
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
      register(values.email,values.password,values.username).then((data) => {
        console.log(data.data);
        if(data.data['status'] === 'error') {
          setError(data.data['message']);
          setMessage('');
        } else {
          document.cookie = `session_token=${data.token}; path=/; expires=${new Date(Date.now() + 2 * 60 * 60 * 1000).toUTCString()}`;
          mutate();
          toast.success('Success! Your are now logged. Please don\'t forget to check your mailbox.', {
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
      <h1 className='text-4xl my-4 text-center'>Register</h1>
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
            <label className="label mx-auto text-center w-fit">
            <span className="label-text">Password<br/><span className='text-red-500'>{formik.errors.password}</span></span>
          </label>
            <input id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              required
              className="input input-bordered input-info w-full max-w-xs" />
          <label className="label mx-auto text-center w-fit w-full">
            <span className="label-text">Confirm Password<br/><span className='text-red-500'>{passwordnotsame && 'Your password are not the same!'}</span></span>
          </label>
            <input id="passwordconfirm"
                name="passwordconfirm"
                type="password"
                onChange={(e) => {
                  if (formik.values.password === e.target.value) { setPassword(false) } else { setPassword(true) }
                }}
                required
                className="input input-bordered input-info w-full max-w-xs" />
         
           
        
          <br />
          <button className="btn btn-outline btn-accent mt-4 w-full max-w-[16rem]" type="submit" disabled={loading || passwordnotsame || formik.errors.email ? true : false || formik.errors.password ? true : false || formik.errors.username ? true : false}>
            Submit
          </button>
          <br/>
          <span>You already have a account? <Link to='/login' className='text-blue-500'>Login now</Link></span>
        </form>
      </section>
    </>
  );
}
