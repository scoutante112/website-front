import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Product } from './ProductsContainer';
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import { boolean, number, object, string } from "yup";
import { useFormik } from "formik";
import editProduct from "../../../api/admin/products/editProduct";
import { toast } from "react-toastify";
import createProduct from "../../../api/admin/products/createProduct";

export default function NewProductButton({page, perpage, search}: {page: number; perpage: number, search: string}) {
  const [loading, setLoading] = useState(false);
  const {mutate} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);

  const [isLicensed, setLicensed] = useState<boolean>(true);
  const [isNew, setNew] = useState<boolean>(true);
  const [isAutoInstaller, setAutoInstaller] = useState<boolean>(true);
  const [isTab, setTab] = useState<boolean>(false);
  const [isRecurrent, setRecurrent] = useState<boolean>(false);
  const form = object({
    name: string().required(),
    tabroute: string().nullable(),
    version: number().required(),
    sxcname: string().nullable(),
    bbb_id: number().nullable(),
    tag: string().required(),
    description: string().required(),
    link: string().optional(),
    price: number().required(),
  });
  const initialValues = {
    name: '',
    tabroute: '',
    version: 1.0,
    bbb_id: 0,
    tag: '',
    description: '',
    price: 0,
    sxcname: '',
    link: ''
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      setLoading(false);
      createProduct(values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description).then((data) => {
        if (data.data['status'] === 'error') {
          toast.error(data.data['message'], {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false)

        } else {
          mutate();
          toast.success('Success! Product was edited.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false);
          // @ts-ignore
          window.newProductModal.close()
        }
        setLoading(false)
      }).catch((e) => {
        toast.error('An unexcepted error happend. Please contact one of our support team.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false)
      })
    }
  });
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
  const handleQuillChange = (value: any) => {
    formik.setFieldValue('description', value);
  };
  return (
    <>    <dialog id={"newProductModal"} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">New product (Admin):</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className='grid md:grid-cols-4 gap-x-4'>
            <div className={'col-span-2'}><label className="label">
              <span className="label-text">Name</span>
            </label>
              <input id="name"
                     defaultValue={''}
                     name="name"
                     type="name"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.name}</span>
              </label>
            </div>
            <div className={'col-span-2'}><label className="label">
              <span className="label-text">Tag</span>
            </label>
              <input id="tag"
                     defaultValue={''}
                     name="tag"
                     type="tag"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.tag}</span>
              </label>
            </div>
            <div><label className="label">
              <span className="label-text">Version</span>
            </label>
              <input id="version"
                     defaultValue={0}
                     name="version"
                     type="version"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.version}</span>
              </label>
            </div>

            <div><label className="label">
              <span className="label-text">Price</span>
            </label>
              <input id="price"
                     defaultValue={0}
                     name="price"
                     type="price"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.price}</span>
              </label>
            </div>

            <div><label className="label">
              <span className="label-text">SxcName</span>
            </label>
              <input id="sxcname"
                     defaultValue={''}
                     name="sxcname"
                     type="sxcname"
                     onChange={formik.handleChange}
                     disabled={loading}
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.sxcname}</span>
              </label>
            </div>
            <div><label className="label">
              <span className="label-text">BBB Id</span>
            </label>
              <input id="bbb_id"
                     defaultValue={''}
                     name="bbb_id"
                     type="bbb_id"
                     onChange={formik.handleChange}
                     disabled={loading}
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.bbb_id}</span>
              </label>
            </div>
          </div>

          <div className={'my-2'}><label className="label">
            <span className="label-text" onClick={() => navigator.clipboard.writeText('[{"name":"ssx","link":""},{"name":"pm","link":""},{"name":"bbb","link":""}]')}>Link</span>
          </label>
            <input id="link"
                   defaultValue={''}
                   name="link"
                   type="link"
                   onChange={formik.handleChange}
                   disabled={loading}
                   className="input input-bordered w-full" />
            <label className="label">
              <span className='text-red-500'>{formik.errors.link}</span>
            </label>
          </div>

          <div className={'grid md:grid-cols-4'}>
            <div><label className="label">
              <span className="label-text">Licensed</span>
            </label>
              <input id="licensed"
                     defaultChecked={isLicensed}
                     name="licensed"
                     type="checkbox"
                     onChange={() => setLicensed(!isLicensed)}
                     disabled={loading}
                     className="toggle " />
            </div>
            <div><label className="label">
              <span className="label-text">New</span>
            </label>
              <input id="new"
                     defaultChecked={isNew}
                     name="new"
                     type="checkbox"
                     onChange={() => setNew(!isNew)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">AutoInstaller</span>
            </label>
              <input id="autoinstaller"
                     defaultChecked={isAutoInstaller}
                     name="autoinstaller"
                     type="checkbox"
                     onChange={() => setAutoInstaller(!isAutoInstaller)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">Recurrent</span>
            </label>
              <input id="recurrent"
                     defaultChecked={isRecurrent}
                     name="recurrent"
                     type="checkbox"
                     onChange={() => setRecurrent(!isRecurrent)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">Tab</span>
            </label>
              <input id="tab"
                     defaultChecked={isTab}
                     name="tab"
                     type="checkbox"
                     onChange={() => setTab(!isTab)}
                     disabled={loading}
                     className="toggle" />
            </div>
            {isTab ?
              <div className={'col-span-3'}><label className="label">
                <span className="label-text">Tab Route</span>
              </label>
                <input id="tabroute"
                       defaultValue={''}
                       name="tabroute"
                       type="tabroute"
                       onChange={formik.handleChange}
                       disabled={loading}
                       className="input input-bordered w-full" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.tabroute}</span>
                </label>
              </div>
              : <></>}
          </div>

          <ReactQuill
            value={formik.values.description}
            onChange={handleQuillChange}
            modules={modules}
            className={'custom-toolbar mt-2'}
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
          <div className='flex justify-end col-span-2 mx-4 mt-4'>
            <button type='submit' disabled={loading || !formik.errors} className='btn btn-primary btn-outline outline-0 self-end mx-4'>Submit</button>
            <button type="button" className="btn" onClick={() => { // @ts-ignore
              window.newProductModal.close()}}>Close</button>
          </div>
        </form>
      </div>
    </dialog>
      <button className={'btn btn-primary btn-outline outline-0'} onClick={() => { // @ts-ignore
        window.newProductModal.showModal()}}>New product</button>
    </>
  )
}