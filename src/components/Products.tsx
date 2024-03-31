import React, { Suspense, useState } from 'react';
import useSWR from 'swr';
import { debounce } from 'debounce';
import Loading from './Elements/Loading';
import { config } from '../config/config';
import Pagination from './Elements/Pagination';
import ProductBox from './ProductBox';
import { useDark } from '../App';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    tag: string;
    icon: string;
    price: number;

}

export default function Products() {
    const { dark } = useDark();
    const { t } = useTranslation();
    const lang = Cookies.get('lang');

    const { defaultcat } = useParams();
    const navigate = useNavigate();
    if(defaultcat && !['minecraft','fivem','bundles','management','miscellaneous','bundles'].includes(defaultcat)) {
        navigate('/products/pterodactyl/addons');
    }
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>(defaultcat ? defaultcat == 'fivem' ? 'FiveM' : defaultcat[0].toUpperCase() + defaultcat.slice(1) : '');
    const [page, setPage] = useState<number>(1);
    const { data, mutate, error, isLoading } = useSWR(
        `${config.privateapilink}/addons/get?page=${page}&search=${search}&perpage=20&category=${category}&lang=${lang}`,
        fetcher,
    );

    document.title = `Bagou450 | ${t('products.pageTitle')} ${defaultcat}`;
    if (!data || (error || isLoading)) {
        return (
            <div className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>
                <Helmet>
                    <meta name='description'
                        content={'Discover Bagou450 premium range of Pterodactyl addons, perfect for enhancing your Minecraft and FiveM gaming experiences. Choose our expert installation service for an effortless setup.'} />

                    <meta name='twitter:description'
                        content={'Discover Bagou450 premium range of Pterodactyl addons, perfect for enhancing your Minecraft and FiveM gaming experiences. Choose our expert installation service for an effortless setup.'} />

                    <meta property='og:description'
                        content={'Discover Bagou450 premium range of Pterodactyl addons, perfect for enhancing your Minecraft and FiveM gaming experiences. Choose our expert installation service for an effortless setup.'} />
                </Helmet>
                <h1 className={`${dark ? 'text-white' : 'text-gray-900'} text-2xl text-center font-bold tracking-tight sm:text-4xl py-4`}>
                    <strong>{t('products.title')}{' '}{category !== '' ? `- ${category}` : ''}</strong></h1>
                <h2 className={`${dark ? 'text-white' : 'text-gray-900'} text-center text-md tracking-tight sm:text-lg py-4 font-normal`}>
                    {category == 'Bundles' ?
                        t('products.subtitle.bundles')
                        : category == 'Minecraft' ?
                            t('products.subtitle.minecraft')
                            : category == 'FiveM' ?
                                t('products.subtitle.fivem')
                                : category == 'Management' ?
                                    t('products.subtitle.management')
                                    : category == 'Miscellaneous' ?
                                        t('products.subtitle.miscellaneous')
                                        : t('products.subtitle.all')
                    }
                </h2>
                <Loading />
                <section className='min-h-screen'></section>
            </div>);
    }
    const searchValue = debounce((value: string) => {
        setSearch(value);
        setPage(1);
        mutate();
    }, 500);

    return (
        <div className={dark ? 'bg-bg450-lessdark' : 'bg-white'}>

            <Helmet>
                <meta name='description'
                    content={'Discover Bagou450 premium range of Pterodactyl addons, perfect for enhancing your Minecraft and FiveM gaming experiences. Choose our expert installation service for an effortless setup.'} />

                <meta name='twitter:description'
                    content={'Discover Bagou450 premium range of Pterodactyl addons, perfect for enhancing your Minecraft and FiveM gaming experiences. Choose our expert installation service for an effortless setup.'} />

                <meta property='og:description'
                    content={'Discover Bagou450 premium range of Pterodactyl addons, perfect for enhancing your Minecraft and FiveM gaming experiences. Choose our expert installation service for an effortless setup.'} />
            </Helmet>
            <h1 className={`${dark ? 'text-white' : 'text-gray-900'} text-2xl text-center font-bold tracking-tight sm:text-4xl py-4`}>
                <strong>{t('products.title')}{' '}{category !== '' ? `- ${category}` : ''}</strong></h1>
            <h2 className={`${dark ? 'text-white' : 'text-gray-900'} text-center text-md tracking-tight sm:text-lg py-4 font-normal`}>
                {category == 'Bundles' ?
                    t('products.subtitle.bundles')
                    : category == 'Minecraft' ?
                        t('products.subtitle.minecraft')
                        : category == 'FiveM' ?
                            t('products.subtitle.fivem')
                            : category == 'Management' ?
                                t('products.subtitle.management')
                                : category == 'Miscellaneous' ?
                                    t('products.subtitle.miscellaneous')
                                    : t('products.subtitle.all')
                }
            </h2>
            <div className={'flex gap-x-2 text-center mx-2'}>
                <input type='text' placeholder={t('products.search')} defaultValue={search}
                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} ml-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs mb-4`}
                    onChange={(e) => searchValue(e.target.value)} />
                <select
                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} mr-auto block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`}
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setPage(1);
                    }}>
                    <option disabled selected>{t('products.category.select')}</option>
                    <option value={''}>{t('products.category.all')}</option>
                    <option value={'Minecraft'}>Minecraft</option>
                    <option value={'FiveM'}>FiveM</option>
                    <option value={'Management'}>{t('products.category.management')}</option>
                    <option value={'Miscellaneous'}>{t('products.category.miscellaneous')}</option>
                    <option value={'Bundles'}>{t('products.category.bundles')}</option>
                </select>
            </div>
            <section
                className='grid mx-12 md:grid-cols-2 md:mx-24 lg:grid-cols-3 lg:mx-40 2xl:grid-cols-5 2xl:mx-52 gap-x-3 gap-y-4 '>
                {data.data.map((product: Product) => (
                    <Suspense fallback={<Loading />} key={product.id}>

                        <ProductBox product={product} key={product.id} />
                    </Suspense>
                ))}
            </section>;

            <div className='text-center mt-4'>
                <div className='btn-group'>
                    <Pagination page={page} setPage={setPage} totalPages={data.last_page} />


                </div>

            </div>;

        </div>
    );
}