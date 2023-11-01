import React, { Fragment, useState } from 'react';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import editCategory from '../../../api/admin/blogs/editCategory';
import deleteCategory from '../../../api/admin/blogs/deleteCategory';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { clearFields } from '../../../utils/Function';

interface category {
  id: number;
  name: string;
  slug: string;
}
export default function CategoryContainer() {
    const {data: categories, error, mutate, isLoading} = useSWR(`${config.privateapilink}/categories`, fetcher);

    if((!categories || (error || isLoading))) {
        return (
            <Loading/>
        );
    }

    return (
        <section className={'mx-8 my-4'}>
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
                  Name
                            </th>

                            <th
                                scope='col'
                                className=' px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell'
                            >
                  Slug
                            </th>
                            <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                                <span className='sr-only'>Select</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.map((category: category, index: number) => {
                            return <CategoryRow category={category} key={index} mutate={mutate} />;
                        })}
                    </tbody>
                </table>
            </div>


        
        </section>
    );
}

function CategoryRow({ category, mutate }: { category: category, mutate: any }) {

    const [loading, setLoading] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const form = object({
        name: string().required('The name can\'t be empty.'),
        slug: string().required('The slug can\'t be empty'),

    });
    const removeCat = () => {
        setLoading(true);
        deleteCategory(category.id).then((data) => {
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
                setLoading(false);
                return null;
            }
            setLoading(false);
            toast.success('Category removed successfully.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });
            return mutate();
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
    };
    const formik = useFormik({
        initialValues: { name: '', slug: '' },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            editCategory(category.id, values.name, values.slug).then((data) => {

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
                    setLoading(false);
                    return null;
                }
                setEdit(false);
                clearFields();
                setLoading(false);
                toast.success('Category edited successfully.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                return mutate();

                
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
        <>
            <Transition.Root show={edit} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setEdit}>
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
                                                            onClick={() => setEdit(false)}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                                <h3 className='font-bold text-black text-lg'>Edit category:</h3>

                                                <form method='dialog' className='modal-box'
                                                    onSubmit={formik.handleSubmit}>
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
                                                            defaultValue={category.name}
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
                                                            defaultValue={category.slug}
                                                            onChange={formik.handleChange}
                                                            id='slug'
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                    <div className='col-span-2 flex ml-auto my-2'>
                                                        <button
                                                            className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                            type={'submit'}
                                                            disabled={loading}>Edit category
                                                        </button>

                                                        <button
                                                            className='mx-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'

                                                            onClick={() => {
                                                                setEdit(false);
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


            <tr className='hover'>
                <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{category.id}</td>
                <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{category.name}</td>
                <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{category.slug}</td>

                <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'
                >
                    <div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>

                        <button
                            className='flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                            onClick={() =>
                                setEdit(!edit)}>Edit
                        </button>
                        <br />
                        <button
                            className=' my-2 flex rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative'
                            onClick={() => removeCat()}>Remove
                        </button>
                    </div>
                </td>

            </tr>
        </>

    );
}