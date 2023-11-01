import React, { Suspense, useState } from 'react';
import useSWR from 'swr';
import { debounce } from 'debounce';
import Loading from './Elements/Loading';
import { config } from '../config/config';
import Pagination from './Elements/Pagination';
import { Link } from 'react-router-dom';
import ProductBox from './ProductBox';
import { useDark } from '../App';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export interface Product {
  id:number;
  name:string;
  tag:string;
  icon: string;
  price:number;

}
export default function Products() {
    const {dark} = useDark();
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const {data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/addons/get?page=${page}&search=${search}&perpage=20`,
        fetcher
    );

    document.title = 'Bagou450 - Products';
    if(!data || (error || isLoading)) {
        return ( 
            <section className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>
                <h1 className='text-center text-black text-4xl py-16 mb-2'>Pterodactyl addons</h1>
                <div className='mx-4 grid grid-cols-5 gap-x-2 gap-y-2'>
                </div>
                <Loading/>
                <section className='min-h-screen'></section>
            </section>);
    }
    const searchValue = debounce((value: string) => {
        setSearch(value);
        setPage(1);
        mutate();
    }, 500);
  
    return (
        <div className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>
            <h1 className={`${dark ? 'text-white' : 'text-gray-900'} text-2xl text-center font-bold tracking-tight sm:text-4xl py-4`}>Pterodactyl addons</h1>
            <div className={'text-center'}>
                <input type="text" placeholder="Search a product" defaultValue={search}
                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 mx-auto shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs mb-4`}
                    onChange={(e) => searchValue(e.target.value)} />
            </div>
            <section
                className="grid mx-12 md:grid-cols-2 md:mx-24 lg:grid-cols-3 lg:mx-40 2xl:grid-cols-5 2xl:mx-52 gap-x-3 gap-y-4 ">
                {data.data.map((product: Product) => (
                    <Suspense fallback={<Loading />}>

                        <ProductBox product={product} key={product.id} />
                    </Suspense>
                ))}
            </section>

            <div className='text-center mt-4'>
                <div className="btn-group">
                    <Pagination page={page} setPage={setPage} totalPages={data.totalpage} />


                </div>

            </div>

        </div>
    );
}