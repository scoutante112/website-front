import { useEffect } from 'preact/compat';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../api/http';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import getDownloadLink from '../../api/shop/getDownloadLink';
import { config } from '../../config/config';
import Spinner from '../Elements/Spinner';
import { useDark } from '../../App';


export default function OrdersCallback() {
    const {dark} = useDark();
    const { id } = useParams();
    const { data, error, isLoading } = useSWR(
        `https://api.bagou450.com/api/client/web/orders/status?id=${id}`,
        fetcher
    );
    useEffect(() => {
        localStorage.removeItem('basket');
    }, []);


    const navigation = useNavigate();
    if (!data || error || isLoading) {
        return <Spinner />;
    }
    if (!data['status']) {
        if (data['message'] === 'You need to be authentificated.') {
            navigation('/login');
            window.location.reload();
        }

        return <Spinner />;
    }
    if(!data.data.exist) {
        return (
            <h1 className={'text-4xl text-center'}>Order not found.</h1>
        );
    }
    /*
  if (!data.data.exist) {
    navigation("/");
  }*/
    const downloadProduct = () => {
        const order = id;
        if(!order) {
            return;
        }
        toast.info('Please wait during the generation of the file...', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light',
        });
        getDownloadLink(order)
            .then((data) => {
                fetch(`${config.privateapilink}${data.data.data}`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${Cookies.get('access_token')}`,
                    },
                })
                    .then((response) => response.blob())
                    .then((blob) => {
                        // Téléchargement du fichier blob

                        const url = window.URL.createObjectURL(new Blob([blob]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', `Bagou450 - Order #${order}.zip`);
                        document.body.appendChild(link);
                        link.click();
                        if (link.parentNode) {
                            link.parentNode.removeChild(link);
                        }
                        toast.success('Your file is now downloaded!', {
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
            })
            .catch(() => {
                toast.error(
                    'An unexcepted error happend. Please contact one of our support team.',
                    {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: dark ? 'dark' : 'light',
                    }
                );
            });
    };

    document.title = `Bagou450 - Order #${data.data.order.id}`;
    return (
        <>
            <section className="text-center justify-center mx-auto">
                <h2 className="text-white text-4xl">Order #{data.data.order.id}</h2>
                <h3
                    className={`text-3xl mb-2 ${
                        data.data.order.status === 'complete'
                            ? 'text-green-500'
                            : data.data.order.status === 'expired'
                                ? 'opacity-80'
                                : 'text-orange-500'
                    }`}
                >
                    {data.data.order.status === 'complete'
                        ? 'Completed'
                        : data.data.order.status === 'expired'
                            ? 'Expired'
                            : 'Pending'}

                </h3>
                {data.data.order.status === 'incomplete' &&
          <span className={`${dark ? 'text-slate-200' : 'text-black'} text-xl opacity-80`}>Please be aware that an order may take a few minutes to be confirmed.</span>
                }
            </section>

            <div>
                <div className="mt-8 flow-root mx-16">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">License
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {data.data.order.products.map((item: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                                        <div className={'flex w-full gap-x-2'}><img
                                                            src={`${config.privateiconlink}${item.icon}`}
                                                            alt={item.name}
                                                            className={'h-16 w-16'} />
                                                        <div className={'my-auto'}>{item.name}</div>
                                                        </div>
                                                    </td>
                                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>Front-end
                                                        {item.tag}
                                                    </td>
                                                    <td className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${item.license ? 'opacity-100' : 'opacity-80'}`}>{item.license ? item.license : 'No license'}</td>
                                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{item.price}€</td>
                                                </tr>

                                            );
                                        })}
                                        <tr>
                                            <td className={'my-2'}>

                                                <h4 className={`${dark ? 'text-slate-200' : 'text-black'} text-xl font-bold text-center`}>Total</h4>
                                            </td>
                                            <td></td>
                                            <td></td>

                                            <td className={'my-2'}>
                                                <h4 className={`${dark ? 'text-slate-200' : 'text-black'} text-xl font-bold`}>{(data.data.order.products.reduce((total: any, item: {
                                                    price: any;
                                                }) => total + item.price, 0)).toFixed(2)}€</h4>

                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {data.data.order.status === 'incomplete' && (
                    <div className="flex justify-end mr-12 my-4">
                        <button
                            className="rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled"
                            onClick={() => window.location.assign(data.data.order.checkout)}
                        >
                            Complete order
                        </button>
                        
                    </div>
                )}
                {data.data.order.status === 'complete' &&
                    <div className="flex justify-end mr-12 my-4">
                        <button
                            className='rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled'
                            onClick={() => downloadProduct()}>Download
                        product{data.data.order.products.length > 1 ? 's' : ''}</button>  
                    </div>}
            </div>

            <div className="min-h-screen"></div>
        </>
    );
}
