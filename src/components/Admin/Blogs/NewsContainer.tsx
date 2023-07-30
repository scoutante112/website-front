import React, { useEffect, useState } from "react";
import NavBarAccount from "../../Account/NavBarAccount";
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import Loading from "../../Elements/Loading";
import { array, mixed, number, object, string } from "yup";
import { useFormik } from "formik";
import createCategory from "../../../api/admin/blogs/createCategory";
import { toast } from "react-toastify";
import createNews from "../../../api/admin/blogs/createNews";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './toolBar.scss';
import deleteCategory from "../../../api/admin/blogs/deleteCategory";
import editCategory from "../../../api/admin/blogs/editCategory";
import deleteNews from "../../../api/admin/blogs/deleteNews";
import editNews from "../../../api/admin/blogs/editNews";


interface categorie {
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
const modules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  },

  clipboard: {
    matchVisual: false
  }
};

export default function NewsContainer() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [page, setPage] = useState<string>('1');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorformik, setError] = useState<string>();

  const {data: blogs, error, mutate, isLoading} = useSWR(`${config.privateapilink}/blogs?search${search}&category=${category}&${page}`, fetcher)
  const {data: categories, error: error2, isLoading: isLoading2} = useSWR(`${config.privateapilink}/categories`, fetcher)
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
      if(values.category === -1) {
        setError('Error: Need to select a category')
      }
      setLoading(true)
      setError('')
      const tag = values.tags.split(',');
      createNews(values.title, values.category, tag, values.slug, values.data, values.pictures).then((data) => {
        console.log(data)
        if(data.status !== 'success') {
          setError(`Error: ${data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window.createNewsModal.close();
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
        toast.success(`News created successfully.`, {
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
  const handleQuillChange = (value: any) => {
    formik.setFieldValue('data', value); // Mettre à jour la valeur de l'éditeur de texte dans Formik
  };

  if((!blogs || (error || isLoading)) || (!categories || (error2 || isLoading2))) {
    return (
      <Loading/>
    )
  }
  return (
    <section className={'mx-8 my-4'}>
      <dialog id="createNewsModal" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl" onSubmit={formik.handleSubmit}>
          <h3 className="font-bold text-lg">Create category:</h3>
          {errorformik &&
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{errorformik}</span>
            </div>
          }
          <div className={'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="title" id='title' name="title" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Slug</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="slug" id='slug' name="slug" className="input input-bordered w-full max-w-xs" />
          </div>
          </div>
          <div className={'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Tag (comma separated)</span>
            </label>
            <input type="text" onChange={formik.handleChange} placeholder="tags" id='tags' name="tags" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>

          <select className="select select-bordered w-full max-w-xs " onChange={(e) => formik.setFieldValue('category', e.target.value)}>
            <option disabled selected>Select category</option>
            {categories.data.map((categorie: categorie, index: number) => {
              return   <option key={index} value={categorie.id}>{categorie.name}</option>;
            })}
          </select>
        </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Picture</span>
              </label>

              <input type="file" className="file-input file-input-bordered w-full max-w-xs" multiple onChange={(e) => {
                const files = Array.from(e.target.files ? e.target.files : []);
                formik.setFieldValue('pictures', files);
              }}/>
            </div>
          </div>

        <ReactQuill
            value={formik.values.data}
            onChange={handleQuillChange}
            modules={modules}
            className={'h-1/4 custom-toolbar'}
            formats={[
              'header',
              'bold', 'italic', 'underline', 'strike',
              'blockquote', 'code-block',
              'list', 'bullet',
              'script',
              'indent',
              'direction',
              'size',
              'color', 'background',
              'font',
              'align',
              'link', 'image', 'video'
            ]}
          />
          <div className="modal-action">
            <button className="btn btn-secondary mx-2" type={'submit'} disabled={loading}>Create category</button>

            <button className="btn" onClick={() => {
              // @ts-ignore
              window.createNewsModal.close();
            }} disabled={loading}>Close</button>


          </div>
        </form>
      </dialog>
      <h2 className={'text-center my-4 text-xl'}>News</h2>
      <div className="w-full max-w-7xl mx-auto mb-2 grid grid-cols-3 md:grid-cols-5 gap-x-2">
        <input type="text" placeholder="Search" className="input input-bordered w-full md:col-span-3" />
      <select className="select select-bordered w-full max-w-xs " onChange={(e) => setCategory(e.target.value)}>
        <option disabled selected>Select category</option>
        {categories.data.map((categorie: categorie, index: number) => {
          return   <option key={index} value={categorie.id}>{categorie.name}</option>;
        })}
      </select>
        <p className={'btn btn-primary btn-outline'} onClick={() =>
          //@ts-ignore
          window.createNewsModal.showModal()}>New Blog</p>

      </div>


      <div className="overflow-x-auto">
        <table className="table">
      {/* head */}
          <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Slug</th>
            <th>Category</th>
            <th>Pictures</th>
            <th>Views</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {blogs.data.map((blog: blog, index: number) => {

            return <BlogRow blog={blog} key={index} categories={categories}/>;
          })}
          </tbody>
        </table>
      </div>
    </section>
  )
}


function BlogRow({blog, categories}: {blog: blog, categories: any}) {

  const [errorformik, setError] = useState<string>('');
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
    initialValues: { title: blog.title, category: blog.category_id, tags: blog.tags, slug: blog.slug, data: blog.content, pictures: [] },
    validationSchema: form,
    onSubmit: (values) => {
      if(values.category === -1) {
        setError('Error: Need to select a category')
      }
      console.log(values)
      setLoading(true)
      setError('')
      const tag = values.tags.split(',');
      editNews(blog.id, values.title, values.category, tag, values.slug, values.data, values.pictures).then((data) => {
        console.log(data)
        if(data.status !== 'success') {
          setError(`Error: ${data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window[theId].close();
        const inputs = document.querySelectorAll('input:not(#search)');
        const textareas = document.querySelectorAll('textarea');

        inputs.forEach((input: any) => {
          input.value = '';
        });
        textareas.forEach((textarea) => {
          textarea.value = '';
        });
        setLoading(false)
        toast.success(`News created successfully.`, {
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
  const handleQuillChange = (value: any) => {
    formik.setFieldValue('data', value);
  };

  const theId = `editCateModal-${blog.title}`;
  return (
    <tr className="hover">

      <th>{blog.id}</th>
      <td>{blog.title}</td>
      <td>{blog.author}</td>
      <td>{blog.slug}</td>
      <td>{blog.category_id}</td>
      <td><ul className={"list-disc"}>{JSON.parse(blog.pictures).map((picture: string, index: number) => {
        return <li key={index} className={'hover:text-blue-600'} onClick={() => window.open(`https://api.bagou450.com${picture}`, '_blank')}>{picture}</li>;
      })}</ul></td>
      <td>{blog.views}</td>
      <td><div className={'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'}>
        <dialog id={theId} className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl" onSubmit={formik.handleSubmit}>
            <h3 className="font-bold text-lg">Edit category:</h3>
            {errorformik &&
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{errorformik}</span>
              </div>
            }
            <div className={'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" defaultValue={blog.title} onChange={formik.handleChange} placeholder="title" id='title' name="title" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Slug</span>
                </label>
                <input type="text" defaultValue={blog.slug} onChange={formik.handleChange} placeholder="slug" id='slug' name="slug" className="input input-bordered w-full max-w-xs" />
              </div>
            </div>
            <div className={'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Tag (comma separated)</span>
                </label>
                <input type="text" defaultValue={JSON.parse(blog.tags).join(',')} onChange={formik.handleChange} placeholder="tags" id='tags' name="tags" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>

                <select className="select select-bordered w-full max-w-xs " defaultValue={blog.category_id} onChange={(e) => formik.setFieldValue('category', e.target.value)}>
                  <option disabled selected>Select category</option>
                  {categories.data.map((categorie: categorie, index: number) => {
                    return   <option key={index} value={categorie.id}>{categorie.name}</option>;
                  })}
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Picture</span>
                </label>

                <input type="file" className="file-input file-input-bordered w-full max-w-xs" multiple onChange={(e) => {
                  const files = Array.from(e.target.files ? e.target.files : []);
                  formik.setFieldValue('pictures', files);
                }}/>
              </div>
            </div>

            <ReactQuill
              value={formik.values.data}
              onChange={handleQuillChange}
              modules={modules}
              className={'h-1/4 custom-toolbar'}
              formats={[
                'header',
                'bold', 'italic', 'underline', 'strike',
                'blockquote', 'code-block',
                'list', 'bullet',
                'script',
                'indent',
                'direction',
                'size',
                'color', 'background',
                'font',
                'align',
                'link', 'image', 'video'
              ]}
            />
            <div className="modal-action">
              <button className="btn btn-secondary mx-2" type={'submit'} disabled={loading}>Edit category</button>

              <button className="btn" onClick={() => {
                // @ts-ignore
                window[theId].close();
              }} disabled={loading}>Close</button>


            </div>
          </form>
        </dialog>
        <button className={'btn btn-secondary btn-outline border-0'} onClick={() =>
          // @ts-ignore
          window[theId].showModal()}>Edit</button>
        <button className={'btn btn-error mx-4 my-4 md:my-0'} onClick={() =>{
          // @ts-ignore
          deleteNews(blog.id);}}>Remove</button>
      </div></td>

    </tr>


  )
}