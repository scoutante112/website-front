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
import { config } from '../../../config/config';
import updateTicket from '../../../api/account/tickets/updateTicket';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';
import ConversationDiscordRow from './ConversationDiscordRow';

export default function TicketViewDiscordContainer() {
    const { t } = useTranslation();

    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const { dark } = useDark();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { data, error, isLoading, mutate } = useSWR(
        `${config.privateapilink}/tickets/getDiscordTicket/${id}`,
        fetcher,
    );
    const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );


    if ((!data || (error || isLoading)) || (!data2 || (error2 || isLoading2))) {
        return <Loading />;
    }
    if (!data2.status) {
        return <></>;
    }
    const account: Account = data2.data;
    const UpdateStatus = () => {
        setLoading(true);
        updateTicket(data.data.ticket.id, data.data.status !== 'closed' ? 'closed' : account.role ? 'support_answer' : 'client_answer').then((data) => {
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
                    <div className={'grid gap-x-2'}>

                        <InfoBlock data={data} />
                    </div>
                    {data.data.status !== 'closed' && (
                        <div className={'flex justify-between my-2'}>
                            <button disabled={loading}
                                className={`hover:bg-red-500 bg-red-600 ${loading && 'opacity-50'} flex rounded  px-1.5 py-1 text-sm font-semibold text-white shadow-sm mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                onClick={() => UpdateStatus()}>

                                <LockClosedIcon className='h-5 w-5' aria-hidden='true' />
                                {t('account.ticket.view.close')}
                            </button>
                        </div>
                    )}


                </div>
                <div className={'mx-4 col-span-3'}>
                    <ConversationDiscordRow open={data.data.status !== 'closed'} data={data.data.messages}
                        account={account} />

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
                title={data.data.name}>{data.data.name[0].toUpperCase()}{(data.data.name.length > 36 ? data.data.name.slice(1, 33) + '...' : data.data.name.slice(1, data.data.name.length))}</h2>
            <div className='divider'></div>
            <ul className={'ml-5 list-disc'}>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.1')}:</span> <span
                    className={data.data.status === 'closed' ? ' text-red-700' : (data.data.status === 'support_answer' ? ' text-green-700' : ' text-blue-700')}>                    {data.data.status === 'closed' ? t('account.ticket.container.row.1') : data.data.status === 'support_answer' ? t('account.ticket.container.row.2') : t('account.ticket.container.row.3')}</span>
                </li>

                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.3')}:</span> {data.data.logs && data.data.logs !== '' ? data.data.logs : t('account.ticket.view.info.4')}
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2 cursor-copy`}
                    title={data.data.license} onClick={() => {
                        navigator.clipboard.writeText(data.data.license);
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
                        className={'font-semibold'}>{t('account.ticket.view.info.5')}:</span> {data.data.license && data.data.license !== '' ? (data.data.license.length > 30 ? data.data.license.slice(0, 31) + '...' : data.data.license) : t('account.ticket.view.info.6')}
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.7')} :</span> {new Date(data.data.created_at).toLocaleDateString('fr-FR')}
                </li>
                <li className={`${dark ? 'text-slate-100' : 'text-black'} mt-2 pb-2`}><span
                    className={'font-semibold'}>{t('account.ticket.view.info.8')} :</span> {moment(data.data.updated_at).fromNow()}
                </li>
            </ul>
        </div>
    );
}

