import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../api/http';
import addMessage from '../../../api/account/tickets/addMessage';
import { toast } from 'react-toastify';
import Loading from '../../Elements/Loading';
import moment from 'moment/moment';
import Markdown from 'marked-react';
import { Account } from '../Manager/Forms/EditAccountForm';
import { config } from '../../../config/config';
import { useDark } from '../../../App';

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
    const {dark} = useDark();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string>('');
    const {data, error, isLoading, mutate } = useSWR<MessagesRequest>(
        `${config.privateapilink}/tickets/${id}/messages?page=${page}&perPage=10`,
        fetcher
    );
    if (!data || (error || isLoading)) {
        return <Loading/>;
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!id) {
            return;
        }
        addMessage(id, message, account, []).then((data) => {
            data = data.data;
            setLoading(false);
            mutate();

            if(data['status'] === 'success') {

                return toast.success('Your message had been sent', {
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
            toast.error(`Error: ${data['message']}`, {
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
            toast.error(`Error: ${e}`, {
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

    if(!data.data) {
        return <Loading/>;
    }
    return (
        <div>
            {data.data.messages.map((message: Message, index: number) => {
                return (

                    <div className="flex items-start my-2" key={index}>
                        <div className="mr-2">
                            <img alt={'User Avatar'} className={'rounded-full h-10 w-10'} src={`https://ui-avatars.com/api/?background=042049&color=5271ff&name=${message.first_name[0]}${message.last_name[0]}`} />
                        </div>
                        <div>
                            <h4 className={`${dark ? 'text-slate-400' : 'text-black'} font-bold`}>
                                {message.role && (
                                    <div className={`${dark ? 'bg-bg450-logo text-white' : 'bg-blue-50 text-blue-700'} mr-2 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-blue-700/10`}>Support</div>
                                )}
                                {message.first_name} {message.last_name}
                                <time className="text-xs opacity-50 mx-1">{moment(message.created_at).fromNow()}</time>
                            </h4>
                            <div className="mt-1 text-black">
                                <Markdown
                                    breaks={true}
                                    openLinksInNewTab={true}
                                    className={'text-black'}
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    {message.message.replaceAll(/\n\n/g, '\n \n')}
                                </Markdown>
                            </div>
                        </div>
                    </div>




                );
            })}
            {data.data.totalPage === page && open &&
        <div className={'mt-4 mx-4'}>

            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        disabled={loading}
                        onChange={handleChange}
                        className={`${loading && 'opacity-50'} ${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                        defaultValue={''}
                    />
                </div>
                <div className={'flex justify-end'}>
                    <button         className={`${loading && 'opacity-50'} mt-2 rounded-md bg-bg450-logo px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled`} type={'submit'} disabled={loading}>Send message</button>

                </div>
            </form>
        </div>
            }

        </div>
    );
}