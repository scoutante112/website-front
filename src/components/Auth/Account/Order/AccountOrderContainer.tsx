import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../../api/http';
import getDownloadLink from '../../../../api/shop/getDownloadLink';
import { toast } from 'react-toastify';
import { config } from '../../../../config/config';
import Cookies from 'js-cookie';
import getInvoiceDownloadLink from '../../../../api/shop/getInvoiceDownloadLink';
import NavBarAccount from '../NavBarAccount';
import { Account } from '../Manager/AccountContainer';
import Loading from "../../../Elements/Loading";
import deleteLicense from "../../../../api/licenses/deleteLicense";



export default function AccountOrderContainer(account: Account) {
  const [loading, setLoading] = useState(false);
  const { data, mutate, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/orders`,
    fetcher
  );
  const navigation = useNavigate();
  if (!data || (error || isLoading)) {
    return <Loading/>;
  }
  if (!data['status']) {
    if(data['message'] === 'Unauthenticated.') {
      navigation('/login');
      window.location.reload()
    }
    mutate();
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
      theme: "dark",
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
          console.log(`Bagou450-${order}.zip`);
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
          theme: "dark",
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
  });
}
  document.title = 'Bagou450 - My orders'

  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Hello, {!data || (error || isLoading) ? 'User' : data.data['user'][0].toUpperCase() + data.data['user'].slice(1, data.data['user'].length)}</h1>
      <NavBarAccount tab={'orders'}/>
      <section className='mx-8 my-4'>

        <div >
          <p className='text-center text-xl my-6'>Please notice that these licenses are linked to your account. To transfer a license to another account, please <Link to={'/contact'} className='text-blue-500'>contact us</Link>.</p>

          <table className="table w-full max-w-7xl mx-auto border-neutral border-2">
            {/* head */}
            <thead>
              <tr className='w-full'>
                <th className={'hidden xl:block'}>Order_id</th>
                <th>Product</th>
                <th>Price</th>
                <th className={'hidden xl:block'}>Stripe Id</th>
                <th>Status</th>
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

                    <td className={order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : ''}>{order['status'][0].toUpperCase() + order['status'].slice(1, order['status'].length)}</td>
                    <td>
                      <button className='btn btn-primary btn-outline border-0' disabled={loading} onClick={() => downloadInvoice(order['order_id'])}>Download invoice</button>
                      {order['status'] === 'complete' && <button disabled={loading} className='btn btn-secondary btn-outline border-0 mx-4' onClick={() => downloadProduct(order['order_id'])}>Download product{order['products'].length > 1 && 's'}</button>}
                    </td>


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
