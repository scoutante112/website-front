import React, { useState } from 'react';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import { toast } from 'react-toastify';
import Pagination from '../../Elements/Pagination';
import 'react-quill/dist/quill.snow.css';
import { ProductResponse } from '../Products/ProductsContainer';
import { useDark } from '../../../App';
import deleteAutoInstaller from '../../../api/admin/autoinstaller/deleteAutoInstaller';
import { useNavigate } from 'react-router-dom';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import debounce from 'lodash.debounce';


export interface Installer {
    name: string;
    type: string;
    where: string;
    content: string;
    version: string;
    theme_id: number;
    product_id: number;
    id?: number;
}

interface InstallerResponse {
    data: Installer[];
    total: number;
}

export default function AutoInstallerContainer() {
    const dark = useDark();
    const navigate = useNavigate();

    const [page, setPage] = useState<number>(1);
    const [product, setProduct] = useState<number | null>(null);
    const {
        data,
        error,
        isLoading,
        mutate,
    } = useSWR<InstallerResponse>(`${config.privateapilink}/admin/autoinstaller?page=${page}&product=${product}`, fetcher);
    const {
        data: data2,
        error: error2,
        isLoading: isLoading2,
    } = useSWR<ProductResponse>(`${config.privateapilink}/admin/products?page=${page}&perpage=999999`, fetcher);

    if ((!data || (error || isLoading)) || (!data2 || (error2 || isLoading2))) {
        return <Loading />;
    }
    return (
        <>

            <div className='px-4 sm:px-6 lg:px-8'>

                <div className='sm:flex sm:items-center'>
                    <div className='sm:flex-auto'>
                        <h1 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}>Licenses</h1>
                        <p className={`${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm`}>
                        You are on the <strong
                                className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`}>licenses</strong> page.
                        You can here see all your licenses releated to our products.
                        </p>
                    </div>

                    <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                        <button
                            type='button'
                            onClick={() => navigate('/account/admin/autoinstaller/new')}
                            className='flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative'
                        >
                        Add license
                            <ArrowDownCircleIcon
                                className={`mx-2 h-5 w-5 my-auto transform transition-transform`}

                            />

                        </button>
                    </div>

                </div>


                <div>
                    <div>
                        <label htmlFor="search" className={`${dark ? 'text-slate-200' : 'text-gray-900'} mt-10 block text-sm font-medium leading-6`}>
                        Search
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                            placeholder="bgxw_Ddf4dg45bfdb54b5df4b5d"
                        />
                    </div>
                </div>
                <div className="-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                    <table className='min-w-full divide-y divide-gray-300 text-black'>
                        {/* head */}
                        <thead>
                            <tr>
                                <th scope='col'
                                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 table-cell'>
                            Name
                                </th>
                                <th scope='col'
                                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 table-cell'>
                            Type
                                </th>
                                <th scope='col'
                                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Theme
                                </th>
                                <th scope='col'
                                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Version
                                </th>
                                <th scope='col'
                                    className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.length > 0 && data.data.map((autoinstaller: Installer, index: number) => {
                                return (
                                    <AutoInstallerRow autoinstaller={autoinstaller} mutate={mutate} key={index} />
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className={'text-center mt-2'}>
                <Pagination totalPages={data.total} page={page} setPage={setPage} />

            </div>
        </>
    );
}

function AutoInstallerRow({ autoinstaller, mutate }: { autoinstaller: Installer, mutate: any }) {
    const [loading, setLoading] = useState<boolean>(false);
    const dark = useDark();
    const navigate = useNavigate();
    const deleteInstaller = () => {
        setLoading(true);
        deleteAutoInstaller(autoinstaller.id ? autoinstaller.id : -1).then(() => {
            mutate();
            setLoading(false);
        }).catch(() => {
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
        <tr>
            <td className='border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 hidden lg:table-cell'>
                {autoinstaller.name}
            </td>
            <td className='border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 hidden lg:table-cell'>
                {autoinstaller.type}
            </td>
            <td className='border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 hidden lg:table-cell'>
                {autoinstaller.theme_id}
            </td>
            <td className='border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 hidden lg:table-cell'>
                {autoinstaller.version}
            </td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'
            >
                <div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>

                    <button
                        className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() => navigate(`/admin/autoinstaller/${autoinstaller.id}`)}
                        disabled={loading}>EDIT
                    </button>
                    <br />
                    <button
                        className=' my-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() => deleteInstaller()}
                    >DELETE
                    </button>
                </div>
            </td>

        </tr>
    )
    ;
}