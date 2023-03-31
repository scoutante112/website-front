import React from 'react';
import useSWR from "swr";
import { Link, useParams } from 'react-router-dom';
import { RiInstallLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import BBCode from '@bbob/react';
import presetReact from '@bbob/preset-react';
import Cookies from 'js-cookie';
const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
  
export default function Product() {

  let { id } = useParams(); 
  document.title = "Bagou450 - Product";
  const { data, error, isLoading } = useSWR(`https://api.bagou450.com/api/client/web/addons/getone?id=${id}`, fetcher)
  if(!data || (error || isLoading)) {
    return ( 
      <p>Loading...</p>)
  }
  const addon = data.data;
  console.log(addon)
  document.title = "Bagou450 - " + addon.name;
  const plugins = [presetReact()];
  let theme = Cookies.get('theme');
  if(!theme) {
    theme = 'night'
  }
  return (
    <>

        <div className="flex flex-col w-full border-opacity-50">

    <div className={'grid md:grid-cols-2 mx-8 mt-4 gap-x-4 gap-y-4'}>
        <section className=''><img src={`https://cdn.bagou450.com/assets/img/addons/${addon.id}`} className='min-w-[50%]' alt={addon.name}/></section>
        <section>
            <h1 className='font-bold text-white text-4xl'>{addon.name}
            <br/> <span className='font-normal text-sm'>{addon.tag}</span>
            </h1>
            <div className="stats shadow bg-transparent hidden md:flex">
            <div className="stat">
                <div className="stat-figure text-primary">
                <RxUpdate color='hsl(var(--p))' size={'35px'}/>
                </div>
                <div className="stat-title">Version</div>
                <div className="stat-value text-primary">{addon.version}</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                 <RiInstallLine color={addon.autoinstaller ? 'green' : 'hsl(var(--er))'} size={'35px'}/>
                </div>
                <div className="stat-title">Auto installer</div>
                <div className={addon.autoinstaller ? "stat-value text-success" : "stat-value text-error"}>{addon.autoinstaller ? 'Available' : 'N/A'}</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                <IoCheckmarkCircleOutline color='hsl(var(--in))' size={'35px'}/>
                </div>
                <div className="stat-title">Compatible</div>
                <div className="stat-value text-info ">1.X</div>
            </div>
            
            </div>
            <p className='text-4xl mt-12'>{addon.price}€</p>
            {addon.price === 0 ? (
<>
<p className='text-2xl'>Download on:</p>

<div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 mt-2'>{addon.link.map((element: any, key: React.Key | null | undefined) => {
    return <p key={key}>{element.name === 'bbb' ?
<a href={element.link} target='_blank' rel="noreferrer"><button className="btn btn-outline btn-secondary">BuiltByBits</button></a>
: element.name === 'ssx' ?
<a href={element.link} target='_blank' rel="noreferrer"><button className="btn btn-outline">SourceXChange</button></a>
: element.name === 'pm' ?
<a href={element.link} target='_blank' rel="noreferrer"><button className="btn btn-outline btn-warning">PterodactylMarket</button></a>
: null}</p>
})}
</div></>
            ) : (
                <div  className='mt-4'>
                <Link to={`/product/purchase/${id}`}><button className="btn btn-outline btn-primary"  data-theme={theme}>Buy Now</button></Link>
                </div>
            )}
            
            <div className='mt-8'>
                    {addon.link.map((element: any, key: React.Key | null | undefined) => {
    return element.name === 'bbb' && (
        <p key={key} className='text-white text-xl'>Please notice that if you want to buy this product trough <span className='font-bold'>PayPal</span> you can use
    <Link to={`/product/purchase/${id}`} className='text-blue-500'> BuiltByBits</Link>
    </p>
)})}
</div>
        </section>
    </div>
  <div className="divider">Description</div>
    <section className='mx-auto text-center'><BBCode plugins={plugins} className='mx-auto text-center'>{addon.description}    </BBCode></section>
    </div>
<section className='min-h-screen'></section>
    </>
  );
}
