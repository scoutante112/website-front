import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useSWR from "swr";
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';

import NavBarAccount from '../NavBarAccount';
import Loading from "../../Elements/Loading";
import { Account } from "../Manager/Forms/EditAccountForm";
import moment from 'moment';
import { debounce } from "debounce";
import { useFormik } from "formik";
import { array, mixed, object, string } from "yup";
import createTicket from "../../../api/account/tickets/createTicket";
import { toast } from "react-toastify";
import { FaXmark } from "react-icons/fa6";
import { config } from "../../../config/config";

interface Ticket {
  created_at: string;
  discord_id: string;
  discord_user_id: string;
  id: number;
  license: string;
  logs_url: string;
  name: string;
  priority: string;
  status: string;
  updated_at: string;
  user_id: number;
}
export default function TicketContainer() {
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<string>('status');
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [licenseChecked, setLicenseChecked] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const form = object({
    subject: string().required('The subject can\'t be empty.').min(16, 'The subject should have a minimum length of 16 characters').max(64, 'The subject should have a maximum length of 64 characters.'),
    message: string().required('The message can\'t be empty').min(64, 'The message should have a minimum length of 64 characters'),
    license: string().nullable(),
    attachments: array().of(mixed()).nullable(),
    logs_url: string().nullable('').url('Logs need to be a url!')
  });

  const formik = useFormik({
    initialValues: { subject: '', message: '', attachments: [], license: '', logs_url: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      values.attachments.map((file: any) => {
        setError('');
        if(file.size > 8388608) {
          setError('Error: File size should be less than 8MB');
          setLoading(false);
          return null;
        }
        return null;
      })
      createTicket(values.subject, values.message, account, values.license, values.attachments, values.logs_url).then((data) => {

        if(data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
        setIsChecked(false);
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
        toast.success(`Ticket created successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
      }).catch((e) => {

        setError(`Error: ${e.response.data.message}`);
        setLoading(false);

      });
    }
  });
  const { data, mutate, error: error3, isLoading } = useSWR(
    `${config.privateapilink}/tickets?sort=${sort}&page=${page}&search=${search}`,
    fetcher
  );
  const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
    `${config.privateapilink}/auth/isLogged?infos=true`,
    fetcher
  );
  if ((!data || (error3 || isLoading)) || (!data2 || (error2 || isLoading2))) {

    if(data2) {
      return (
        <>
          <NavBarAccount tab={'tickets'}/>
          <section className='mx-8 my-4'>

            <div >
              <div className="w-full max-w-7xl mx-auto mb-2 grid grid-cols-3 md:grid-cols-5 gap-x-2">
                <input type="text" placeholder="Search here" className="input input-bordered input-md w-full col-span-3" defaultValue={search} onChange={(e) => searchValue(e.target.value)}/>
                <select className="select select-bordered w-full max-w-xs" onChange={(e) => setSort(e.target.value)}>
                  <option value="status" selected>Status</option>
                  <option value="asc_modified">Modified (Ascending)</option>
                  <option value="desc_modified">Modified (Descending)</option>
                  <option value="asc_created">Created (Ascending)</option>
                  <option value="desc_created">Created (Descending)</option>
                </select>
                <p className={'btn btn-primary btn-outline'}>New ticket</p>
              </div>
              <Loading/>

            </div>
          </section>
          <section className='min-h-screen'></section>
        </>

      );

    }
    return <Loading/>;
  }
  const account: Account = data2.data;


  document.title = 'Bagou450 - My Tickets'
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
  }, 500)
  return (
    <>
      <NavBarAccount tab={'tickets'}/>
      <section className='mx-8 my-4'>
        <input type="checkbox" id="new" className="modal-toggle" checked={isChecked}/>
        <dialog id="new" className="modal modal-bottom sm:modal-middle">
          <form onSubmit={formik.handleSubmit} method="dialog" className="modal-box">
            <div className={'flex'}>
            <h3 className="font-bold text-lg">Create new ticket</h3>
              <FaXmark className={`ml-auto text-xl transition-colors duration-200 mt-1 ${isHovered ? 'text-red-700' : ''}`}
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}
                       onClick={() => setIsChecked(false)}
              />
            </div>
            {error &&
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            }
            <div><label className="label">
              <span className="label-text">Subject</span>

            </label>
              <input id="subject"
                     name="subject"
                     type="subject"
                     onChange={formik.handleChange}
                     disabled={loading}
                     className="input input-bordered w-full  mx-2" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.subject}</span>
              </label>
            </div>
            <div><label className="label">
              <span className="label-text">Message</span>

            </label>
              <textarea
                placeholder="Hello..."
                className="textarea textarea-bordered textarea-lg w-full mx-2"
                id="message"
                name="message"
                onChange={formik.handleChange}
                disabled={loading}
              ></textarea>
              <label className="label">
                <span className='text-red-500'>{formik.errors.message}</span>
              </label>
            </div>
            <div className={`grid grid-cols-2 gap-x-2`}>
              <div>
                <label className="label">
                  <span className="label-text">License/Order <div className="badge badge-neutral my-auto ml-2">Optional</div></span>

                </label>
                <input id="license"
                       name="license"
                       type="license"
                       onChange={formik.handleChange}
                       disabled={loading}
                       className="input input-bordered w-full  mx-2" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.license}</span>
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Logs Url <div className="badge badge-neutral my-auto ml-2">Optional</div></span>

                </label>
                <input id="logs_url"
                       name="logs_url"
                       type="logs_url"
                       onChange={formik.handleChange}
                       disabled={loading}
                       className="input input-bordered w-full  mx-2" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.logs_url}</span>
                </label>
              </div>
            </div>
            <div>
              <div>
                <label className="label">
                  <span className="label-text">Files <div className="badge badge-neutral my-auto ml-2">Optional</div></span>

                </label>
                <input type="file" className="file-input file-input-bordered w-full mx-2" multiple onChange={(e) => {
                  const files = Array.from(e.target.files ? e.target.files : []);
                  formik.setFieldValue('attachments', files);
                }}/>

              </div>
            </div>
            {!formik.values.logs_url &&
              <label className="cursor-pointer label mt-2">
                <span className="label-text">I acknowledge that not providing logs may limit the assistance<br/>I receive in most cases.</span>
                <input type="checkbox" checked={checked} className="checkbox checkbox-secondary" onClick={() => setChecked(!checked)}/>
              </label>
            }
            {!formik.values.license &&
              <label className="cursor-pointer label mt-2">
                <span className="label-text">I acknowledge that not providing order/license may limit the assistance I receive in most cases.</span>
                <input type="checkbox" checked={licenseChecked} className="checkbox checkbox-secondary" onClick={() => setLicenseChecked(!licenseChecked)}/>
              </label>
            }
            <div className="modal-action">
              <button className="btn btn-primary btn-outline mx-2 border-0" type='submit' disabled={loading || !formik.dirty || !formik.isValid || (!formik.values.logs_url && !checked) || (!formik.values.license && !licenseChecked)}>Create Ticket</button>
            </div>
          </form>
        </dialog>
        <div >
          <div className="w-full max-w-7xl mx-auto mb-2 grid grid-cols-3 md:grid-cols-5 gap-x-2">
            <input type="text" id={'search'} defaultValue={search} placeholder="Search here" className={`input input-bordered input-md w-full col-span-3 ${data.data.data.length < 1 ? 'disabled' : ''}`} onChange={(e) => searchValue(e.target.value)}/>
            <select className="select select-bordered w-full col-span-2 mt-2 md:col-span-1 md:max-w-xs md:mt-0" onChange={(e) => setSort(e.target.value)}>
              <option value="status" selected>Status</option>
              <option value="asc_modified">Modified (Ascending)</option>
              <option value="desc_modified">Modified (Descending)</option>
              <option value="asc_created">Created (Ascending)</option>
              <option value="desc_created">Created (Descending)</option>
            </select>
            <p className={'btn btn-primary btn-outline mt-2 md:mt-0'} onClick={() => {
              setIsChecked(true);
            }}>New ticket</p>
          </div>
          {data.data.data.length > 0 ?
          <>
          <table className="table w-full sm:table-xs md:table-sm lg:table-md max-w-screen-sm md:max-w-7xl mx-auto border-neutral-content dark:border-neutral border-2">
            {/* head */}
            <thead>

              <tr className='w-full'>
                <th className={'hidden xl:block'}>Id</th>
                <th>Name</th>
                <th>Priority</th>
                <th className={'hidden xl:block'}>Status</th>
                <th>Last Update</th>
                <th className={'hidden md:table-column'}></th>

              </tr>
            </thead>
            <tbody>
            {data.data.data.map((ticket: Ticket, key: React.Key | null | undefined) => {
              return (

                <tr className={`w-full ${window.innerWidth < 768 ? 'cursor-pointer' : ''}`}
              key={key}
              onClick={window.innerWidth < 768 ? () => navigate(`/account/ticket/${ticket.id}`) : () => null}
            >
                  <th className={'hidden xl:table-cell'}>{ticket.id}</th>
                  <th>{ticket.name}</th>
                  <th className={ticket.priority === 'high' ? 'text-red-700' : ticket.priority === 'low' ? 'text-green-700' : ''}>{ticket.priority[0].toUpperCase()}{ticket.priority.slice(1, ticket.priority.length)}</th>
                  <td className={'hidden xl:table-cell' + (ticket.status === 'closed' ? ' text-red-700' : (ticket.status === 'support_answer' ? ' text-green-700' : ' text-blue-700'))}>{ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client'}</td>
                  <td>{moment(ticket.updated_at).fromNow()}</td>
              {window.innerWidth >= 768 ? (
                <NavLink to={`/account/ticket/${ticket.id}`} className={'hidden md:table-cell'}><td className={'btn btn-primary btn-outline my-4'}>View</td></NavLink>
              ) : null}

                </tr>
              )
            })}


            </tbody>
          </table>
        </>
            :
            <p className={'text-center opacity-80'}>No tickets matching these parameters were found for this account.</p>
          }
          <div className={'flex w-full max-w-7xl mx-auto'}>
            {page > 1 &&
              <p className={'btn btn-primary btn-outline my-4 '} onClick={() => {window.scrollTo(0, 0); setPage(page - 1);}}>Previous page</p>
            }
            {page < data.data.last_page &&
              <p className={'btn btn-primary btn-outline my-4 text-right ml-auto'} onClick={() => {window.scrollTo(0, 0); setPage(page + 1);}}>Next page</p>
            }
          </div>
        </div>
      </section>
      <section className='min-h-screen'></section>
    </>
  );
}
