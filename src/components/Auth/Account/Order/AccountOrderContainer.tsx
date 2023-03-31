import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../../api/http';
import getDownloadLink from '../../../../api/shop/getDownloadLink';
import { toast } from 'react-toastify';
import { config } from '../../../../config/config';
import Cookies from 'js-cookie';



export default function AccountOrderContainer() {
  const [loading, setLoading] = useState(false);
  const { data, mutate, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/orders`,
    fetcher
  );
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
  const downloadProduct = (order: string, name: string) => {
    setLoading(true);
    toast.info('Please wait during the generation of the file...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    getDownloadLink(order).then((data) => {
      fetch(`${config.privateapilink}${data.data.data}`, {headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access_token')}`
      }}).then(response => response.blob()).then(blob => {
          // Téléchargement du fichier blob
          
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${name}.zip`);
          document.body.appendChild(link);
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          toast.success('Your file is now downloaded!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      })     
      
    }).catch(() => {
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

    })
    setLoading(false);

  }
  let theme = Cookies.get('theme');
  if(!theme) {
    theme = 'night'
  }
  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Hello, {!data || (error || isLoading) ? 'User' : data.data['user'][0].toUpperCase() + data.data['user'].slice(1, data.data['user'].length)}</h1>
      <section className='mx-auto text-center'>
        <ul className="menu menu-horizontal bg-base-100 rounded-box" data-theme={theme}>
          <li>
            <Link to={'/account/manage'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Manage Account
            </Link>
          </li>
          <li>
            <Link to={'/account/licenses'} >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Licenses
            </Link>
          </li>
          <li>
            <p className='bg-base-300 disabled' data-theme={theme} >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Orders
            </p>
          </li>
        </ul>
      </section>
      <section className='mx-8 my-4'>

        <div >
          <p className='text-center text-xl my-6'>Please notice that these licenses are linked to your account. To transfer a license to another account, please <Link to={'/contact'} className='text-blue-500'>contact us</Link>.</p>

          <table className="table w-full max-w-7xl mx-auto" data-theme={theme}>
            {/* head */}
            <thead>
              <tr className='w-full'>
                <th>Order_id</th>
                <th>Product</th>
                <th>Price</th>
                <th>Version</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.data.orders.map((order: any, key: React.Key | null | undefined) => {
                return (
                  <tr className="hover w-full" key={key}>
                    <th>{order['order_id']}</th>
                    <th>{order['product']}</th>
                    <th>{order['price']}€</th>
                    <td>{order['version']}</td>
                    <td className={order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : ''}>{order['status'][0].toUpperCase() + order['status'].slice(1, order['status'].length)}</td>
                    <td><button className='btn btn-primary btn-outline' data-theme={theme} disabled={loading}>More informations</button> {order['status'] === 'complete' && <button disabled={loading} className='btn mx-4' data-theme={theme} onClick={() => downloadProduct(order['order_id'], order['product'])}>Download</button>}</td>


                  </tr>
                )

              })}


            </tbody>
          </table>
        </div>
      </section>
      <section className='min-h-screen'></section>
    </>
  );
}
