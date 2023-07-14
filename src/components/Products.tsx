import React, { useContext, useState } from 'react';
import useSWR from "swr";
import { debounce } from 'debounce';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Spinner from "./Elements/Spinner";
import Loading from "./Elements/Loading";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Products() {

  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const {data, mutate, error, isLoading } = useSWR(
    `https://api.bagou450.com/api/client/web/addons/get?page=${page}&search=${search}&perpage=21`,
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
  
  const pageNumbers = [];
  for (let i = 1; i <= data.page; i++) {
    pageNumbers.push(i);
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
    <section className='mx-4 grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-2 gap-y-2'>{data.data.map((element: any, key: any) => {return (<ProductBox element={element} key={key}/>)})}</section>
  <div className='text-center mt-4 mx-auto'>
  <div className="btn-group">
    {pageNumbers.map((element: number, key: React.Key | null | undefined) => {
      return <button className={page === element ? "btn btn-active" : 'btn'} key={key} onClick={() => { setPage(element); mutate()}}>{element}</button>
    })}
</div>
  </div>
  </>
  );
}


function ProductBox({element, key}: {element: any, key: any}) {
  return (
    <div key={key} className="card bg-neutral shadow-xl">
    <figure>
      <Link to={`/product/${element.id}`}><LazyLoad><img src={`https://cdn.bagou450.com/assets/img/addons/${element.id}.webp`} alt={element.name + " icon"} className='mt-6 h-52 w-52' /></LazyLoad></Link>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{element.name}
      </h2>
      <p >{element.tag}
      </p>
      <div className="card-actions justify-end">
        <Link className="btn btn-outline btn-primary" to={`/product/${element.id}`}>View more
        </Link>
      </div>
    </div>
  </div>
  )
}