import React, { useState } from "react";
import NavBarAccount from "../../NavBarAccount";
import useSWR from "swr";
import { config } from "../../../../config/config";
import { fetcher } from "../../../../api/http";
import Loading from "../../../Elements/Loading";
import { array, mixed, object, string } from "yup";
import { useFormik } from "formik";
import createTicket from "../../../../api/account/tickets/createTicket";
import { toast } from "react-toastify";
import createCategory from "../../../../api/admin/blogs/createCategory";
import editCategory from "../../../../api/admin/blogs/editCategory";
import deleteCategory from "../../../../api/admin/blogs/deleteCategory";

interface categorie {
  id: number;
  name: string;
  slug: string;
};
export default function CategoryContainer() {
  const {data: categories, error, mutate, isLoading} = useSWR(`${config.privateapilink}/categories`, fetcher)
  const [errorformik, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const form = object({
    name: string().required('The name can\'t be empty.'),
    slug: string().required('The slug can\'t be empty'),

  });

  const formik = useFormik({
    initialValues: { name: '', slug: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      setError('')
      createCategory(values.name, values.slug).then((data) => {

        if(data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window.createCateModal.close();
        mutate();
        const inputs = document.querySelectorAll('input:not(#search)');
        const textareas = document.querySelectorAll('textarea');

        inputs.forEach((input: any) => {
          input.value = '';
        });
        textareas.forEach((textarea) => {
          textarea.value = '';
        });
        setLoading(false)
        toast.success(`Category created successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }).catch((e) => {
        setError(`Error: ${e}`);
        setLoading(false);

      });
    }
  });
  if((!categories || (error || isLoading))) {
    return (
      <Loading/>
    )
  }

  return (
    <section className={'mx-8 my-4'}>
      <h2 className={'text-xl text-center'}>Categories</h2>
      <dialog id="createCateModal" className="modal">
        <form method="dialog" className="modal-box" onSubmit={formik.handleSubmit}>
          <h3 className="font-bold text-lg">Create category:</h3>
          {errorformik &&
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{errorformik}</span>
            </div>
          }
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="name" id='name' name="name" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Slug</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="slug" id='slug' name="slug" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="modal-action">
            <button className="btn btn-secondary mx-2" type={'submit'} disabled={loading}>Create category</button>

            <button className="btn" onClick={() => {
              // @ts-ignore
              window.createCateModal.close();
            }} disabled={loading}>Close</button>


          </div>
        </form>
      </dialog>
      <div className="flex w-full mb-4">
        {/* Page content here */}
        <label className="btn btn-primary ml-auto" onClick={() => {
          // @ts-ignore
          window.createCateModal.showModal();
        }}>Create new</label>
      </div>
      {categories.data.map((categorie: categorie, index: number) => {
        return <CategoryRow categorie={categorie} key={index}/>;
      })}
    </section>
  )
}

function CategoryRow({categorie}: {categorie: categorie}) {
  const {mutate} = useSWR(`${config.privateapilink}/categories`, fetcher)

  const [errorformik, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const form = object({
    name: string().required('The name can\'t be empty.'),
    slug: string().required('The slug can\'t be empty'),

  });
  const removeCat = () => {
    setLoading(true);
    deleteCategory(categorie.id).then((data) => {
      if(data.data.status === 'error') {
        setError(`Error: ${data.data.message}`);
        setLoading(false);
        return null;
      }
      setLoading(false)
      toast.success(`Category removed successfully.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      mutate();
    }).catch((e) => {
        setError(`Error: ${e}`);
        setLoading(false);
    })
  }
  const formik = useFormik({
    initialValues: { name: '', slug: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      setError('')
      editCategory(categorie.id, values.name, values.slug).then((data) => {

        if(data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window[theId].close()
        mutate();
        const inputs = document.querySelectorAll('input:not(#search)');
        const textareas = document.querySelectorAll('textarea');

        inputs.forEach((input: any) => {
          input.value = '';
        });
        textareas.forEach((textarea) => {
          textarea.value = '';
        });
        setLoading(false)
        toast.success(`Category edited successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }).catch((e) => {
        setError(`Error: ${e}`);
        setLoading(false);

      });
    }
  });
  const theId = `editCateModal-${categorie.name}`;

  return (
    <div className="grid card bg-neutral-800 rounded-box place-items-center grid grid-cols-1 md:grid-cols-3 my-2 py-8 gap-y-8">
      <dialog id={theId} className="modal">
        <form method="dialog" className="modal-box" onSubmit={formik.handleSubmit}>
          <h3 className="font-bold text-lg">Edit category:</h3>
          {errorformik &&
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{errorformik}</span>
            </div>
          }
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="name" id='name' name="name" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Slug</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="slug" id='slug' name="slug" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="modal-action">
            <button className="btn btn-secondary mx-2" type={'submit'} disabled={loading}>Edit category</button>

            <button className="btn" onClick={() => {
              // @ts-ignore
              window[theId].close()
            }} disabled={loading}>Close</button>


          </div>
        </form>
      </dialog>
      <div className={'mx-2'}>
        <p className={'text-left'}>Name:</p>
        <p className={'text-left'}>{categorie.name}</p>
      </div>
      <div className={'mx-2'}>
        <p className={'text-left'}>Slug:</p>
        <p className={'text-left'}>{categorie.slug}</p>
      </div>
      <div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>
        <button className={'btn btn-secondary btn-outline border-0'} onClick={() =>
          // @ts-ignore
          window[theId].showModal()}>Edit</button>
        <button className={'btn btn-error mx-4 my-4 md:my-0'} onClick={() =>
          // @ts-ignore
          removeCat()}>Remove</button>
      </div>
    </div>

  )
}