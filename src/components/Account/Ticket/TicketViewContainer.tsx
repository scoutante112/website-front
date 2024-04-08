// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'preact/compat';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import { Account } from '../Manager/Forms/EditAccountForm';
import moment from 'moment';
import { toast } from 'react-toastify';
import { FaDownload } from 'react-icons/fa';
import { config } from '../../../config/config';
import Cookies from 'js-cookie';
import ConversationRow, { MessagesRequest } from './ConversationRow';
import updateTicket from '../../../api/account/tickets/updateTicket';
import { ChevronLeftIcon, ChevronRightIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';


interface Attachment {
    id: number;
    name: string;
    size: number;
}

const formatSize = (sizeInBytes: number) => {
    const units = ['b', 'Kb', 'Mb', 'Gb', 'Tb'];
    let size = sizeInBytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
};
export default function TicketViewContainer() {
    const { t } = useTranslation();

    const { id } = useParams();
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const { dark } = useDark();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { data, error, isLoading, mutate } = useSWR(
        `${config.privateapilink}/tickets/${id}/details`,
        fetcher,
    );
    const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );
    const { data: data3, error: error3, isLoading: isLoading3 } = useSWR<MessagesRequest>(
        `${config.privateapilink}/tickets/${id}/messages?page=${page}&perPage=10`,
        fetcher,
    );

    if ((!data || (error || isLoading)) || (!data2 || (error2 || isLoading2)) || (!data3 || (error3 || isLoading3))) {
        return <Loading />;
    }
    if (!data2.status) {
        return <></>;
    }
    const account: Account = data2.data;
    const totalPage = data3.data!.totalPage;
    const UpdateStatus = () => {
        setLoading(true);
        updateTicket(data.data.ticket.id, data.data.ticket.status !== 'closed' ? 'closed' : account.role ? 'support_answer' : 'client_answer').then((data) => {
            if (data.data.status === 'error') {
                toast.error(`${t('account.utils.error')}: ${data.data.message}`, {
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
                return;
            }
            window.scrollTo(0, 0);
            mutate();
            toast.success(t('account.ticket.view.toast'), {
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
        }).catch((e) => {
            toast.error(`${t('account.utils.error')}: ${e}`, {
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
    document.title = `Bagou450 -  Ticket ${id}`;
    return (
        <>
            <section className='md:mx-8 my-4 grid grid-cols-1'>

                <div>
                    <div className={'grid lg:grid-cols-2 gap-x-2'}>
                        <InfoBlock data={data} />
                        <AttachmentsBlock data={data} />
                    </div>
                    <div className={'flex justify-between my-2'}>
                        <span className='isolate inline-flex rounded-md shadow-sm mt-2'>
                            <button
                                type='button'
                                disabled={page <= 1 || loading}
                                onClick={() => {
                                    setPage(page - 1);
                                    window.scrollTo(0, 0);
                                }}
                                className={`relative inline-flex items-center rounded-l-md bg-indigo-600 px-1.5 py-1 text-white  ${loading && 'opacity-50'}  hover:bg-indigo-500 focus:z-10 ${page <= 1 && 'opacity-50'}`}
                            >
                                <ChevronLeftIcon className='h-3 w-3' aria-hidden='true' />

                                {t('account.utils.pagination.previous')}
                            </button>
                        
                            <button
                                type='button'
                                onClick={() => {
                                    setPage(page + 1);
                                    window.scrollTo(0, 0);
                                }}
                                disabled={page >= totalPage || loading}
                                className={`relative -ml-px inline-flex items-center rounded-r-md bg-indigo-600 px-1.5 py-1 text-white ${loading && 'opacity-50'}  hover:bg-indigo-500 focus:z-10 ${page >= totalPage && 'opacity-50'}`}
                            >
                                {t('account.utils.pagination.next')}
                                <ChevronRightIcon className='h-3 w-3' aria-hidden='true' />
                            </button>
                        </span>
                        <button disabled={loading}
                                className={`${data.data.ticket.status === 'closed' ? 'hover:bg-green-500 bg-green-600' : 'hover:bg-red-500 bg-red-600'} ${loading && 'opacity-50'} flex rounded  px-1.5 py-1 text-sm font-semibold text-white shadow-sm mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                onClick={() => UpdateStatus()}>
                            {data.data.ticket.status === 'closed' ?
                                <LockOpenIcon className='h-3 w-3' aria-hidden='true' /> :
                                <LockClosedIcon className='h-5 w-5' aria-hidden='true' />}
                            {data.data.ticket.status === 'closed' ? t('account.ticket.view.open') : t('account.ticket.view.close')}
                        </button>
                    </div>


                </div>
                <div className={'mx-4 col-span-3'}>
                    <ConversationRow open={data.data.ticket.status !== 'closed'} id={data.data.ticket.id}
                                     account={account} page={page} />

                </div>

            </section>
            <section className='min-h-screen'></section>
        </>
    );
}


function InfoBlock({ data }: { data: any }) {
    const { t } = useTranslation();
    const { dark } = useDark();
    return (
        <div className={`${dark ? 'bg-bg450-dark' : 'bg-gray-200'} rounded-md h-full`}>
            <h2 className={`${dark ? 'text-slate-200' : 'text-black'} text-center text-xl font-bold mt-1 pt-4 `}
                title={data.data.ticket.name}>{data.data.ticket.name[0].toUpperCase()}{(data.data.ticket.name.length > 36 ? data.data.ticket.name.slice(1, 33) + '...' : data.data.ticket.name.slice(1, data.data.ticket.name.length))}</h2>
            <div className='divider'></div>
            <ul className={'ml-5 list-disc'}>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.1')}:</span> <span
                    className={data.data.ticket.status === 'closed' ? ' text-red-700' : (data.data.ticket.status === 'support_answer' ? ' text-green-700' : ' text-blue-700')}>                    {data.data.ticket.status === 'closed' ? t('account.ticket.container.row.1') : data.data.ticket.status === 'support_answer' ? t('account.ticket.container.row.2') : t('account.ticket.container.row.3')}</span>
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.2')}:</span> <span
                    className={data.data.ticket.priority === 'high' ? 'text-red-700' : data.data.ticket.priority === 'low' ? 'text-green-700' : ''}>{data.data.ticket.priority[0].toUpperCase()}{data.data.ticket.priority.slice(1, data.data.ticket.priority.length)}</span>
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.3')}:</span> {data.data.ticket.logs_url && data.data.ticket.logs_url !== '' ? data.data.ticket.logs_url : t('account.ticket.view.info.4')}
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2 cursor-copy`}
                    title={data.data.ticket.license} onClick={() => {
                    navigator.clipboard.writeText(data.data.ticket.license);
                    toast.success(t('account.ticket.view.toast.2'), {
                        position: 'bottom-right',
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                }}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.5')}:</span> {data.data.ticket.license && data.data.ticket.license !== '' ? (data.data.ticket.license.length > 30 ? data.data.ticket.license.slice(0, 31) + '...' : data.data.ticket.license) : t('account.ticket.view.info.6')}
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.7')} :</span> {new Date(data.data.ticket.created_at).toLocaleDateString('fr-FR')}
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2 pb-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.8')} :</span> {moment(data.data.ticket.updated_at).fromNow()}
                </li>
            </ul>
        </div>
    );
}

function AttachmentsBlock({ data }: { data: any }) {
    const { t } = useTranslation();
    const { dark } = useDark();
    const [loading, setLoading] = useState(false);
    const downloadAttachmentFunction = (id: number, name: string) => {
        setLoading(true);
        fetch(`${config.privateapilink}/tickets/${id}/download`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Cookies.get('access_token')}`,
            },
        }).then(response => response.blob()).then(blob => {

            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name);
            document.body.appendChild(link);
            link.addEventListener('load', () => {
                URL.revokeObjectURL(url);
            });
            link.click();
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
            toast.success(t('account.ticket.view.attachments.toast'), {
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
        }).catch((e) => {
            toast.error(`${t('account.utils.error')}: ${e}`, {
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
        <div className={`${dark ? 'bg-bg450-dark' : 'bg-gray-200'} mt-2 lg:mt-0 rounded-md h-full`}>
            <h2 className={`${dark ? 'text-slate-200' : 'text-black'} text-center text-xl font-bold pt-4`}>{t('account.ticket.view.attachments.1')} </h2>
            <div className='divider'></div>
            {data.data.attachments.length < 1 ?
                <p className={`${dark ? 'text-slate-300' : 'text-black'} text-center pb-2 `}>{t('account.ticket.view.attachments.2')} </p>
                :
                <ul className={`${dark ? 'text-slate-300' : 'text-black'} ml-5 mb-4 list-disc`}>
                    {data.data.attachments.map((attachment: Attachment, index: number) => {
                        return <li key={index}
                                   className={`${dark ? 'text-slate-300' : 'text-black'} pb-2 cursor-pointer`}
                                   onClick={() => {
                                       if (!loading) {
                                           downloadAttachmentFunction(attachment.id, attachment.name);
                                       }
                                   }}><p className={'flex'}><span
                            className={'font-semibold'}>{attachment.name}</span>, {formatSize(attachment.size)}
                            <FaDownload className={'ml-2 mt-1'} /></p></li>;

                    })}
                </ul>
            }

        </div>
    );
}


