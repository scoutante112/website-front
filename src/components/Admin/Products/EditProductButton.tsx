import React, { Fragment, useState } from 'react';
import { Product } from './ProductsContainer';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import { useFormik } from 'formik';
import editProduct from '../../../api/admin/products/editProduct';
import { toast } from 'react-toastify';
import { boolean, number, object, string } from 'yup';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { formatFileSize, getBackgroundColor, getFileExtension } from '../../../utils/Image';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useDark } from '../../../App';

export default function EditProductButton({product, page, perpage, search}: {product: Product, page: number; perpage: number, search: string}) {
    const [loading, setLoading] = useState(false);
    const {mutate} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
    const {dark} = useDark();
    const [isLicensed, setLicensed] = useState<boolean>(product.licensed);
    const [isNew, setNew] = useState<boolean>(product.new);
    const [isAutoInstaller, setAutoInstaller] = useState<boolean>(product.autoinstaller);
    const [isTab, setTab] = useState<boolean>(product.tab);
    const [isRecurrent, setRecurrent] = useState<boolean>(product.recurrent);
    const [isHidded, setHide] = useState<boolean>(product.hide);
    const [isExtension, setExtension] = useState<boolean>(product.extension);
    const [isWings, setWings] = useState<boolean>(product.isWings);

    const [open, setOpen] = useState<boolean>(false);
    const [logo, setLogo] = useState<File | null>(null);
    const [zip, setZip] = useState<File | null>(null);

    const form = object({
        name: string().required(),
        tabroute: string().nullable(),
        slug: string().required(),
        category: string().required(),
        version: number().required(),
        sxcname: string().nullable(),
        bbb_id: number().nullable(),
        tag: string().required(),
        description: string().required(),
        link: string().optional(),
        price: number().required(),
  

        extensionProduct: number().nullable()

    });
    const initialValues = {
        name: product.name,
        tabroute: product.tabroute ? product.tabroute : '',
        version: product.version,
        slug: product.slug,
        category: product.category,
        bbb_id: product.bbb_id ? product.bbb_id : 0,
        tag: product.tag,
        description: product.description,
        price: product.price,
        extensionProduct: product.extension_product,
        sxcname: product.sxcname ? product.sxcname : '',
        link:  JSON.stringify(product.link)
    };
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);

            editProduct(product.id, values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description, isHidded, isExtension, values.slug, values.category, isWings, values.extensionProduct, logo, zip).then((data) => {
                if (data.data['status'] === 'error') {
                    toast.error(data.data['message'], {
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

                } else {

                    toast.success('Success! Product was edited.', {
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
                    setOpen(false);
                    return mutate();
                }
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
        }
    });


    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-black font-semibold leading-6">
                                Create product
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                                <h3 className='font-bold text-black text-lg'>Create product:</h3>

                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className='grid md:grid-cols-4 gap-x-4'>

                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='name'
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Name
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='name'
                                                                defaultValue={product.name}

                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='name'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>
                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='tag'
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Tag
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='tag'
                                                                defaultValue={product.tag}

                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='tag'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>
                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='version'
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Version
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='version'
                                                                defaultValue={product.version}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='version'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>
                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='price'
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Price
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='price'
                                                                defaultValue={product.price}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='price'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>

                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='sxcName'
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    SxcName
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='sxcname'
                                                                defaultValue={product.sxcname ? product.sxcname : ''}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='sxcname'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>

                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='bbb_id'
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    BBB id
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='bbb_id'
                                                                defaultValue={product.bbb_id ? product.bbb_id : ''}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='bbb_id'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>
                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='link'
                                                                    onClick={() => navigator.clipboard.writeText('[{"name":"ssx","link":""},{"name":"pm","link":""},{"name":"bbb","link":""}]')}
                                                                    className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Link
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='link'
                                                                defaultValue={product.link ? JSON.stringify(product.link) : ''}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='link'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className={'mt-10 grid md:grid-cols-2 w-full gap-x-2'}>

                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='slug'
                                                                    className=' block text-sm font-medium leading-6 text-gray-900'>
                                                                    Slug
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='slug'
                                                                defaultValue={product.slug}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='slug'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>
                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='category'
                                                                    className=' block text-sm font-medium leading-6 text-gray-900'>
                                                                    Category
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='category'
                                                                defaultValue={product.category}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='category'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'mt-10 grid md:grid-cols-4 w-full'}>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='licensed'
                                                                    aria-describedby='comments-description'
                                                                    name='licensed'
                                                                    type='checkbox'
                                                                    onChange={() => setLicensed(!isLicensed)}
                                                                    disabled={loading}
                                                                    defaultChecked={isLicensed}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='licensed'
                                                                       className='font-medium text-gray-900'>
                                                                    Licensed
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='new'
                                                                    aria-describedby='comments-description'
                                                                    name='new'
                                                                    type='checkbox'
                                                                    onChange={() => setNew(!isNew)}
                                                                    disabled={loading}
                                                                    defaultChecked={isNew}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='new'
                                                                       className='font-medium text-gray-900'>
                                                                    New
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='isWings'
                                                                    aria-describedby='comments-description'
                                                                    name='isWings'
                                                                    type='checkbox'
                                                                    onChange={() => setWings(!isWings)}
                                                                    disabled={loading}
                                                                    defaultChecked={isWings}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='new'
                                                                    className='font-medium text-gray-900'>
                                                                    Wings
                                                                </label>

                                                            </div>
                                                        </div>
                                                         <div className='relative flex items-start'>
                                                        <div className='flex h-6 items-center'>
                                                            <input
                                                                id='autoinstaller'
                                                                aria-describedby='comments-description'
                                                                name='autoinstaller'
                                                                type='checkbox'
                                                                onChange={() => setAutoInstaller(!isAutoInstaller)}
                                                                disabled={loading}
                                                                defaultChecked={isAutoInstaller}
                                                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                            />
                                                        </div>
                                                        <div className='ml-3 text-sm leading-6'>
                                                            <label htmlFor='autoinstaller'
                                                                   className='font-medium text-gray-900'>
                                                                AutoInstaller
                                                            </label>

                                                        </div>
                                                    </div>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='recurrent'
                                                                    aria-describedby='comments-description'
                                                                    name='recurrent'
                                                                    type='checkbox'
                                                                    onChange={() => setRecurrent(!isRecurrent)}
                                                                    disabled={loading}
                                                                    defaultChecked={isRecurrent}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='recurrent'
                                                                       className='font-medium text-gray-900'>
                                                                    Recurrent
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='hidded'
                                                                    aria-describedby='comments-description'
                                                                    name='hidded'
                                                                    type='checkbox'
                                                                    onChange={() => setHide(!isHidded)}
                                                                    disabled={loading}
                                                                    defaultChecked={isHidded}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='hidded'
                                                                       className='font-medium text-gray-900'>
                                                                    Hidded
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='tab'
                                                                    aria-describedby='comments-description'
                                                                    name='tab'
                                                                    type='checkbox'
                                                                    onChange={() => setTab(!isTab)}
                                                                    disabled={loading}
                                                                    defaultChecked={isTab}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='tab'
                                                                       className='font-medium text-gray-900'>
                                                                    Tab
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div className='relative flex items-start'>
                                                            <div className='flex h-6 items-center'>
                                                                <input
                                                                    id='extension'
                                                                    aria-describedby='comments-description'
                                                                    name='extension'
                                                                    type='checkbox'
                                                                    onChange={() => setExtension(!isExtension)}
                                                                    disabled={loading}
                                                                    defaultChecked={isExtension}
                                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                                />
                                                            </div>
                                                            <div className='ml-3 text-sm leading-6'>
                                                                <label htmlFor='extension'
                                                                       className='font-medium text-gray-900'>
                                                                    Extension
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {isExtension ?
                                                        <div className='form-control w-full max-w-xs'>
                                                            <div>
                                                                <label htmlFor='extensionProduct'
                                                                       className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Extension product Id
                                                                </label>
                                                            </div>
                                                            <input
                                                                type='text'
                                                                name='extensionProduct'
                                                                defaultValue={product.extension_product ? product.extension_product : ''}
                                                                onChange={formik.handleChange}
                                                                disabled={loading}
                                                                id='extensionProduct'
                                                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            />
                                                        </div> : <></>}
                                                    {isTab ? <div className='form-control w-full max-w-xs'>
                                                        <div>
                                                            <label htmlFor='link'
                                                                className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                    Tab Route
                                                            </label>
                                                        </div>
                                                        <input
                                                            type='text'
                                                            name='tabroute'
                                                            defaultValue={product.tabroute ? product.tabroute : ''}
                                                            onChange={formik.handleChange}
                                                            disabled={loading}
                                                            id='tabroute'
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div> : <></>}

                                                    <div className='form-control w-full col-span-2 my-2'>

                                                        <label htmlFor='zip'
                                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                                                Zip
                                                        </label>
                                                        <div
                                                            className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                                                            <div className='text-center'>
                                                                <PhotoIcon
                                                                    className='mx-auto h-12 w-12 text-gray-300'
                                                                    aria-hidden='true' />
                                                                <div
                                                                    className='mt-4 flex text-sm leading-6 text-gray-600'>
                                                                    <label
                                                                        htmlFor='file-upload2'
                                                                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                                                                    >
                                                                        <span>Upload a file</span>
                                                                        <input id='file-upload2' name='file-upload2'
                                                                            onChange={(e) => {
                                                                                if (e.target.files) {
                                                                                    if (e.target.files[0]) {
                                                                                        setZip(e.target.files[0]);
                                                                                    }
                                                                                }
                                                                            }}

                                                                            type='file' className='sr-only' />
                                                                    </label>
                                                                    <p className='pl-1'>or drag and drop</p>
                                                                </div>
                                                                <p className='text-xs leading-5 text-gray-600'>Zip</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='form-control w-full col-span-2 my-2'>

                                                        <label htmlFor='logo'
                                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                                                Icon
                                                        </label>
                                                        <div
                                                            className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                                                            <div className='text-center'>
                                                                <PhotoIcon
                                                                    className='mx-auto h-12 w-12 text-gray-300'
                                                                    aria-hidden='true' />
                                                                <div
                                                                    className='mt-4 flex text-sm leading-6 text-gray-600'>
                                                                    <label
                                                                        htmlFor='file-upload'
                                                                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                                                                    >
                                                                        <span>Upload a file</span>
                                                                        <input id='file-upload' name='file-upload'
                                                                            onChange={(e) => {
                                                                                if (e.target.files) {
                                                                                    if (e.target.files[0]) {
                                                                                        setLogo(e.target.files[0]);

                                                                                    }
                                                                                }
                                                                            }}

                                                                            type='file' className='sr-only' />
                                                                    </label>
                                                                    <p className='pl-1'>or drag and drop</p>
                                                                </div>
                                                                <p className='text-xs leading-5 text-gray-600'>WEBP</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {(logo !== null || zip !== null) &&
                                                            <div className='w-full col-span-2 my-10'>

                                                                <table
                                                                    className='min-w-full divide-y divide-gray-300 border-2'>

                                                                    <thead className='bg-gray-50'>
                                                                        <tr>
                                                                            <th scope='col'
                                                                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
                                                                            Name
                                                                            </th>
                                                                            <th scope='col'
                                                                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                                                                            Size
                                                                            </th>
                                                                            <th scope='col'
                                                                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                                                                            Extension
                                                                            </th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody
                                                                        className='divide-y divide-gray-200 bg-white border-2 my-4'>
                                                                        {logo !== null && logo && (
                                                                            <tr key={logo.name}>
                                                                                <td className='border-1 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                                                                    {logo.name.slice(0, 40)}
                                                                                </td>
                                                                                <td
                                                                                    className={`border-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${
                                                                                        getBackgroundColor(logo.size)
                                                                                    }`}
                                                                                >
                                                                                    {formatFileSize(logo.size)}
                                                                                </td>
                                                                                <td className={`border-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${getFileExtension(logo.name) !== 'webp' ? 'text-white bg-red-500' : 'bg-green-500'}`}>
                                                                                    {getFileExtension(logo.name)}
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                        {zip !== null && zip && (
                                                                            <tr key={zip.name}>
                                                                                <td className='border-1 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                                                                    {zip.name.slice(0, 40)}
                                                                                </td>
                                                                                <td
                                                                                    className={`border-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${
                                                                                        getBackgroundColor(zip.size)
                                                                                    }`}
                                                                                >
                                                                                    {formatFileSize(zip.size)}
                                                                                </td>
                                                                                <td className={`border-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${getFileExtension(zip.name) !== 'zip' ? 'text-white bg-red-500' : 'bg-green-500'}`}>
                                                                                    {getFileExtension(zip.name)}
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                    }
                                                    <AceEditor
                                                        value={formik.values.description}
                                                        mode='html'
                                                        theme='tomorrow'
                                                        defaultValue={product.description}
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
                                                        onChange={(value) => formik.setFieldValue('description', value)}
                                                        style={{
                                                            width: '100%',
                                                            height: '300px',
                                                        }}
                                                    />


                                                    <div className='col-span-2 flex ml-auto my-2'>
                                                        <button
                                                            className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                                                            onClick={() => console.log(formik.errors)}
                                                            type={'submit'}
                                                            disabled={loading || !formik.errors}>Submit
                                                        </button>

                                                        <button
                                                            className='mx-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                            onClick={() => {
                                                                setOpen(false);
                                                            }} disabled={loading}>Close
                                                        </button>


                                                    </div>


                                                </form>

                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <button
                className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                onClick={() => setOpen(true)}>Edit
            </button>
        </>
    );
}