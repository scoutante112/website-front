import React, { Fragment, useState } from 'react';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import { array, mixed, number, object, string } from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import deleteNews from '../../../api/admin/blogs/deleteNews';
import editNews from '../../../api/admin/blogs/editNews';
import debounce from 'lodash.debounce';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { formatFileSize, getBackgroundColor, getFileExtension } from '../../../utils/Image';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/ext-language_tools';

interface category {
  id: number;
  name: string;
  slug: string;
}
interface blog {
  id: number;
  author: string;
  tags: string;
  title: string;
  category_id: number;
  views: number;
  slug: string;
  pictures: string;
  content: string;
}

export default function NewsContainer() {
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    const {data: blogs, error, isLoading} = useSWR(`${config.privateapilink}/blogs?search${search}&category=${category}&${page}`, fetcher);
    const {data: categories, error: error2, isLoading: isLoading2} = useSWR(`${config.privateapilink}/categories`, fetcher);

    if((!blogs || (error || isLoading)) || (!categories || (error2 || isLoading2))) {
        return (
            <Loading/>
        );
    }
    return (
        <section className={'mx-8 my-4'}>

            <div className={'grid lg:grid-cols-7 gap-x-2'}>
                <div className={'lg:col-span-6'}>
                    <div>
                        <label htmlFor='search' className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                            Search
                        </label>
                    </div>
                    <div className='mt-2'>
                        <input
                            type='text'
                            name='search'
                            onChange={debounce((e) => {
                                setSearch(e.target.value);
                            }, 500)}
                            id='search'
                            defaultValue={search}
                            className=' block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            placeholder='bgxw_Ddf4dg45bfdb54b5df4b5d'
                        />
                    </div>
                </div>
                <div className={'mt-auto'}>
                    <label htmlFor='location' className='block text-sm font-medium leading-6 text-gray-900'>
                        Select category
                    </label>
                    <select
                        id='category'
                        name='cacategory'
                        onChange={(e) => setCategory(e.target.value)}
                        className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    >
                        {categories.data.map((category: category, index: number) => {
                            return <option key={index} value={category.id}>{category.name}</option>;
                        })}
                    </select>
                </div>
            </div>
            <div className='-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                        <tr>
                            <th scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell'>
                            Id
                            </th>
                            <th
                                scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell'
                            >
                            Title
                            </th>
                            <th
                                scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
                            >
                            Author
                            </th>
                            <th
                                scope='col'
                                className=' px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell'
                            >
                            Slug
                            </th>
                            <th scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Category
                            </th>
                            <th scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Pictures
                            </th>
                            <th scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Views
                            </th>
                            <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                                <span className='sr-only'>Select</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.data.map((blog: blog, index: number) => {

                            return <BlogRow blog={blog} key={index} categories={categories} />;
                        })}
                    </tbody>
                </table>
            </div>
            <nav
                className='flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6'
                aria-label='Pagination'
            >
                <div className='hidden sm:block'>
                    <p className='text-sm text-gray-700'>
                        Showing <span className='font-medium'>{page * 10 - 9}</span> to <span
                            className='font-medium'>{page * 10}</span> of{' '}
                        <span className='font-medium'>{blogs.totalPage * 10}</span> results
                    </p>
                </div>
                <div className='flex flex-1 justify-between sm:justify-end'>
                    <button
                        onClick={() => setPage(page-1)}
                        disabled={page === 1}
                        className='relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0'
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setPage(page+1)}
                        disabled={blogs.totalPage <= page}
                        className='relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0'
                    >
                        Next
                    </button>
                </div>
            </nav>
        </section>
    );
}


function BlogRow({ blog, categories }: { blog: blog, categories: any }) {

    const [newsOpen, setNewsOpen] = useState<boolean>(false);
    return (
        <tr className='hover'>
            <EditNews setNewsOpen={setNewsOpen} newsOpen={newsOpen} blog={blog} categories={categories} />
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{blog.id}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{blog.title}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{blog.author}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{blog.slug}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{blog.category_id}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>
                <ul className={'list-disc'}>{JSON.parse(blog.pictures).map((picture: string, index: number) => {
                    return <li key={index} className={'hover:text-blue-600'}
                        onClick={() => window.open(`https://api.bagou450.com${picture}`, '_blank')}>{picture}</li>;
                })}</ul>
            </td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{blog.views}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'
            >
                <div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>

                    <button
                        className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() =>
                            setNewsOpen(!newsOpen)}>Edit
                    </button>
                    <br />
                    <button
                        className=' my-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        onClick={() => deleteNews(blog.id)}>Remove
                    </button>
                </div>
            </td>

        </tr>


    );
}

const EditNews = ({ newsOpen, setNewsOpen, blog, categories }: {
    newsOpen: boolean,
    setNewsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    blog: blog,
    categories: any}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const form = object({
        title: string().required('The title can\'t be empty.'),
        category: number().required('The category can\'t be empty'),
        tags: string().required('The tag can\'t be empty'),
        slug: string().required('The slug can\'t be empty'),
        data: string().required('The data can\'t be empty'),
        pictures: array().of(mixed()).nullable(),
    });

    const formik = useFormik({
        initialValues: {
            title: blog.title,
            category: blog.category_id,
            tags: blog.tags,
            slug: blog.slug,
            data: blog.content,
            pictures: [],
        },
        validationSchema: form,
        onSubmit: (values) => {
            if (values.category === -1) {
                toast.error('Error: Need to select a category', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            }
            setLoading(true);
            const tag = values.tags.split(',');
            editNews(blog.id, values.title, values.category, tag, values.slug, values.data, values.pictures).then((data) => {
                if (data.status !== 'success') {
                    toast.error(`Error: ${data.message}`, {
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
                    return null;
                }
                setNewsOpen(false);
                location.reload();
                const inputs = document.querySelectorAll('input:not(#search)');
                const textareas = document.querySelectorAll('textarea');

                inputs.forEach((input: any) => {
                    input.value = '';
                });
                textareas.forEach((textarea) => {
                    textarea.value = '';
                });
                setLoading(false);
                toast.success('News created successfully.', {
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
                setLoading(false);

            });
        }
    });
    return (
        <Transition.Root show={newsOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setNewsOpen}>
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
                                                    Create news
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => setNewsOpen(false)}
                                                    >
                                                        <span className="absolute -inset-2.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                            <h3 className='font-bold text-black text-lg'>Create news:</h3>

                                            <form method='dialog' className='modal-box w-11/12 max-w-5xl'
                                                onSubmit={formik.handleSubmit}>
                                                <div className={'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'}>
                                                    <div className='form-control w-full max-w-xs'>
                                                        <div>
                                                            <label htmlFor='title'
                                                                className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                Title
                                                            </label>
                                                        </div>
                                                        <input
                                                            type='text'
                                                            name='title'
                                                            defaultValue={blog.title}
                                                            onChange={formik.handleChange}
                                                            id='title'
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                    <div className='form-control w-full max-w-xs'>
                                                        <div>
                                                            <label htmlFor='slug'
                                                                className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                Slug
                                                            </label>
                                                        </div>
                                                        <input
                                                            type='text'
                                                            name='slug'
                                                            defaultValue={blog.slug}
                                                            onChange={formik.handleChange}
                                                            id='slug'
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>


                                                    <div className='form-control w-full max-w-xs'>
                                                        <div>
                                                            <label htmlFor='tags'
                                                                className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                Tags
                                                            </label>
                                                        </div>
                                                        <input
                                                            type='text'
                                                            name='tags'
                                                            defaultValue={blog.tags}
                                                            onChange={formik.handleChange}
                                                            id='tags'
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                    <div className='form-control w-full max-w-xs'>


                                                        <div>
                                                            <label htmlFor='title'
                                                                className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                                Category
                                                            </label>
                                                        </div>
                                                        <select
                                                            id='category'
                                                            name='category'
                                                            defaultValue={blog.category_id}
                                                            onChange={(e) => formik.setFieldValue('category', e.target.value)}
                                                            className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        >
                                                            <option disabled selected>Select category</option>
                                                            {categories.data.map((category: category, index: number) => {
                                                                return <option key={index}
                                                                    value={category.id}>{category.name}</option>;
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className='form-control w-full col-span-2 my-2'>

                                                        <label htmlFor='cover-photo'
                                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                                            Cover photo
                                                        </label>
                                                        <div
                                                            className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                                                            <div className='text-center'>
                                                                <PhotoIcon className='mx-auto h-12 w-12 text-gray-300'
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
                                                                                const files = Array.from(e.target.files ? e.target.files : []);
                                                                                formik.setFieldValue('pictures', files);
                                                                            }}
                                                                            multiple
                                                                            type='file' className='sr-only' />
                                                                    </label>
                                                                    <p className='pl-1'>or drag and drop</p>
                                                                </div>
                                                                <p className='text-xs leading-5 text-gray-600'>WEBP up
                                                                    to 10mb</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className='w-full col-span-2'>

                                                        <table className='min-w-full divide-y divide-gray-300 border-2'>

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
                                                                {formik.values.pictures.length > 0 && formik.values.pictures.map((file: File) => (
                                                                    <tr key={file.name}>
                                                                        <td className='border-1 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                                                            {file.name.slice(0, 40)}
                                                                        </td>
                                                                        <td
                                                                            className={`border-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${
                                                                                getBackgroundColor(file.size)
                                                                            }`}
                                                                        >
                                                                            {formatFileSize(file.size)}
                                                                        </td>
                                                                        <td className={`border-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${getFileExtension(file.name) !== 'webp' ? 'text-white bg-red-500' : 'bg-green-500'}`}>
                                                                            {getFileExtension(file.name)}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className='w-full col-span-2'>
                                                        <label htmlFor='cover-photo'
                                                            className='block text-sm font-medium leading-6 text-gray-900 my-4'>
                                                            HTML
                                                        </label>

                                                        <AceEditor
                                                            value={formik.values.data}
                                                            mode='html'
                                                            theme='tomorrow'
                                                            defaultValue={blog.content}
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
                                                            onChange={(value) => formik.setFieldValue('data', value)}
                                                            style={{
                                                                width: '100%',
                                                                height: '300px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className='col-span-2 flex ml-auto my-2'>
                                                        <button
                                                            className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                            type={'submit'}
                                                            disabled={loading}>Create News
                                                        </button>

                                                        <button
                                                            className='mx-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                            onClick={() => {
                                                                setNewsOpen(false);
                                                            }} disabled={loading}>Close
                                                        </button>


                                                    </div>
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
    );
};