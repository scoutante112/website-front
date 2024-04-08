import { useEffect, useState } from 'preact/compat';
import Loading from '../Elements/Loading';
import ReactHtmlParser from 'react-html-parser';
import { useNavigate, useParams } from 'react-router-dom';
import getNews from '../../api/news/getNews';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import '../Admin/Blogs/toolBar.scss';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { useDark } from '../../App';
import {sanitize} from 'dompurify';

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
    const navigate = useNavigate();
    const {dark} = useDark();
    useEffect(() => {
        if(id) {
            getNews(id).then((data) => {
                if(data.data.status === 'success') {
                    setNews(data.data.data);
                    return;
                }
                navigate('/');
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
    document.title = `Bagou450 - ${news.title}`;

    return (
        <>
            <Helmet>
                <meta name="description" content={`Tags: ${JSON.parse(news.tags).join(', ')}`} />
            </Helmet>
            <h1 className={`${dark ? 'text-slate-300' : 'text-black'} text-center text-4xl mt-4`}>{news.title} </h1>
            <h2 className={`${dark ? 'text-slate-300' : 'text-black'} text-center opacity-75`} ><span className={'text-2xl opacity-60'}>by {news.author}</span><br/> <span
                className={'text-xl opacity-40'}>{moment(news.created_at).fromNow()}</span></h2>
            <section className={`mx-8 lg:mx-24 xl:mx-32 2xl:mx-48 my-8 ql news rounded-lg p-4 text-justify ${dark ? 'bg-bg450-lessdark ' : 'bg-slate-50'}`}>
                <div className={dark ? 'dark-content' : 'white-content'}>
                    {ReactHtmlParser(sanitize(news.content))}
                </div>
            </section>


        </>
    );
}