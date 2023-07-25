import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../api/http";
import addMessage from "../../../api/account/tickets/addMessage";
import { toast } from "react-toastify";
import Loading from "../../Elements/Loading";
import moment from "moment/moment";
import Markdown from "marked-react";
import { Account } from "../Manager/Forms/EditAccountForm";
import { bool } from "yup";

export interface Message {
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
  totalPage: number;
  perPage: number;
  messages: Message[];

}
export interface MessagesRequest {
  status: string;
  message?: string;
  data?: MessagesData
}

  export default function ConversationRow({id,account,page, open}: {id: string, account: Account, page: number, open: boolean}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const {data, error, isLoading, mutate } = useSWR<MessagesRequest>(
    `https://privateapi.bagou450.com/api/client/web/tickets/${id}/messages?page=${page}&perPage=10`,
    fetcher
  );
  if (!data || (error || isLoading)) {
    return <Loading/>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!id) {
      return;
    }
    console.log(message);
    addMessage(id, message, account, []).then((data) => {
      data = data.data;
      setLoading(false);
      mutate();

      if(data['status'] === 'success') {

        return toast.success(`Your message had been sent`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      toast.error(`Error: ${data['message']}`, {
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
  };

  if(!data.data) {
    return <Loading/>;
  }
  return (
    <div>
      {data.data.messages.map((message: Message, index: number) => {
        return (

          <div key={index} className={message.own ? "chat chat-end" : "chat chat-start"}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={`https://ui-avatars.com/api/?background=042049&color=5271ff&name=${message.first_name[0]}${message.last_name[0]}`} />
              </div>
            </div>
            <div className="chat-header">
              {message.role ? <div className="badge badge-primary mx-1 badge-sm">Support</div> : <></>} {message.first_name} {message.last_name}
              <time className="text-xs opacity-50 mx-1">{moment(message.created_at).fromNow()}</time>
            </div>
            <div className="chat-bubble break-words"><Markdown breaks={true} openLinksInNewTab={true}>{message.message.replaceAll(/\n\n/g, '\n \n')}</Markdown></div>
          </div>

        );
      })}
      {data.data.totalPage === page && open &&
        <div className={'mt-4 mx-4'}>

          <form onSubmit={handleSubmit}>

            <textarea placeholder="New message" className={loading ? "textarea textarea-bordered textarea-lg w-full" : "textarea textarea-bordered textarea-lg w-full disabled"} name={'message'} disabled={loading} onChange={handleChange}></textarea>
            <button className="mt-2 outline-0 float-right btn btn-outline btn-primary" type={'submit'} disabled={loading}>Send message</button>
          </form>
        </div>
      }

    </div>
  )
}