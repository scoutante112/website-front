import React, { useState } from 'react';
import useSWR from "swr";
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';
import getDownloadLink from '../../../api/shop/getDownloadLink';
import { toast } from 'react-toastify';
import { config } from '../../../config/config';
import Cookies from 'js-cookie';
import getInvoiceDownloadLink from '../../../api/shop/getInvoiceDownloadLink';
import NavBarAccount from '../NavBarAccount';
import Loading from "../../Elements/Loading";



export default function AccountOrderContainer() {
  const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useSWR(
    `${config.privateapilink}/orders`,
    fetcher
  );
  if (!data || (error || isLoading)) {
    return <Loading/>;
  }
  const downloadProduct = (order: string) => {
    setLoading(true);
    toast.info('Please wait during the generation of the file...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
    });
    getDownloadLink(order).then((data) => {
      fetch(`${config.privateapilink}${data.data.data}`, {headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access_token')}`
      }}).then(response => response.blob()).then(blob => {

          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `Bagou450-${order}.zip`);
          document.body.appendChild(link);
          link.addEventListener('load', () => {
              URL.revokeObjectURL(url);
          });
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
            theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
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
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });

    })
    setLoading(false);
  
  }
  const downloadInvoice = (orderid: string) => {
    setLoading(true);

    getInvoiceDownloadLink(orderid).then((data) => {
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
        link.setAttribute('download', `${orderid} - Bagou450.pdf`);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        toast.success('Your invoice is now downloaded!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
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
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
  
      })
      setLoading(false);
  });
}
  document.title = 'Bagou450 - My orders'

  return (
    <>
      <NavBarAccount tab={'orders'}/>
      <section className='mx-2 md:mx-8 my-4'>

        <div >
          {data.data.orders.length > 0 ? <>
          <table className="table w-full max-w-7xl mx-auto border-neutral-content dark:border-neutral border-2">
            {/* head */}
            <thead>
              <tr className='w-full'>
                <th className={'hidden xl:block'}>Id</th>
                <th>Product</th>
                <th className={'hidden xl:block'}>Status</th>
                <th>Price</th>
                <th className={'hidden xl:block'}>Transaction Id</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.data.orders.map((order: any, key: React.Key | null | undefined) => {
                return (
                  <tr className="w-full" key={key}>
                    <th className={'hidden xl:table-cell'}>{order['order_id']}</th>
                    <th>
                      {order['products'].map((item: any, key: number) => (
                        <React.Fragment key={key}>
                          {key < 3 && <p>{item['name']}</p>}
                          {key === 3 &&
                            <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className={'text-neutral-content '} style={{ color: "hsl(var(--bc) / 0.6)" }}>More</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {order['products'].map((item: any, key: number) => (
                              <li key={key}>{item['name']}</li>
                              ))}
                          </ul>

                            </div>
                          }
                        </React.Fragment>
                      ))}
                    </th>

                    <th>{order['price']}€</th>
                    <td className={'hidden xl:table-cell'}>{order['stripe_id']}</td>

                    <td className={`hidden xl:table-cell ${order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : ''}`}>{order['status'][0].toUpperCase() + order['status'].slice(1, order['status'].length)}</td>
                    <td>
                      <button className='btn btn-primary btn-outline border-0' disabled={loading} onClick={() => downloadInvoice(order['order_id'])}>Download invoice</button>
                      {order['status'] === 'complete' && <button disabled={loading} className='btn btn-secondary btn-outline border-0 my-4 lg:mx-4 lg:my-0 xl:my-4 xl:mx-0' onClick={() => downloadProduct(order['order_id'])}>Download product{order['products'].length > 1 && 's'}</button>}
                    </td>


                  </tr>
                )

              })}


            </tbody>
          </table>
        </> : <p className={'text-center opacity-80'}>No orders found for this account.</p>
        }
        </div>
      </section>
      <section className='min-h-screen'></section>
    </>
  );
}
