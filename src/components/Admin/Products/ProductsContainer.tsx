import React, { useState } from 'react';
import useSWR from 'swr';
import { config } from '../../../config/config';
import { fetcher } from '../../../api/http';
import Loading from '../../Elements/Loading';
import NavBarAccount from '../../Account/NavBarAccount';
import { debounce } from 'debounce';
import Pagination from '../../Elements/Pagination';
import 'react-quill/dist/quill.snow.css';
import EditProductButton from './EditProductButton';
import NewProductButton from './NewProductButton';


export interface Product {
  id: number;
  name: string;
  tab: boolean;
  tabroute: string | null;
  new: boolean;
  isWings: boolean;
  version: number;
  hide: boolean;
  category: string;
  slug: string;
  extension: boolean;
  extension_product: number | null;
  created_at: string;
  updated_at: string;
  sxcname: string | null;
  licensed: boolean;
  bbb_id: number | null;
  tag: string;
  description: string;
  link: {
    name: string;
    link: string;
  }[];
  autoinstaller: boolean;
  price: number;
  stripe_id: string;
  stripe_price_id: string;
  recurrent: boolean;
}
export interface ProductResponse {
  data: Product[];
  total: number;
}

export default function ProductsContainer() {
    const [page, setPage] = useState<number>(1);
    const [perpage] = useState<number>(20);
    const [search] = useState<string>('');
    const {data, error, isLoading} = useSWR<ProductResponse>(`${config.privateapilink}/admin/products?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
    if(!data || (error || isLoading)) {
        return <Loading/>;
    }

    return (
        <>
            <div className='px-4 sm:px-6 lg:px-8'>

                <div className='sm:flex sm:items-center'>
                    <div className='sm:flex-auto'>
                        <h1 className='text-base font-semibold leading-6 text-gray-900'>Products</h1>
                        <p className='mt-2 text-sm text-gray-700'>
                            You are on the <strong
                            className='font-semibold text-gray-900'>products</strong> page.
                            You can here see and manage all products.
                        </p>
                    </div>
                    <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                        <NewProductButton/>

                    </div>

                </div>
            </div>
            <div className='-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300 text-black'>
                    {/* head */}
                    <thead>
                    <tr>
                        <th scope='col'
                            className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Id
                        </th>
                        <th scope='col'
                            className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 table-cell'>
                            Name
                        </th>
                        <th scope='col'
                            className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 table-cell'>
                            Tag
                        </th>
                        <th scope='col'
                            className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'>
                            Admin
                        </th>

                        <th scope='col'
                            className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900 table-cell'>
                            Version
                        </th>
                        <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900  table-cell'>
                            Licensed
                            </th>

                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900  table-cell'>
                            AutoInstaller
                            </th>
                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900  table-cell'>
                            Price
                            </th>

                            <th scope='col'
                                className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900  table-cell'>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((product: Product, index: number) => {
                            return (
                                <ProductRow product={product} key={index} page={page} perpage={perpage} search={search}/>
                            );
                        })}
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
            <div className={'text-center mt-2'}>
                <Pagination totalPages={data.total} page={page} setPage={setPage}/>

            </div>
        </>
    );
}

function ProductRow({product, page, perpage, search}: {product: Product, page: number; perpage: number, search: string}) {

    return (
        <tr>

            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{product.id}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{product.name}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{product.tag}</td>

            <td className={`border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell ${product.tab ? 'text-green-500' : 'text-red-500'}`}>{product.tab ? 'Yes' : 'No'}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{product.version}</td>
            <td className={`border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell ${product.licensed ? 'text-green-500' : 'text-red-500'}`}>{product.licensed ? 'Yes' : 'No'}</td>
            <td className={`border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell ${product.autoinstaller ? 'text-green-500' : 'text-red-500'}`}>{product.autoinstaller ? 'Yes' : 'No'}</td>
            <td className='border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell'>{product.price}€</td>

            <td><EditProductButton product={product} page={page} perpage={perpage} search={search} /></td>
        </tr>
    );
}