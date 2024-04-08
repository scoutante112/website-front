// @ts-nocheck
import { Fragment, useState } from 'preact/compat';
import CategoryContainer from './CategoryContainer';
import NewsContainer from './NewsContainer';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { array, mixed, number, object, string } from 'yup';
import { useFormik } from 'formik';
import createCategory from '../../../api/admin/blogs/createCategory';
import { toast } from 'react-toastify';
import createNews from '../../../api/admin/blogs/createNews';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import { PhotoIcon } from '@heroicons/react/24/solid';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/ext-language_tools';
import { formatFileSize, getBackgroundColor, getFileExtension } from '../../../utils/Image';
import { useDark } from '../../../App';

export default function BlogsContainer() {
    const [category, setCategory] = useState<boolean>(false);
    const [catOpen, setCatOpen] = useState<boolean>(false);
    const [newsOpen, setNewsOpen] = useState<boolean>(false);

    return (
        <>

            <CreateCatForm setCatOpen={setCatOpen} catOpen={catOpen} />
            <CreateNewsForm newsOpen={newsOpen} setNewsOpen={setNewsOpen} />

            <div className='px-4 sm:px-6 lg:px-8'>

                <div className='sm:flex sm:items-center'>
                    <div className='sm:flex-auto'>
                        <h1 className='text-base font-semibold leading-6 text-gray-900'>{category ? 'Categories' : 'News'}</h1>
                        <p className='mt-2 text-sm text-gray-700'>
                            You are on the <strong
                            className='font-semibold text-gray-900'>{category ? 'categories' : 'news'}</strong> page.
                            You can here see {category ? 'all news categories' : 'all news'}
                        </p>
                    </div>
                    <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                        <button
                            type='button'
                            onClick={() => setCategory(!category)}
                            className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                        >
                            {category ? 'Show news' : 'Show categories'}


                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                if (category) {
                                    setCatOpen(!catOpen);
                                } else {
                                    setNewsOpen(!newsOpen);
                                }
                            }}
                            className=' my-2 flex rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                        >
                            {category ? 'Create category' : 'Create news'}
                        </button>
                    </div>

                </div>
            </div>
            {category ?
                <CategoryContainer />
                :
                <NewsContainer />
            }
        </>
    );
}

interface category {
    id: number;
    name: string;
    slug: string;
}

const CreateNewsForm = ({ newsOpen, setNewsOpen }: {
    newsOpen: boolean,
    setNewsOpen: (value: React.SetStateAction<boolean>) => void
}) => {
    const dark = useDark();
    const [loading, setLoading] = useState<boolean>(false);
    const {
        data: categories,
        error: error2,
        isLoading: isLoading2,
    } = useSWR(`${config.privateapilink}/categories`, fetcher);

    if (!categories || (error2 || isLoading2)) {
        return (
            <Loading />
        );
    }
    const form = object({
        title: string().required('The title can\'t be empty.'),
        category: number().required('The category can\'t be empty'),
        tags: string().required('The tag can\'t be empty'),
        slug: string().required('The slug can\'t be empty'),
        data: string().required('The data can\'t be empty'),
        pictures: array().of(mixed()).nullable(),
    });

    const formik = useFormik({
        initialValues: { title: '', category: -1, tags: '', slug: '', data: '', pictures: [] },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            const tag = values.tags.split(',');
            createNews(values.title, values.category, tag, values.slug, values.data, values.pictures).then((data) => {
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
        },
    });


    return (
        <Transition.Root show={newsOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={setNewsOpen}>
                <div className='fixed inset-0' />

                <div className='fixed inset-0 overflow-hidden'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
                            <Transition.Child
                                as={Fragment}
                                enter='transform transition ease-in-out duration-500 sm:duration-700'
                                enterFrom='translate-x-full'
                                enterTo='translate-x-0'
                                leave='transform transition ease-in-out duration-500 sm:duration-700'
                                leaveFrom='translate-x-0'
                                leaveTo='translate-x-full'
                            >
                                <Dialog.Panel className='pointer-events-auto w-screen max-w-2xl'>
                                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                                        <div className='px-4 sm:px-6'>
                                            <div className='flex items-start justify-between'>
                                                <Dialog.Title className='text-black font-semibold leading-6'>
                                                    Create news
                                                </Dialog.Title>
                                                <div className='ml-3 flex h-7 items-center'>
                                                    <button
                                                        type='button'
                                                        className='relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                        onClick={() => setNewsOpen(false)}
                                                    >
                                                        <span className='absolute -inset-2.5' />
                                                        <span className='sr-only'>Close panel</span>
                                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
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
                                                            onChange={(e) => formik.setFieldValue('category', e.target ? (e.target as HTMLInputElement).value : '')}
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
const CreateCatForm = ({ catOpen, setCatOpen }: {
    catOpen: boolean,
    setCatOpen: (value: React.SetStateAction<boolean>) => void
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const form = object({
        name: string().required('The name can\'t be empty.'),
        slug: string().required('The slug can\'t be empty'),

    });

    const formik = useFormik({
        initialValues: { name: '', slug: '' },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            createCategory(values.name, values.slug).then((data) => {

                if (data.data.status === 'error') {
                    toast.error(`Error: ${data.data.message}`, {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                    return setLoading(false);
                }
                setCatOpen(false);
                location.reload();
                setLoading(false);
                toast.success('Category created successfully.', {
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
        },
    });
    return (
        <Transition.Root show={catOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={setCatOpen}>
                <div className='fixed inset-0' />

                <div className='fixed inset-0 overflow-hidden'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
                            <Transition.Child
                                as={Fragment}
                                enter='transform transition ease-in-out duration-500 sm:duration-700'
                                enterFrom='translate-x-full'
                                enterTo='translate-x-0'
                                leave='transform transition ease-in-out duration-500 sm:duration-700'
                                leaveFrom='translate-x-0'
                                leaveTo='translate-x-full'
                            >
                                <Dialog.Panel className='pointer-events-auto w-screen max-w-2xl'>
                                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                                        <div className='px-4 sm:px-6'>
                                            <div className='flex items-start justify-between'>
                                                <Dialog.Title
                                                    className='text-black font-semibold leading-6'>
                                                    Create category
                                                </Dialog.Title>
                                                <div className='ml-3 flex h-7 items-center'>
                                                    <button
                                                        type='button'
                                                        className='relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                        onClick={() => setCatOpen(false)}
                                                    >
                                                        <span className='absolute -inset-2.5' />
                                                        <span className='sr-only'>Close panel</span>
                                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                            <h3 className='font-bold text-black text-lg'>Create category:</h3>

                                            <form method='dialog' className='grid grid-cols-2 gap-x-2'
                                                  onSubmit={formik.handleSubmit}>

                                                <div className='w-full max-w-xs'>
                                                    <div>
                                                        <label htmlFor='name'
                                                               className='mt-10 block text-sm font-medium leading-6 text-gray-900'>
                                                            Name
                                                        </label>
                                                    </div>
                                                    <input
                                                        type='text'
                                                        name='name'
                                                        onChange={formik.handleChange}
                                                        id='name'
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
                                                        onChange={formik.handleChange}
                                                        id='slug'
                                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                    />
                                                </div>
                                                <div className='flex gap-x-2 my-2 ml-auto col-span-2'>
                                                    <button
                                                        className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                        type={'submit'}
                                                        disabled={loading}>Create category
                                                    </button>

                                                    <button
                                                        className='flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                        onClick={() => setCatOpen(!catOpen)}
                                                        disabled={loading}>Close
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
    );
};