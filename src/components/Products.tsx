import React, { Suspense, useState } from 'react';
import useSWR from 'swr';
import { debounce } from 'debounce';
import Loading from './Elements/Loading';
import { config } from '../config/config';
import Pagination from './Elements/Pagination';
import ProductBox from './ProductBox';
import { useDark } from '../App';
import { Helmet } from 'react-helmet';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export interface Product {
  id:number;
  name:string;
  slug: string;
  category: string;
  tag:string;
  icon: string;
  price:number;

}
export default function Products() {
    const {dark} = useDark();
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const {data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/addons/get?page=${page}&search=${search}&perpage=20&category=${category}`,
        fetcher
    );

    document.title = 'Bagou450 - Products';
    if(!data || (error || isLoading)) {
        return ( 
            <section className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>
                <h1 className={`text-center ${dark ? 'text-white' : 'text-black'} text-4xl py-16 mb-2`}><strong>Pterodactyl addons</strong></h1>
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

            <Helmet>
                <meta name='description' content={'Discover Bagou450\'s high-quality Pterodactyl addons, enhancing your gaming experience with Minecraft version changers, plugin installers, and more.'} />

                <meta name="twitter:description" content={'Discover Bagou450\'s high-quality Pterodactyl addons, enhancing your gaming experience with Minecraft version changers, plugin installers, and more.'} />

                <meta property="og:description" content={'Discover Bagou450\'s high-quality Pterodactyl addons, enhancing your gaming experience with Minecraft version changers, plugin installers, and more.'} />
            </Helmet>
            <h1 className={`${dark ? 'text-white' : 'text-gray-900'} text-2xl text-center font-bold tracking-tight sm:text-4xl py-4`}><strong>Pterodactyl addons</strong></h1>
            <div className={'flex gap-x-2 text-center mx-2'}>
                <input type='text' placeholder='Search a product' defaultValue={search}
                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} ml-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs mb-4`}
                    onChange={(e) => searchValue(e.target.value)} />
                <select
                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} mr-auto block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`}
                    value={category}
                    onChange={(e) => {setCategory(e.target.value); setPage(1);}}>
                    <option disabled selected>Select category</option>
                    <option value={''}>All categories</option>
                    <option value={'Minecraft'}>Minecraft</option>
                    <option value={'FiveM'}>FiveM</option>
                    <option value={'Management'}>Management</option>
                    <option value={'Miscellaneous'}>Miscellaneous</option>
                    <option value={'Bundles'}>Bundles</option>
                </select>
            </div>
            <section
                className='grid mx-12 md:grid-cols-2 md:mx-24 lg:grid-cols-3 lg:mx-40 2xl:grid-cols-5 2xl:mx-52 gap-x-3 gap-y-4 '>
                {data.data.map((product: Product) => (
                    <Suspense fallback={<Loading />}>

                        <ProductBox product={product} key={product.id} />
                    </Suspense>
                ))}
            </section>

            <div className='text-center mt-4'>
                <div className='btn-group'>
                    <Pagination page={page} setPage={setPage} totalPages={data.totalpage} />


                </div>

            </div>

        </div>
    );
}