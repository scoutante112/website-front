import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from "swr";
import { useFormik } from 'formik';
import { object, string } from 'yup';
import editAccount from '../../../../../api/auth/editAccount';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import debounce from 'lodash.debounce';
import { fetcher } from '../../../../../api/http';
import Cookies from 'js-cookie';
const form = object({
    email: string().email('This is not a valid email.').required(''),
    password: string().min(8,'Your password needs to have at least 8 characters.').required(''),
    passwordconfirm: string().min(8,'').required('')
  });
export default function AccountContainer() {
    const [loading, setLoading] = useState(false);
    const [confirmpassword, setPasswordError] = useState(false);

    const { data, error, isLoading, mutate } = useSWR(
        `https://privateapi.bagou450.com/api/client/web/auth/isLogged`,
        fetcher
      );
    const navigate = useNavigate();
    useEffect(() => {
      
      if (data && !error && !isLoading) {
        formik.setValues({ email: data.data.email, password: '', passwordconfirm: '' })
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
  
    const formik = useFormik({
        initialValues: { email: '', password: '', passwordconfirm: '' },
        validationSchema: form,
        onSubmit: (values) => {
          

          if(values.passwordconfirm !== values.password) {
            setPasswordError(true);
            return;
          }
          setPasswordError(false);
          setLoading(true)
          editAccount(values.email,values.password).then((data) => {
            if(data.data['status'] === 'error') {
                toast.error(data.data['message'], {
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
                mutate();
              toast.success('Success! Your informations was edited. Please now login again.', {
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
          }).catch((e) => {
            toast.error('An unexcepted error happend. Please contact one of our support team.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setLoading(false)
          })
        
        }
      });
      const navigation = useNavigate();
      if (!data || (error || isLoading)) {
        return <></>;
      }
      if (!data['status']) {
        if(data['message'] === 'Unauthenticated.') {
          navigation('/login');
          window.location.reload()
        }
        mutate();
        return <><p>Loading...</p></>;
      }
      let theme = Cookies.get('theme');
      if(!theme) {
        theme = 'night'
      }
    return (
        <section className='my-4 rounded-lg' data-theme={theme}>
            <h2 className='text-2xl my-4 text-center'>Edit your address information</h2>
            <form onSubmit={formik.handleSubmit} className='grid grid-cols-1 md:grid-cols-2  mx-4'>
                <div>
            <label className="label mx-auto">
            <span className="label-text">Your Email</span>
          </label>
            <input id="email"
              name="email"
              defaultValue={data.data.email}
              type="email"
              disabled={loading}

              placeholder="exemple@exemple.com"
              onChange={formik.handleChange}
              required
              className="input input-bordered w-full  max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.email}</span>
              </label>
              </div>
            <div><label className="label mx-auto">
            <span className="label-text">Old/New Password</span>
          </label>
            <input id="password"
              name="password"
              type="password"
              disabled={loading}

              onChange={formik.handleChange}
              required
              className="input input-bordered w-full max-w-sm" />
 <label className="label">
                <span className='text-red-500'>{formik.errors.password}</span>
              </label>
              </div>
          <div><label className="label mx-auto ">
            <span className="label-text">Confirm old/new Password</span>
          </label>
            <input id="passwordconfirm"
                name="passwordconfirm"
                type="password"
                disabled={loading}
                onChange={formik.handleChange}
                required
                className="input input-bordered w-full max-w-sm " />
                <label className="label"><span className='text-red-500 label-text-al'>{formik.errors.passwordconfirm}{confirmpassword ? 'Your password are not the same!' : ''}</span></label>
                </div>
                <div className='flex justify-end col-span-2 mx-4'>
                        <button type='submit' onClick={() => console.log(confirmpassword)} disabled={loading || formik.errors.email ? true : false || formik.errors.password ? true : false || formik.errors.passwordconfirm ? true : false} className='btn btn-primary btn-outline w-full max-w-sm my-4 self-end '>Submit</button>
                    </div>

            </form>
         

        </section>
    )
}