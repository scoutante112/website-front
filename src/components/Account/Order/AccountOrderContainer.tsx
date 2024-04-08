import { useContext, useEffect, useState } from 'preact/compat';
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';
import getDownloadLink from '../../../api/shop/getDownloadLink';
import { toast } from 'react-toastify';
import { config } from '../../../config/config';
import Cookies from 'js-cookie';
import getInvoiceDownloadLink from '../../../api/shop/getInvoiceDownloadLink';
import Loading from '../../Elements/Loading';
import { NavContext } from '../AccountRouter';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';


interface OrderItem {
    products: { name: string }[];
    price: number;
    status: string;
    order_id: number;
    stripe_id: string;
}


export default function AccountOrderContainer() {
    const [page, setPage] = useState<number>(1);
    const { dark } = useDark();
    const { t } = useTranslation();

    const { data, error, isLoading } = useSWR(
        `${config.privateapilink}/orders?page=${page}`,
        fetcher,
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { setActive } = useContext(NavContext);
    useEffect(() => {
        setActive(window.location.pathname);
    }, []);
    if (!data || (error || isLoading)) {
        return <Loading />;
    }
    document.title = `Bagou450 - ${t('account.order.title')}`;
    return (
        <>

            <div className='px-4 sm:px-6 lg:px-8'>

                <div className='sm:flex sm:items-center'>
                    <div className='sm:flex-auto'>
                        <h1 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}>{t('account.order.title')}</h1>
                        <p className={`${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm `}>
                            {t('account.utils.youare')} <strong
                            className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`}>{t('account.order.title').toLowerCase()}</strong> {t('account.utils.page')}.
                            {t('account.order.description')}
                        </p>
                    </div>
                </div>

                <div className='-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-300'>
                        <thead>
                        <tr>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm hidden lg:table-cell font-semibold sm:pl-6`}>
                                {t('account.order.col1')}
                            </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`}>

                                {t('account.order.col2')}
                            </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm hidden lg:table-cell font-semibold sm:pl-6`}>

                                {t('account.order.col3')}
                            </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`}>

                                {t('account.order.col4')}
                            </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm hidden lg:table-cell font-semibold sm:pl-6`}>

                                {t('account.order.col5')}
                            </th>
                            <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                                <span className='sr-only'>{t('account.order.col6')} </span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.data && data.data.orders && data.data.orders.length > 0 && data.data.orders.map((order: OrderItem, planIdx: number) => (
                            <OrderRow order={order} index={planIdx} key={planIdx} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <nav
                className='flex items-center justify-between lg:border-t lg:border-gray-200 px-4 py-3 sm:px-6 my-2'
                aria-label='Pagination'
            >
                <div className='hidden sm:block'>
                    <p className={`${dark ? 'text-slate-300' : 'text-gray-700'} text-sm `}>
                        {t('account.utils.pagination.show')} <span
                        className='font-medium'>{page * 10 - 10}</span> {t('account.utils.pagination.to')} <span
                        className='font-medium'>{page * 10}</span> {t('account.utils.pagination.of')} {' '}
                        <span
                            className='font-medium'>{data.data ? data.data.total : '0'}</span> {t('account.utils.pagination.result')}
                    </p>
                </div>
                <div className='flex flex-1 justify-between sm:justify-end'>
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page < 2}
                        className={`${page < 2 && 'opacity-50'} relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`}
                    >
                        {t('account.utils.pagination.previous')}
                    </button>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page * 10 >= data.data ? data.data.total : 0}
                        className={`${page * 10 >= data.data ? data.data.total : 0 && 'opacity-50'} relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`}
                    >
                        {t('account.utils.pagination.next')}
                    </button>
                </div>
            </nav>
            <div className='min-h-screen'></div>
        </>
    );
}

function OrderRow({ order, index }: { order: OrderItem, index: number }) {
    const [loading, setLoading] = useState<boolean>(false);
    const orderid = order.order_id;
    const { dark } = useDark();
    const { t } = useTranslation();

    const downloadProduct = () => {
        setLoading(true);
        toast.info(t('account.order.row.toast.1'), {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light',
        });
        getDownloadLink(`${orderid}`).then((data) => {
            fetch(`${config.privateapilink}${data.data.data}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Cookies.get('access_token')}`,
                },
            }).then(response => response.blob()).then(blob => {
                if (blob.type === 'application/json') {
                    return toast.error(t('account.utils.errormessage'), {
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
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `Bagou450-${orderid}.zip`);
                document.body.appendChild(link);
                link.addEventListener('load', () => {
                    URL.revokeObjectURL(url);
                });
                link.click();
                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
                toast.success(t('account.order.row.toast.2'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            }).catch(() => {
                toast.error(t('account.utils.errormessage'), {
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

        }).catch(() => {
            toast.error(t('account.utils.errormessage'), {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light',
            });

        });
        setLoading(false);

    };
    const downloadInvoice = () => {
        setLoading(true);

        getInvoiceDownloadLink(orderid).then((data) => {
            fetch(`${config.privateapilink}${data.data.data}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Cookies.get('access_token')}`,
                },
            }).then(response => response.blob()).then(blob => {
                // Téléchargement du fichier blob
                if (blob.type === 'application/json') {
                    return toast.error(t('account.utils.errormessage'), {
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
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${orderid} - Bagou450.pdf`);
                document.body.appendChild(link);
                link.click();
                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
                toast.success(t('account.order.row.toast.3'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            }).catch(() => {
                toast.error(t('account.utils.errormessage'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });

            });
            setLoading(false);
        });
    };
    return (


        <tr key={index}>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm hidden lg:table-cell`}>
                <div className='font-medium '>{order.order_id}</div>
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm table-cel`}>
                {order.products.map((item: any, key: number) => (
                    <p key={key} className={dark ? 'text-gray-400' : 'text-gray-500'}>{item['name']}</p>
                ))}
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm hidden lg:table-cell ${order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : ''}`}>
                {order.status[0].toUpperCase() + order.status.slice(1, order['status'].length)}
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm table-cell`}>
                {order.price}
            </td>
            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 hidden px-3 py-3.5 text-sm lg:table-cell`}
                onClick={() => {
                    navigator.clipboard.writeText(order.stripe_id);
                    toast.success(t('account.order.row.toast.4'), {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    });
                }}>
                {order.stripe_id.slice(0, 32)}{order.stripe_id.length > 32 && '...'}
            </td>

            <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm table-cell`}>
                <button
                    className='inline-flex items-center rounded-md bg-purple-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                    onClick={() => downloadInvoice()}
                    disabled={loading}
                >
                    {t('account.order.row.button.1')}
                </button>
                <br />

                {order['status'] === 'complete' &&
                    <button
                        className='inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                        onClick={() => downloadProduct()}
                        disabled={loading}
                    >
                        {t('account.order.row.button.2')}{order.products.length > 1 && 's'}
                    </button>

                }
            </td>
        </tr>

    );
}