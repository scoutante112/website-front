import React, { useState } from "react";
import useSWR from "swr";
import { config } from "../../config/config";
import { fetcher } from "../../api/http";
import Loading from "../Elements/Loading";
import { number, string } from "yup";
import { debounce } from "debounce";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
interface categorie {
  id: number;
  name: string;
  slug: string;
}
interface blog {
  id: number;
  author: string;
  tags: string;
  title: string;
  category_id: number;
  views: number;
  slug: string;
  pictures: string;
  content: string;
}

export default function NewsContainer() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const {data: blogs, error, mutate, isLoading} = useSWR(`${config.privateapilink}/blogs?search=${search}&category=${category}&page=${page}`, fetcher)
  const {data: categories, error: error2, isLoading: isLoading2} = useSWR(`${config.privateapilink}/categories`, fetcher)

  if((!blogs || (error || isLoading)) || (!categories || (error2 || isLoading2))) {
    if(!categories || (error2 || isLoading2)) {
      return <Loading/>;
    }
    return (
      <>
        <h1 className='text-center text-4xl mt-4 mb-2'>News</h1>
        <div className={'text-center'}>
          <input type="text" placeholder="Search a product" defaultValue={search} className="input w-full input-bordered max-w-xs mb-4 " onChange={(e) => searchValue(e.target.value)} />
          <select className="select select-bordered w-full max-w-xs mx-2 mb-4" onChange={(e) => setCategory(e.target.value)}>
            <option disabled selected>Select category</option>
            {categories.data.map((categorie: categorie, index: number) => {
              return   <option key={index} value={categorie.id}>{categorie.name}</option>;
            })}
          </select>
        </div>
        <Loading/>

      </>
    )
  }
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
    mutate()
  }, 500)
 console.log(blogs)
  return (
    <section className={'mx-16'}>
      <h1 className='text-center text-4xl mt-4 mb-2'>News</h1>
      <div className={'text-center'}>
        <input type="text" placeholder="Search a product" defaultValue={search} className="input w-full input-bordered max-w-xs mb-4 " onChange={(e) => searchValue(e.target.value)} />
        <select className="select select-bordered w-full max-w-xs mx-2 mb-4" onChange={(e) => setCategory(e.target.value)}>
          <option disabled selected>Select category</option>
          <option value={''}>All</option>
          {categories.data.map((categorie: categorie, index: number) => {
            return   <option key={index} value={categorie.id}>{categorie.name}</option>;
          })}
        </select>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2'}>
        {blogs.data.map((blog: blog, index: number) => {
          return <NewsCard blog={blog} key={index}/>
        })}
      </div>
      <div className="text-center mt-4">
      <div className="join">

        {page > 2 ?
          ( <>
            <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page-2}`} onClick={() => {setPage(page-2); mutate();}} />
            <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page-1}`} onClick={() => {setPage(page-1); mutate();}} />

          </> )
          : page > 1 ?
            ( <>
              <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page-1}`} onClick={() => {setPage(page-1); mutate();}} />

            </>)
            :
            (<></>)
        }
        <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page}`} checked />
        {page+2 <= blogs.totalPage ?
          ( <>
            <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page+1}`} onClick={() => {setPage(page+1); mutate();}} />
            <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page+2}`} onClick={() => {setPage(page+2); mutate();}} />
          </>)
        : page+1 <= blogs.totalPage ?
            ( <>
              <input className="join-item btn btn-square outline-0" type="radio" name="options" aria-label={`${page+1}`} onClick={() => {setPage(page+1); mutate();}} />
            </>)
        : (<></>)}

      </div>
    </div>
    </section>
  )
}


function NewsCard({blog}: {blog: blog}) {
  const [imageError, setImageError] = useState(false);
  console.log(JSON.parse(blog.pictures)[0])
  return (
    <Link to={`/news/${blog.id}`}>
    <div className="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 min-h-full">
      <figure className={'px-4 pt-4'}>
            <LazyLoad>
              <img
                src={imageError ? "https://placehold.co/800x418" : "https://privateapi.bagou450.com" + JSON.parse(blog.pictures)[0]}
                alt={blog.title + " picture"}
                className='border-base-content bg-base-300 rounded-lg border border-opacity-5'
                onError={() => setImageError(true)}
              />
            </LazyLoad>

      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.title}
        </h2>
        <p className={'text-xs opacity-60'}>{blog.slug}
        </p>
      </div>
    </div>

    </Link>
  )
}