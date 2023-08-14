import React, { lazy, useState, Suspense } from "react";
import useSWR from "swr";
import { debounce } from 'debounce';
import Loading from "./Elements/Loading";
import { config } from "../config/config";
import Pagination from "./Elements/Pagination";
import ProductBox from "./ProductBox";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Products() {

  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const {data, mutate, error, isLoading } = useSWR(
    `${config.privateapilink}/addons/get?page=${page}&search=${search}&perpage=21`,
    fetcher
  );

  document.title = "Bagou450 - Products";
  if(!data || (error || isLoading)) {
    return ( 
      <section>
    <h1 className='text-center text-4xl mt-16 mb-2'>Products</h1>
      <div className='mx-4 grid grid-cols-5 gap-x-2 gap-y-2'>
     </div>
        <Loading/>
        <section className='min-h-screen'></section>
      </section>)
  }
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
    mutate()
  }, 500)
  
  return (
  <>
    <h1 className='text-center text-4xl mt-4 mb-2'>Products</h1>
    <div className={'text-center'}>
    <input type="text" placeholder="Search a product" defaultValue={search} className="input w-full input-bordered max-w-xs mb-4 " onChange={(e) => searchValue(e.target.value)} />
    </div>
    <section className='mx-4 grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-3 gap-y-4'>
      <Suspense fallback={<Loading />}>
        {data.data.map((element: any, key: any) => (
          <Suspense key={key} fallback={<img src={`${config.privateiconlink}${element.icon}`} alt={element.name + " icon"} className='mt-6 h-52 w-52' width="500" height="500" />}>
            <ProductBox element={element} key={key} />
          </Suspense>
        ))}
      </Suspense>
    </section>
    <div className='text-center mt-4'>
  <div className="btn-group">
    <Pagination page={page} setPage={setPage} totalPages={data.totalpage}/>


  </div>

  </div>

  </>
  );
}