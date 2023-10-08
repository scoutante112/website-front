import React, { useState } from "react";
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import Loading from "../../Elements/Loading";
import NavBarAccount from "../../Account/NavBarAccount";
import { toast } from "react-toastify";
import { debounce } from "debounce";
import Pagination from "../../Elements/Pagination";
import 'react-quill/dist/quill.snow.css';
import resetLicense from "../../../api/admin/licenses/resetLicense";
import blacklistLicense from "../../../api/admin/licenses/blacklistLicense";


export interface License {
  blacklisted: boolean;
  product_name: string;
  ip: string[];
  maxusage: number;
  license: string;
  usage: number;
  version: string;
  user_id: number;
  order_id: number;
}
interface LicenseResponse {
  data: License[];
  total: number;
}

export default function LicensesContainer() {
  const [page, setPage] = useState<number>(1);
  const [perpage] = useState<number>(20);
  const [search, setSearch] = useState<string>('');
  const {data, error, isLoading, mutate} = useSWR<LicenseResponse>(`${config.privateapilink}/admin/licenses?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
  if(!data || (error || isLoading)) {
    return <Loading/>
  }
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
  }, 500)
  return (
    <>
      <NavBarAccount tab={'licensesadmin'}/>
      <h1 className="text-center text-4xl my-2">Products</h1>
      <div className="w-full max-w-7xl mx-auto mb-2 md:flex md:gap-x-2">
        <input type="text" id={'search'} defaultValue={search} placeholder="Search here" className={`input input-bordered input-md w-full `} onChange={(e) => searchValue(e.target.value)}/>
      </div>
      <table className="table w-full max-w-7xl mx-auto border-neutral border-2">
        {/* head */}
        <thead>
        <tr>
          <th>User</th>
          <th>Product</th>
          <th>Blacklisted</th>
          <th>Ip</th>
          <th>Usage</th>
          <th>License</th>
          <th>Version</th>
          <th>Order</th>
          <th></th>

        </tr>
        </thead>
        <tbody>
        {data.data.map((license: License, index: number) => {
          return (
            <LicenseRow license={license} index={index} mutate={mutate}/>
          )
        })}
        {/* row 1 */}

        </tbody>
      </table>
      <div className={'text-center mt-2'}>
        <Pagination totalPages={data.total} page={page} setPage={setPage}/>

      </div>
    </>
  )
}

function LicenseRow({license, index, mutate}: {license: License, index: number, mutate: any}) {
  const [loading, setLoading] = useState<boolean>(false);
  const resettheLicense = () => {
    setLoading(true);
    resetLicense(license.license).then(() => {
      mutate();
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
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });
      setLoading(false)
    })
  }
  const blacklistthelicense = () => {
    setLoading(true);
    blacklistLicense(license.license).then(() => {
      mutate();
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
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });
      setLoading(false)
    })
  }
  return (
    <tr key={index}>

      <td>{license.user_id}</td>
      <td>{license.product_name}</td>
      <td className={license.blacklisted ? 'text-red-500' : 'text-green-500'}>{license.blacklisted ? 'YES' : 'no'}</td>
      <td>{license.ip.length ? (
        <ul className={'list-decimal'}>
          {license.ip.map((ip, index) => {
            return <li key={index}>{ip}</li>;
          })}
        </ul>
      ) : 'No Usage'}</td>
      <td>{license.usage}/{license.maxusage}</td>
      <td title={license.license} onClick={() => navigator.clipboard.writeText(license.license)}>{license.license.length > 40 ? `${license.license.slice(0, 40)}...` : license.license}</td>
      <td>{license.version}</td>
      <td>{license.order_id}</td>
      <td><button className={'btn btn-error btn-outline outline-0 my-4'} onClick={() => resettheLicense()} disabled={loading}>Reset</button><br/>
        <button className={'btn btn-error'} onClick={() => blacklistthelicense()} disabled={loading}>{license.blacklisted ? 'UNBLACKLISTING' : 'BLACKLIST'}</button></td>
    </tr>
  )
}