import React, { useEffect, useState } from 'react';
import Loading from '../Elements/Loading';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import getNews from '../../api/news/getNews';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import '../Admin/Blogs/toolBar.scss';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { useDark } from '../../App';

interface news {
  id: number;
  author: string;
  tags: string;
  title: string;
  category_id: number;
  views: number;
  slug: string;
  pictures: string;
  content: string;
  created_at: string;
}

export default function NewsCard() {
    const [news, setNews] = useState<news>();
    const { id } = useParams();
    const {dark} = useDark();
    useEffect(() => {
        if(id) {
            getNews(id).then((data) => {
                if(data.data.status === 'success') {
                    setNews(data.data.data);
                    return;
                }
                toast.error('Sorry a unexpected error occurred.', {
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
        }
    }, []);
    if(!news) {
        return <Loading/>;
    }
    return (
        <>
            <Helmet>
                <meta name="description" content={`Tags: ${JSON.parse(news.tags).join(', ')}`} />
            </Helmet>
            <h1 className={`${dark ? 'text-slate-300' : 'text-black'} text-center text-4xl mt-4`}>{news.title} <span className={'text-2xl opacity-60'}>by {news.author}</span> <span className={'text-xl opacity-40'}>{moment(news.created_at).fromNow()}</span></h1>
            <h2 className={`${dark ? 'text-slate-300' : 'text-black'} text-center text-black text-2xl mt-4 opacity-80`}>{news.slug}</h2>
            <section className={'mx-8 my-8 ql'}>
                {ReactHtmlParser(news.content)}

            </section>


        </>
    );
}