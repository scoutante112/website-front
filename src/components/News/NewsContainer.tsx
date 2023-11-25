import React, { useState } from 'react';
import useSWR from 'swr';
import { config } from '../../config/config';
import { fetcher } from '../../api/http';
import Loading from '../Elements/Loading';
import { debounce } from 'debounce';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Pagination from '../Elements/Pagination';
import { useDark } from '../../App';
import { Helmet } from 'react-helmet';

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
    document.title = 'Bagou450 - Blog';

    const {dark} = useDark();
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    const {data: blogs, error, mutate, isLoading} = useSWR(`${config.privateapilink}/blogs?search=${search}&category=${category}&page=${page}`, fetcher);
    const {data: categories, error: error2, isLoading: isLoading2} = useSWR(`${config.privateapilink}/categories`, fetcher);

    if((!blogs || (error || isLoading)) || (!categories || (error2 || isLoading2))) {
        if(!categories || (error2 || isLoading2)) {
            return <Loading/>;
        }
        return (
            <div className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>
                <Helmet>
                    <meta name='description' content={'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'} />

                    <meta name="twitter:description" content={'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'} />

                    <meta property="og:description" content={'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'} />
                </Helmet>
                <h1 className={'text-center text-4xl mt-4 mb-2'}>News</h1>
                <div className={' mx-2 text-center grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mb-4'}>
                    <input type="text" placeholder="Search a product" defaultValue={search} className="block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 " onChange={(e) => searchValue(e.target.value)} />
                    <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 " onChange={(e) => setCategory(e.target.value)}>
                        <option disabled selected>Select category</option>
                        {categories.data.map((categorie: categorie, index: number) => {
                            return   <option key={index} value={categorie.id}>{categorie.name}</option>;
                        })}
                    </select>
                </div>
                <Loading/>

            </div>
        );
    }
    const searchValue = debounce((value: string) => {
        setSearch(value);
        setPage(1);
        mutate();
    }, 500);
    return (
        <section className={`${dark ? 'bg-bg450-lessdark' : 'bg-white'} `}>
            <Helmet>
                <meta name='description' content={'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'} />

                <meta name="twitter:description" content={'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'} />

                <meta property="og:description" content={'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'} />
            </Helmet>
            <h1 className={`${dark ? 'text-slate-200' : 'text-black'} text-center text-4xl pt-4 pb-2`}>Blog</h1>
            <div className="flex">
                <div className={' mx-2 mx-auto flex gap-x-2'}>
                    <input
                        type="text"
                        placeholder="Search a product"
                        defaultValue={search}
                        className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`}
                        onChange={(e) => searchValue(e.target.value)}
                    />
                    <select
                        className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option disabled selected>Select category</option>
                        {categories.data.map((categorie: categorie, index: number) => (
                            <option key={index} value={categorie.id}>
                                {categorie.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            <div className={'mx-16 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2'}>
                {blogs.data.map((blog: blog, index: number) => {
                    return <NewsCard blog={blog} key={index}/>;
                })}
            </div>
            <div className="text-center pt-4">
                <div className="join">

                    <Pagination setPage={setPage} totalPages={blogs.totalPage} page={page}/>

                </div>
            </div>
        </section>
    );
}


function NewsCard({blog}: {blog: blog}) {
    const [imageError, setImageError] = useState(false);
    const {dark} = useDark();
    return (
        <Link to={`/blog/${blog.id}`}>
            <div className="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 min-h-full">
                <figure className={'px-4 pt-4'}>
                    <LazyLoad>
                        <img
                            src={imageError ? 'https://placehold.co/800x418' : 'https://beta-api.bagou450.com' + JSON.parse(blog.pictures)[0]}
                            alt={blog.title + ' picture'}
                            className='border-base-content bg-base-300 rounded-lg border border-opacity-5'
                            onError={() => setImageError(true)}
                        />
                    </LazyLoad>

                </figure>
                <div >
                    <h2 className={`${dark ? 'text-slate-300' : 'text-black'} text-center`}>{blog.title}
                    </h2>
                    <p className={`${dark ? 'text-slate-300' : 'text-black'} text-xs opacity-60 text-center`}>{blog.slug}
                    </p>
                </div>
            </div>

        </Link>
    );
}