import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useSWR from "swr";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import deleteLicense from '../../../api/licenses/deleteLicense';
import { fetcher } from '../../../api/http';
import NavBarAccount from '../NavBarAccount';
import Loading from "../../Elements/Loading";

export default function AccountLicenseContainer() {

    const [ipData, setIpData] = useState<any>(null);

  const { data, mutate, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/license`,
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
  document.title = 'Bagou450 - My license'
  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Hello, {!data || (error || isLoading) ? 'User' : data.data['user'][0].toUpperCase() + data.data['user'].slice(1,data.data['user'].length)}</h1>
      <NavBarAccount tab={'licenses'}/>
      <section className='mx-8 my-4'>
        
      <div >
      <p className='text-center text-xl my-6'>Please notice that these licenses are linked to your account. To transfer a license to another account, please <Link to={'/contact'}  className='text-blue-500'>contact us</Link>.</p>

  <table className="table w-full border-2 border-solid border-neutral">
    {/* head */}
    <thead>
      <tr>
        <th ></th>
        <th className={'hidden xl:block'}>Buyer</th>
        <th>Name</th>
        <th className={'hidden xl:block'}>Ip</th>
        <th>Usage</th>
        <th>License</th>
        <th className={'hidden 2xl:block'}>Version</th>
      </tr>
    </thead>
    <tbody>
      {data.data['license'].map((license: any, key: React.Key | null | undefined) => {
        return (
        <tr key={key}>
        <th>{key}</th>
        <th className={'hidden xl:block'}>{license['buyer']}</th>
        <td>{license['name']}</td>
        <td className={'hidden xl:block'}>{license['ip'] ? (
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
                    <label tabIndex={0} className="btn m-1 btn-neutral z-1" onMouseEnter={handleMouseEnter}>{ip}</label>
                    <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {ipData ? (
                                <>
                                <li className='flex'><strong>Country: </strong>{ipData['country_name']} <img alt='Flag' src={`https://flagcdn.com/w20/${ipData['country_code']}.webp`} className={'mx-2'}/></li>
                                <li><strong>City: </strong>{ipData['city']}</li>
                                <li><strong>Region: </strong>{ipData['region']}</li>
                                <li><strong>Asn: </strong>{ipData['asn']}</li>
                                <li><strong>Org: </strong>{ipData['org']}</li>
                                <li><button className="btn btn-outline btn-error border-0 mt-3" onClick={() => {deleteLicense(license['transaction'], ip).then(() => { mutate();  toast.success(`${ip} was removed successfully.`, {
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
        <td className={'hidden 2xl:block'}>{license['version']}</td>

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
