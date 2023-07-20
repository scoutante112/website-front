import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';
import NavBarAccount from '../NavBarAccount';
import Loading from "../../Elements/Loading";
import { Account } from "../Manager/Forms/EditAccountForm";
import moment from 'moment';
import { toast } from "react-toastify";
import { FaDownload } from "react-icons/fa";
import { config } from "../../../config/config";
import Cookies from "js-cookie";
import Markdown from 'marked-react';
import breaks from 'remark-breaks';
import addMessage from "../../../api/account/tickets/addMessage";
import ConversationRow, { MessagesRequest } from "./ConversationRow";


interface Attachment {
  id: number;
  name: string;
  size: number;
}
const formatSize = (sizeInBytes: number) => {
  const units = ["b", "Kb", "Mb", "Gb", "Tb"];
  let size = sizeInBytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};
export default function TicketViewContainer() {
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  const { data,  error: error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/tickets/${id}/details`,
    fetcher
  );
  const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=true`,
    fetcher
  );
  const { data: data3, error: error3, isLoading: isLoading3 } = useSWR<MessagesRequest>(
    `https://privateapi.bagou450.com/api/client/web/tickets/${id}/messages?page=${page}&perPage=10`,
    fetcher
  );

  const navigation = useNavigate();
  if ((!data || (error || isLoading)) || (!data2 || (error2 || isLoading2)) || (!data3 || (error3 || isLoading3))) {
    return <Loading/>;
  }
  const account: Account = data2.data;
  const totalPage = data3.data!.totalPage;

  document.title = `Bagou450 -  Ticket ${id}`
  return (
    <>
      <NavBarAccount tab={'tickets'}/>
      <section className='mx-8 my-4 grid grid-cols-1 md:grid-cols-4'>

        <div>
        <InfoBlock data={data}/>
        <AttachmentsBlock data={data}/>
          <div>
            {page > 1 &&
              <button className='btn btn-outline btn-secondary mt-2 outline-0' onClick={() => {setPage(page-1); window.scrollTo(0,0);}}>Previous page</button>
            }
            {page < totalPage &&
              <button className='btn btn-outline btn-secondary mt-2 outline-0 float-right' onClick={() => {setPage(page+1); window.scrollTo(0,0);}}>Next page</button>
            }
          </div>
        </div>
        <div className={'mx-4 col-span-3'}>
          <ConversationRow id={data.data.ticket.id} account={account} page={page}/>

        </div>

      </section>
      <section className='min-h-screen'></section>
    </>
  );
}


function InfoBlock({data}: {data: any}) {
  return (
    <div className={'bg-neutral rounded-md'}>
      <h2 className={'text-center text-xl font-bold mt-1 pt-4'} title={data.data.ticket.name}>{data.data.ticket.name[0].toUpperCase()}{(data.data.ticket.name.length > 36 ? data.data.ticket.name.slice(1, 33) + '...' : data.data.ticket.name.slice(1, data.data.ticket.name.length))}</h2>
      <div className="divider"></div>
      <ul className={'ml-5 list-disc'}>
        <li className={'mt-2'}><span className={'font-semibold'}>Status:</span> <span className={data.data.ticket.status === 'closed' ? ' text-red-700' : (data.data.ticket.status === 'support_answer' ? ' text-green-700' : ' text-blue-700')}>{data.data.ticket.status === 'client_answer' ? 'Answered by Client' : data.data.ticket.status === 'support_answer' ? 'Answered by Support' : 'Closed'}</span></li>
        <li className={'mt-2'}><span className={'font-semibold'}>Priority:</span> <span className={data.data.ticket.priority === 'high' ? 'text-red-700' : data.data.ticket.priority === 'low' ? 'text-green-700' : ''}>{data.data.ticket.priority[0].toUpperCase()}{data.data.ticket.priority.slice(1, data.data.ticket.priority.length)}</span></li>
        <li className={'mt-2'}><span className={'font-semibold'}>Logs Url:</span> {data.data.ticket.logs_url && data.data.ticket.logs_url !== '' ? data.data.ticket.logs_url : 'No logs provided'}</li>
        <li className={'mt-2 cursor-copy'} title={data.data.ticket.license} onClick={() => {
          navigator.clipboard.writeText(data.data.ticket.license)
          toast.success(`Copied to clipboard!.`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }}><span className={'font-semibold'}>License/Order:</span> {data.data.ticket.license && data.data.ticket.license !== '' ? (data.data.ticket.license.length > 30 ? data.data.ticket.license.slice(0,31) + '...' : data.data.ticket.license)  : 'No license or order provided'}</li>
        <li className={'mt-2'}><span className={'font-semibold'}>Creation:</span> {new Date(data.data.ticket.created_at).toLocaleDateString("fr-FR")}</li>
        <li className={'mt-2 pb-2'}><span className={'font-semibold'}>Last update:</span> {moment(data.data.ticket.updated_at).fromNow()}</li>
      </ul>
    </div>
  )
}
function AttachmentsBlock({data}: {data: any}) {
  const [loading, setLoading] = useState(false);
  const downloadAttachmentFunction = (id: number, name: string) => {
    setLoading(true);
    fetch(`${config.privateapilink}/tickets/${id}/download`, {headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access_token')}`
      }}).then(response => response.blob()).then(blob => {

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `name`);
      document.body.appendChild(link);
      link.addEventListener('load', () => {
        URL.revokeObjectURL(url);
      });
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      toast.success('Your file is now downloaded!', {
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
    }).catch((e) => {
      toast.error(`Error: ${e}`, {
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
    });
  }
  return (
    <div className={'bg-neutral rounded-md mt-2'}>
      <h2 className={'text-center text-xl font-bold pt-4'}>Attachments</h2>
      <div className="divider"></div>
      {data.data.attachments.length < 1 ?
        <p className={'text-center pb-2'}>No attachments found.</p>
        :
        <ul className={'ml-5 mb-4 list-disc'}>
          {data.data.attachments.map((attachment: Attachment, index: number) => {
            return <li key={index} className={'pb-2 cursor-pointer'} onClick={() => {if(!loading) {downloadAttachmentFunction(attachment.id, attachment.name)}}}><p className={'flex'}><span className={'font-semibold'}>{attachment.name}</span>, {formatSize(attachment.size)} <FaDownload className={'ml-2 mt-1'}/></p></li>;

          })}
        </ul>
      }

    </div>
  )
}


