import React, { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const { id } = useParams();

  const { data, mutate, error: error3, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/tickets/${id}/details`,
    fetcher
  );
  const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=true`,
    fetcher
  );

  const navigation = useNavigate();
  if ((!data || (error3 || isLoading)) || (!data2 || (error2 || isLoading2))) {
    return <Loading/>;
  }
  const account: Account = data2.data;
  if (!data['status']) {
    if(data['message'] === 'Unauthenticated.') {
      navigation('/login');
      window.location.reload()
    }
    mutate();
    return <Loading/>;
  }
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
  document.title = `Bagou450 -  Ticket ${id}`
  return (
    <>
      <h1 className='text-4xl my-4 text-center'>Hello, {!account.name ? 'User' : account.name[0].toUpperCase() + account.name.slice(1, account.name.length)}</h1>
      <NavBarAccount tab={'tickets'}/>
      <section className='mx-8 my-4 grid grid-cols-1 md:grid-cols-4'>

        <div>
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
        </div>
        <div className={'mx-4 col-span-3'}>
          <Conversation id={data.data.ticket.id}/>
        </div>
      </section>
      <section className='min-h-screen'></section>
    </>
  );
}

interface Message {
  message: string;
  first_name: string;
  last_name: string;
  created_at: string;
  discord_user_id: number;
  own: boolean;
  role: boolean
}

interface MessagesData {
  page: number;
  totalpage: number;
  perPage: number;
  messages: Message[];

}
interface MessagesRequest {
  status: string;
  message?: string;
  data?: MessagesData
}
function Conversation({id}: {id: number}) {
  const [page, setPage] = useState<number>(1);
  const { data, error, mutate, isLoading } = useSWR<MessagesRequest>(
    `https://privateapi.bagou450.com/api/client/web/tickets/${id}/messages?page=${page}&perPage=10`,
    fetcher
  );

  const navigation = useNavigate();
  if (!data || (error || isLoading)) {
    return <Loading/>;
  }
  if (!data['status']) {
    if(data['message'] === 'Unauthenticated.') {
      navigation('/login');
      window.location.reload()
    }
    return <Loading/>;
  }
  if(!data.data) {
    return <Loading/>;
  }
  console.log(data.data)
  return (
    data.data.messages.map((message: Message, index: number) => {
      return (
          <div className={message.own ? "chat chat-end" : "chat chat-start"}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={`https://ui-avatars.com/api/?background=042049&color=5271ff&name=${message.first_name[0]}${message.last_name[0]}`} />
            </div>
          </div>
          <div className="chat-header">
            {message.role ? <div className="badge badge-primary mx-1 badge-sm">Support</div> : <></>} {message.first_name} {message.last_name}
            <time className="text-xs opacity-50 mx-1">{moment(message.created_at).fromNow()}</time>
          </div>
            <div className="chat-bubble break-words"><Markdown breaks={true} openLinksInNewTab={true}>{message.message}</Markdown></div>
          </div>
      );
    })
  )
}
