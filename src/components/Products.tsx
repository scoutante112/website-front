import React, { Suspense, useState } from "react";
import useSWR from "swr";
import { debounce } from "debounce";
import Loading from "./Elements/Loading";
import { config } from "../config/config";
import Pagination from "./Elements/Pagination";
import { Link } from "react-router-dom";

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
    <h1 className="text-center text-black text-semibold text-4xl mt-4 mb-2">Products</h1>
    <div className={'text-center'}>
      <input type="text" placeholder="Search a product" defaultValue={search}
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 "
             onChange={(e) => searchValue(e.target.value)} />
    </div>
    <section
      className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 mx-2 lg:mx-8 xl:mx-16 ">
      {data.data.map((product) => (
        <Suspense fallback={<Loading />}>

          <div key={product.id} className="group relative">
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={`https://beta-api.bagou450.com/storage/logos/${product.id}.webp`}
                alt={product.name + " icon"}
                className="h-56 w-auto object-cover object-center lg:h-full lg:w-full mx-auto"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link to={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.tag}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price !== 0 ? product.price + "€" : "Free"}</p>
            </div>
          </div>
        </Suspense>
      ))}
    </section>

    <div className='text-center mt-4'>
  <div className="btn-group">
    <Pagination page={page} setPage={setPage} totalPages={data.totalpage}/>


  </div>

  </div>

  </>
  );
}