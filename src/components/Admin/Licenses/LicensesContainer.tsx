
import React, { useState } from 'react';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import NavBarAccount from '../../Account/NavBarAccount';
import { toast } from 'react-toastify';
import { debounce } from 'debounce';
import Pagination from '../../Elements/Pagination';
import 'react-quill/dist/quill.snow.css';
import resetLicense from '../../../api/admin/licenses/resetLicense';
import blacklistLicense from '../../../api/admin/licenses/blacklistLicense';
import deleteNews from '../../../api/admin/blogs/deleteNews';


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
        return <Loading/>;
    }
    const searchValue = debounce((value: string) => {
        setSearch(value);
        setPage(1);
    }, 500);
    return (
        <>
            <div className='px-4 sm:px-6 lg:px-8'>

                <div className='sm:flex sm:items-center'>
                    <div className='sm:flex-auto'>
                        <h1 className='text-base font-semibold leading-6 text-gray-900'>Licenses</h1>
                        <p className='mt-2 text-sm text-gray-700'>
                  You are on the <strong
                                className='font-semibold text-gray-900'>licenses</strong> page.
                  You can here see and manage all licenses
                        </p>
                    </div>


                </div>
            </div>
            <div className='-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300 text-black'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>User
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>Product
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>Blacklisted
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>Ip
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>Usage
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>License
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>Version
                            </th>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>Order
                            </th>
                            <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                                <span className='sr-only'>Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((license: License, index: number) => {
                            return (
                                <LicenseRow license={license} index={index} mutate={mutate}/>
                            );
                        })}

                    </tbody>
                </table>
            </div>
            <div className={'text-center mt-2'}>
                <Pagination totalPages={data.total} page={page} setPage={setPage}/>

            </div>
        </>
    );
}

function LicenseRow({license, index, mutate}: {license: License, index: number, mutate: any}) {
    const [loading, setLoading] = useState<boolean>(false);
    const resettheLicense = () => {
        setLoading(true);
        resetLicense(license.license).then(() => {
            mutate();
            setLoading(false);
        }).catch((e) => {
            toast.error('An unexcepted error happend. Please contact one of our support team.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });
            setLoading(false);
        });
    };
    const blacklistthelicense = () => {
        setLoading(true);
        blacklistLicense(license.license).then(() => {
            mutate();
            setLoading(false);
        }).catch((e) => {
            toast.error('An unexcepted error happend. Please contact one of our support team.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });
            setLoading(false);
        });
    };
    return (
        <tr key={index}>

            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{license.user_id}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{license.product_name}</td>
            <td className={`border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell ${license.blacklisted ? 'text-red-500' : 'text-green-500'}`}> {
                license.blacklisted ? 'YES' : 'no'
            }</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{license.ip.length ? (
                <ul className={'list-decimal'}>
                    {license.ip.map((ip, index) => {
                        return <li key={index}>{ip}</li>;
                    })}
                </ul>
            ) : 'No Usage'}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{license.usage}/{license.maxusage}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell' title={license.license}
                onClick={() => navigator.clipboard.writeText(license.license)}>{license.license.length > 40 ? `${license.license.slice(0, 40)}...` : license.license}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{license.version}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{license.order_id}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'
            >
                <div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>

                    <button
                        className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() => resettheLicense()}
                        disabled={loading}>Reset
                    </button>
                    <br />
                    <button
                        className=' my-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() => blacklistthelicense()}
                        disabled={loading}>{license.blacklisted ? 'UNBLACKLISTING' : 'BLACKLIST'}
                    </button>
                </div>
            </td>
  
        </tr>
    )
    ;
}