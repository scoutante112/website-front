import React, { useState } from 'react';
import useSWR from "swr";
import { debounce } from 'debounce';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Products() {
  let theme = Cookies.get('theme');
  if(!theme) {
    theme = 'night'
  }
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const {data, mutate, error, isLoading } = useSWR(
    `https://api.bagou450.com/api/client/web/addons/get?page=${page}&search=${search}&perpage=10`,
    fetcher
  );
  document.title = "Bagou450 - Products";
  if(!data || (error || isLoading)) {
    return ( 
      <section data-theme={theme} className='bg-base-200'>
    <h1 className='text-center text-4xl mt-16 mb-2'>Products</h1>
      <div className='mx-4 grid grid-cols-5 gap-x-2 gap-y-2'>
      {[0,0,0,0,0,0,0,0,0,0].map((element, key) => {
     return ( <div key={key} className="card bg-neutral animate-pulse">
        <figure >
       <svg className="w-12 h-36 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
        </figure>
        <div className="card-body">
          <h2 className="card-title w-24">
          </h2>
          <p className="h-2.5 bg-gray-300 rounded-full w-36"></p>
          <p className="h-2.5 bg-gray-300 rounded-full w-24"></p>
          <p className="h-2.5 bg-gray-300 rounded-full w-36"></p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary "><p className="w-24"></p>
            </button>
          </div>
        </div>
      </div>
     )
    })}</div></section>)
  }
  
  const pageNumbers = [];
  for (let i = 1; i <= data.page; i++) {
    pageNumbers.push(i);
  }
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
    console.log(value)
    mutate()
  }, 500)
  
  return (
  <section data-theme={theme} className='bg-base-200'>
    <h1 className='text-center text-4xl mt-4 mb-2'>Products</h1>
    <div className="input-group mx-auto w-fit">
    <input type="text" placeholder="Search a product" defaultValue={search} className="input w-full max-w-xs mb-2 bg-neutral " onChange={(e) => searchValue(e.target.value)} />
    <button className="btn btn-square bg-neutral disabled" >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    
  </div>

    <div className='mx-4 grid grid-cols-5 gap-x-2 gap-y-2'>{data.data.map((element: any, key: any) => {
    return (
      <div key={key} className="card bg-neutral shadow-xl">
        <figure>
        <Link to={`/product/${element.id}`}><img src={`https://cdn.bagou450.com/assets/img/addons/${element.id}`} alt={element.name + " icon"} className='mt-6'/></Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{element.name}
          </h2>
          <p>{element.tag}
          </p>
          <div className="card-actions justify-end">
            <Link className="btn btn-outline btn-primary" to={`/product/${element.id}`}>View more
            </Link>
          </div>
        </div>
      </div>
    )
  })}
  </div>
  <div className='text-center mt-4 mx-auto'>
  <div className="btn-group">
    {pageNumbers.map((element: number, key: React.Key | null | undefined) => {
      return <button className={page === element ? "btn btn-active" : 'btn'} key={key} onClick={() => { setPage(element); mutate()}}>{element}</button>
    })}
</div>
  </div>
  </section>
  );
}
