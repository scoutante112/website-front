import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import deleteLicense from '../../../../api/licenses/deleteLicense';
import { fetcher } from '../../../../api/http';
import Cookies from 'js-cookie';



export default function AccountLicenseContainer() {


    const [ipData, setIpData] = React.useState(null);

  const { data, mutate, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/license`,
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
  let theme = Cookies.get('theme');
  if(!theme) {
    theme = 'night'
  }
  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Hello, {!data || (error || isLoading) ? 'User' : data.data['user'][0].toUpperCase() + data.data['user'].slice(1,data.data['user'].length)}</h1>
      <section className='mx-auto text-center'>
        <ul className="menu menu-horizontal bg-base-100 rounded-box" data-theme={theme}>
          <li>
            <Link to={'/account/manage'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Manage Account
            </Link>
          </li>
          <li>
            <p className='bg-base-300 disabled' data-theme={theme} >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Licenses
            </p>
          </li>
          <li>
            <Link to={'/account/orders'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Orders
            </Link>
          </li>
        </ul>
      </section>
      <section className='mx-8 my-4'>
        
      <div >
      <p className='text-center text-xl my-6'>Please notice that these licenses are linked to your account. To transfer a license to another account, please <Link to={'/contact'}  className='text-blue-500'>contact us</Link>.</p>

  <table className="table w-full" data-theme={theme}>
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Buyer</th>
        <th>Name</th>
        <th>Ip</th>
        <th>Usage</th>
        <th>License</th>
        <th>Version</th>
      </tr>
    </thead>
    <tbody>
      {data.data['license'].map((license: any, key: React.Key | null | undefined) => {
        return (
        <tr className="hover" key={key}>
        <th>{key}</th>
        <th>{license['buyer']}</th>
        <td>{license['fullname']}</td>
        <td>{license['ip'] ? (
            license['ip'].length === 0 ? (
                <p>No ip for this license.</p>

            )
            : (
        license['ip'].map((ip: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined, key: number) => {

             const handleMouseEnter = async () => {
               const response = await fetch(`https://ipapi.co/${ip}/json/`);
               const data = await response.json();
               setIpData(data);
             };
            return (
                <div className="dropdown dropdown-right dropdown-hover" key={key+50}>
                    <label tabIndex={0} className="btn m-1" onMouseEnter={handleMouseEnter}>{ip}</label>
                    <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                        {ipData ? (
                                <>
                                <li className='flex'><strong>Country:</strong>{ipData['country_name']} <img alt='Flag' src={`https://flagcdn.com/w20/${ipData['country_code'].toLowerCase()}.png`}/></li>
                                <li><strong>City: </strong>{ipData['city']}</li>
                                <li><strong>Region: </strong>{ipData['region']}</li>
                                <li><strong>Asn: </strong>{ipData['asn']}</li>
                                <li><strong>Org: </strong>{ipData['org']}</li>
                                <li><button className="btn btn-outline btn-error" data-theme={theme} onClick={() => {deleteLicense(license['transaction'], ip).then(() => { mutate();  toast.success(`${ip} was removed successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }); }).catch((e) => {
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
        }); }}>Delete</button></li>

                                </>
                        )
                        : (
                        <p>Loading...</p>
        )}
                       
                    </ul>
                </div>
            )
        })
        )) : 
      (
        <p>No ip for this license.</p>
      )}
        </td>
        <td>{license['usage']}/{license['maxusage']}</td>
        <td><strong>{license['transaction']}</strong></td>
        <td>{license['version']}</td>

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
