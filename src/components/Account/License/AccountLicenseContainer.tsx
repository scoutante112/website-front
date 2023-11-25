import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import { config } from '../../../config/config';
import resetLicense from '../../../api/admin/licenses/resetLicense';
import createOrder from '../../../api/shop/createOrder';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import linkLicense from '../../../api/licenses/linkLicense';
import { NavContext } from '../AccountRouter';

import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import debounce from 'lodash.debounce';
import { useDark } from '../../../App';

interface License {
  product: string;
  usage: number;
  version: string;
  order_id: number;
  maxusage: number;
  product_id: number;
  license: string;
  ip: string[];
}
export default function AccountLicenseContainer() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const {dark} = useDark();
    // @ts-ignore
    const { setActive } = useContext(NavContext);
    useEffect(() => {
        setActive(window.location.pathname);
    }, []);
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/license?search=${search}&page=${page}`,
        fetcher
    );
    const form = object({
        license: string().required('You need to enter a license').min(8),
    });

    const formik = useFormik({
        initialValues: { license: '' },
        validationSchema: form,
        onSubmit: (values) => {
            linkLicense(values.license).then(() => {
                mutate();
                toast.success('License added successfully.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });

            }).catch((e) => {
                toast.error(`Error: ${e.response.data.message}`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });


            });
            setOpen(false);
        }
    });
    if (!data || error || isLoading) {
        return (
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
                            onClick={() => setOpen(!open)}
                            className='flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative'
                        >
                            Add license
                            <ArrowDownCircleIcon
                                className={`mx-2 h-5 w-5 my-auto transform transition-transform ${
                                    open ? 'rotate-180' : 'rotate-0'
                                }`}

                            />

                        </button>
                    </div>

                </div>

                <div
                    className={`${dark ? 'bg-bg450-dark' : 'bg-white'} shadow sm:rounded-lg mt-2 transition-transform duration-300 ${open ? 'opacity-100 scale-100' : 'hidden opacity-0 scale-0'}`}>
                    <div className='flex justify-between px-4 py-5 sm:p-6'>
                        <div>
                            <h3 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}>Add
                                a license</h3>
                            <div className={`${dark ? 'text-slate-300' : 'text-gray-500'} mt-2 max-w-xl text-sm `}>
                                <p>Link a license to your account.</p>
                            </div>
                        </div>
                        <form className='mx-2 sm:flex sm:items-center' onSubmit={formik.handleSubmit}>
                            <div className='w-full sm:max-w-xl'>
                                <label htmlFor='email' className='sr-only'>
                                    License
                                </label>
                                <input
                                    type='text'
                                    name='license'
                                    id='license'
                                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs`}
                                    placeholder='bgxw_Dhofd6545564FDijofsids4dsf7'
                                />
                            </div>
                            <button
                                type='submit'
                                className='inline-flex w-full items-center justify-center rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled sm:ml-3 sm:mt-0 sm:w-auto'
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
                <Loading />
            </div>
        );
    }
    document.title = 'Bagou450 - My license';
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
                            onClick={() => setOpen(!open)}
                            className='flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative'
                        >
                            Add license
                            <ArrowDownCircleIcon
                                className={`mx-2 h-5 w-5 my-auto transform transition-transform ${
                                    open ? 'rotate-180' : 'rotate-0'
                                }`}

                            />

                        </button>
                    </div>

                </div>

                <div
                    className={`${dark ? 'bg-bg450-dark' : 'bg-white'} shadow sm:rounded-lg mt-2 transition-transform duration-300 ${open ? 'opacity-100 scale-100' : 'hidden opacity-0 scale-0'}`}>
                    <div className='flex justify-between px-4 py-5 sm:p-6'>
                        <div>
                            <h3 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}>Add
                                a license</h3>
                            <div className={`${dark ? 'text-slate-300' : 'text-gray-500'} mt-2 max-w-xl text-sm `}>
                                <p>Link a license to your account.</p>
                            </div>
                        </div>
                        <form className='mx-2 sm:flex sm:items-center' onSubmit={formik.handleSubmit}>
                            <div className='w-full sm:max-w-xl'>
                                <label htmlFor='email' className='sr-only'>
                                    License
                                </label>
                                <input
                                    type='text'
                                    name='license'
                                    id='license'
                                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs`}
                                    placeholder='bgxw_Dhofd6545564FDijofsids4dsf7'
                                />
                            </div>
                            <button
                                type='submit'
                                className='inline-flex w-full items-center justify-center rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled sm:ml-3 sm:mt-0 sm:w-auto'
                            >
                                Add
                            </button>
                        </form>
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
                            onChange={debounce((e) => {setSearch(e.target.value);}, 500)}
                            id="search"
                            defaultValue={search}
                            className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                            placeholder="bgxw_Ddf4dg45bfdb54b5df4b5d"
                        />
                    </div>
                </div>
                <div className="-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`}>
                        Product
                                </th>
                                <th
                                    scope="col"
                                    className={`${dark ? 'text-slate-200' : 'text-gray-900'} hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell`}
                                >
                        License
                                </th>
                                <th
                                    scope="col"
                                 className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`}
                                >
                        Usage
                                </th>
                                <th
                                    scope="col"
                                    className={`${dark ? 'text-slate-200' : 'text-gray-900'} hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell`}
                                >
                        Ip
                                </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`}>
                                Version
                            </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.license.map((plan: License, planIdx: number) => (
                                <LicenseRow license={plan} mutate={mutate} index={planIdx} key={planIdx}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <nav
                className="flex items-center justify-between px-4 py-3 sm:px-6 my-2"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    <p className={`${dark ? 'text-slate-300' : 'text-gray-700'} text-sm `}>
                        Showing <span className="font-medium">{page*10-10}</span> to <span className="font-medium">{page*10}</span> of{' '}
                        <span className="font-medium">{data.data.total}</span> results
                    </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                    <button
                        onClick={() => setPage(page-1)}
                        disabled={page < 2}
                        className={`${page < 2 && 'opacity-50'} relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setPage(page+1)}
                        disabled={page*10 >= data.data.total}
                        className={`${page*10 >= data.data.total && 'opacity-50'} relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`}
                    >
                        Next
                    </button>
                </div>
            </nav>
        </>
    );
}


function LicenseRow({license, mutate, index}: {license: License, mutate: any, index: number}) {
    const [ipData, setIpData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const {dark} = useDark();
    const resettheLicense = () => {
        setLoading(true);
        resetLicense(license.license).then(() => {
            mutate();
            toast.success('License has been reset successfully.', {
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
    const buyUsage = () => {
        setLoading(true);
        createOrder([license.product_id], true).then((data) => {
            setLoading(false);
            if(data.data.status === 'success') {
                window.location.href = data.data.data;
            }
        }).catch(() => {
            setLoading(false);
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
        });
    };
    return (

        
        <tr key={index}>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`}>
                <div className="font-medium">{license['product']}</div>
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`}
                onClick={() => {
                navigator.clipboard.writeText(license['license']);
                toast.success('License copied to clipboard.', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    theme: dark ? 'dark' : 'light',
                    });
                }}>
                {license['license'].slice(0,17)}{license['license'].length > 17 && '...'}
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`}>
                {license['usage']}/{license['maxusage']}
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`}>
                <div className='w-48'>
                    {license['ip'].length === 0 && 'No ip for this license'}
                    {license['ip'].map((thelicense, index) => (
                        <button
                            className={`${dark ? 'bg-bg450-inputdark text-slate-300 hover:bg-bg450-dark' : 'hover:bg-gray-50 bg-white text-gray-900'} block rounded-md  px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white mb-2 truncate`}
                            disabled={loading}
                            key={index}
                            title={thelicense}
                        >
                            {thelicense.slice(0,17)}{thelicense.length > 17 && '...'}
                        </button>
                    ))}
                </div>
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`}>
                {license['version']}
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`}>
                <button
                    className="inline-flex items-center rounded-md bg-red-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    onClick={() => resettheLicense()}
                    disabled={loading}
                >
                               Reset
                </button>
                <br />
                <button
                    className="inline-flex items-center rounded-md bg-purple-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    onClick={() => buyUsage()}
                    disabled={loading}
                >
                               Buy Usage
                </button>
                <br />
                <button
                    className="inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    onClick={() => {
                        navigator.clipboard.writeText(license['license']);
                        toast.success('License copied to clipboard.', {
                            position: 'bottom-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: dark ? 'dark' : 'light',
                        });
                    }}
                    disabled={loading}
                >
                    Copy license
                </button>
            </td>
        </tr>
  
    );
}