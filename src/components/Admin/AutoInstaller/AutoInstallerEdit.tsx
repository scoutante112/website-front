import { Fragment, useState } from 'preact/compat';
import { useNavigate, useParams } from 'react-router-dom';
import { Installer } from './AutoInstallerContainer';
import { useFormik } from 'formik';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import editAutoInstaller from '../../../api/admin/autoinstaller/editAutoInstaller';
import { ProductResponse } from '../Products/ProductsContainer';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '../../NavBar';
import AceEditor from 'react-ace';
import { useDark } from '../../../App';

interface InstallerUniqueResponse {
    data: Installer;
    status: string;
}

///
//
//
//
//ADD THEME LISTING FOR AUTOINSTALLR
//
//
//
//
export default function AutoInstallerEdit() {
    const dark = useDark();
    const { element } = useParams();
    const navigate = useNavigate();
    if (!element) {
        navigate('/');
        return <></>;
    }
    const [loading, setLoading] = useState<boolean>(false);

    const {
        data,
        error,
        isLoading,
        mutate,
    } = useSWR<InstallerUniqueResponse>(`${config.privateapilink}/admin/autoinstaller/${element}`, fetcher);

    const {
        data: data2,
        error: error2,
        isLoading: isLoading2,
    } = useSWR<ProductResponse>(`${config.privateapilink}/admin/products?page=${1}&perpage=999999`, fetcher);

    if ((!data || error || isLoading) || (!data2 || error2 || isLoading2)) {
        return <Loading />;
    }
    const installer = data.data;
    const formik = useFormik({
        initialValues: {
            id: installer.id,
            name: installer.name,
            type: installer.type,
            where: installer.where,
            content: installer.content,
            version: installer.version,
            theme_id: installer.theme_id,
            product_id: installer.product_id,
        },
        onSubmit: (values: Installer) => {
            setLoading(true);
            editAutoInstaller(values.id ?? 0, values.name, values.type, values.where, values.content, values.version, values.theme_id, values.product_id).then((data) => {
                console.log(data);
                mutate();
            }).catch((e) => {
                console.error(e);
            });
        },
    });
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <form onSubmit={() => formik.handleSubmit}>
                <div className='space-y-12 sm:space-y-16'>
                    <div>
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>New AutoInstaller</h2>


                        <div
                            className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
                            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
                                <label htmlFor='name'
                                       className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                                    Name
                                </label>
                                <div className='mt-2 sm:col-span-2 sm:mt-0'>
                                    <div
                                        className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            autoComplete='name'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='resources/'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
                                <label htmlFor='where'
                                       className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                                    Where
                                </label>
                                <div className='mt-2 sm:col-span-2 sm:mt-0'>
                                    <div
                                        className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <input
                                            type='text'
                                            name='where'
                                            id='where'
                                            autoComplete='where'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='resources/'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
                                <label htmlFor='version'
                                       className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                                    Version
                                </label>
                                <div className='mt-2 sm:col-span-2 sm:mt-0'>
                                    <div
                                        className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <input
                                            type='text'
                                            name='version'
                                            id='version'
                                            autoComplete='version'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='resources/'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
                                <Listbox value={formik.values.type} onChange={formik.handleChange}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label
                                                className='block text-sm font-medium leading-6 text-gray-900'>Assigned
                                                to</Listbox.Label>
                                            <div className='relative mt-2'>
                                                <Listbox.Button
                                                    className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                                    <span className='block truncate'>{formik.values.type}</span>
                                                    <span
                                                        className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                                        <ChevronUpDownIcon className='h-5 w-5 text-gray-400'
                                                                           aria-hidden='true' />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave='transition ease-in duration-100'
                                                    leaveFrom='opacity-100'
                                                    leaveTo='opacity-0'
                                                >
                                                    <Listbox.Options
                                                        className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                                        {['createFile', 'editAbove', 'editUnder', 'editReplace'].map((type) => (
                                                            <Listbox.Option
                                                                key={type}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                    )
                                                                }
                                                                value={type}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <span
                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                            {type}
                                                                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                                )}
                                                                            >
                                                                                <CheckIcon className='h-5 w-5'
                                                                                           aria-hidden='true' />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
                                <Listbox value={formik.values.product_id} onChange={formik.handleChange}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label
                                                className='block text-sm font-medium leading-6 text-gray-900'>Assigned
                                                to</Listbox.Label>
                                            <div className='relative mt-2'>
                                                <Listbox.Button
                                                    className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                                    <span className='block truncate'>{formik.values.product_id}</span>
                                                    <span
                                                        className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                                        <ChevronUpDownIcon className='h-5 w-5 text-gray-400'
                                                                           aria-hidden='true' />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave='transition ease-in duration-100'
                                                    leaveFrom='opacity-100'
                                                    leaveTo='opacity-0'
                                                >
                                                    <Listbox.Options
                                                        className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                                        {data2?.data.map((product) => (
                                                            <Listbox.Option
                                                                key={product.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                    )
                                                                }
                                                                value={product.id}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <span
                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                            {product.name}
                                                                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                                )}
                                                                            >
                                                                                <CheckIcon className='h-5 w-5'
                                                                                           aria-hidden='true' />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
                                <AceEditor
                                    value={formik.values.content}
                                    mode='html'
                                    theme='tomorrow'
                                    fontSize={14}
                                    showPrintMargin={true}
                                    showGutter={true}
                                    highlightActiveLine={true}
                                    setOptions={{
                                        enableBasicAutocompletion: true,
                                        enableLiveAutocompletion: true,
                                        enableSnippets: false,
                                        showLineNumbers: true,
                                        tabSize: 2,
                                    }}
                                    onChange={(value) => formik.setFieldValue('content', value)}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button
                className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                type={'submit'}
                disabled={loading}>EDIT
            </button>
        </>
    );
}