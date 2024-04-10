// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from 'preact/compat';
import addMessage from '../../../api/account/tickets/addMessage';
import { toast } from 'react-toastify';
import moment from 'moment/moment';
import Markdown from 'marked-react';
import { Account } from '../Manager/Forms/EditAccountForm';
import { useDark } from '../../../App';
import ButtonSpin from '../../Elements/ButtonSpin';

export interface Message {
    content: string;
    owner: string;
    owner_avatar: string;
    created_at: string;
    admin: boolean;
    attachments: string[];
}


export default function ConversationDiscordRow({ account, open, data }: {
    account: Account,
    open: boolean,
    data: any
}) {
    console.log(data);
    const { dark } = useDark();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setMessage(target ? target.value : '');
    };
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        if (!id) {
            return;
        }
        setLoading(true);
        addMessage(id, message, account, []).then((data) => {
            data = data.data;
            setLoading(false);
            mutate();

            if (data['status'] === 'success') {

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

    return (
        <div>
            {data.map((message: Message, index: number) => {
                return (

                    <div className='flex items-start my-2' key={index}>
                        <div className='mr-2'>
                            <img alt={'User Avatar'} className={'rounded-full h-10 w-10'}
                                src={message.owner_avatar} />
                        </div>
                        <div>
                            <h4 className={`${dark ? 'text-slate-400' : 'text-black'} font-bold`}>
                                {message.admin ? (
                                    <div
                                        className={`${dark ? 'bg-bg450-logo text-white' : 'bg-blue-50 text-blue-700'} mr-2 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-blue-700/10`}>Support</div>
                                ) : <></>}

                                {message.owner ? message.owner : 'Undefined user'}
                                <time className='text-xs opacity-50 mx-1'>{moment(message.created_at).fromNow()}</time>
                            </h4>
                            <div className='mt-1 text-black'>
                                <Markdown
                                    breaks={true}
                                    openLinksInNewTab={true}
                                    className='text-black'
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    {message.content.replaceAll(/\n\n/g, '\n \n')}
                                </Markdown>
                            </div>
                        </div>
                    </div>


                );
            })}
            {open && (
                <div className={'mt-4 mx-4'}>

                    <form onSubmit={handleSubmit}>
                        <div className='mt-2'>
                            <textarea
                                rows={4}
                                name='comment'
                                id='comment'
                                disabled={loading}
                                onChange={handleChange}
                                className={`${loading && 'opacity-50'} ${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                defaultValue={''}
                            />
                        </div>
                        <div className={'flex justify-end'}>
                            <button
                                className={`${loading && 'opacity-50'} mt-2 rounded-md bg-bg450-logo px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled`}
                                type={'submit'} disabled={loading}>{loading ? <ButtonSpin /> : 'Send message'}</button>

                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}