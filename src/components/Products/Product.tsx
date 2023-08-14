import React, { lazy, useEffect, useState } from "react";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import { RiInstallLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// @ts-ignore
import Loading from "../Elements/Loading";
import { config } from "../../config/config";
import { basketItem } from "../Elements/BasketIcon";
import { fetcher } from "../../api/http";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import getDownloadOneLink from "../../api/shop/getDownloadOneLink";
import ReactHtmlParser from "react-html-parser";
// @ts-ignore
import 'react-quill/dist/quill.snow.css';
import '../Admin/Blogs/toolBar.scss';
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { id } = useParams();
  const navigate = useNavigate();

  if(!id) {
    navigate('/');
  }
  document.title = "Bagou450 - Product";
  const { data, error, isLoading } = useSWR(`${config.privateapilink}/addons/getone?id=${id}`, fetcher)
  const [basket, setBasket] = useState<basketItem[]>();
  const [inBasket, setInBasket] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [index, setIndex] = React.useState(-1);
  const [images, setImages] = useState<SlideImage[]>([]);

  const retrieveImages = () => {
    const imageElements = document.querySelectorAll('#lightbox img');
    const imageUrls: SlideImage[] = Array.from(imageElements).map((img) => ({
      type: "image",
      src: img.getAttribute("src") || "",
      alt: img.getAttribute("alt") || "",
    }));
    setImages(imageUrls);

  };
  React.useEffect(() => {
    console.log(index)
  }, [index])
  React.useEffect(() => {
    if(data && (!error || !isLoading)) {

      retrieveImages();
    }
  }, [data,error,isLoading]);
  const handleLocalStorageChange = () => {
    const storedBasket = localStorage.getItem("basket");
    if(!storedBasket) {
      setInBasket(false);
      setBasket([]);
      return;
    }
    const basketArray: basketItem[] = JSON.parse(storedBasket);
    setInBasket(basketArray.some((basketelement: basketItem) => basketelement.id.toString() === id));
    setBasket(basketArray)

  };
  useEffect(() => {
    handleLocalStorageChange();
    window.addEventListener('basket', handleLocalStorageChange);

    return () => {
      window.removeEventListener('basket', handleLocalStorageChange);
    };
  }, []);
  if(!data || (error || isLoading)) {
    return (<Loading/>)
  }
  if(data.status === 'error') {
    if(data.message === 'No product found') {
      navigate('/')
    }
  }

  const addon = data.data;
  const downloadProduct = () => {
    setLoading(true);
    toast.info('Please wait during the generation of the file...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    if (id != null) {
      getDownloadOneLink(id).then((data) => {
        fetch(`${config.privateapilink}${data.data.data}?product=${id}`, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("access_token")}`
          }
        }).then(response => response.blob()).then(blob => {

          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `Bagou450-${addon.name}.zip`);
          document.body.appendChild(link);
          link.addEventListener("load", () => {
            URL.revokeObjectURL(url);
          });
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          toast.success("Your file is now downloaded!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
        });

      }).catch(() => {
        toast.error("An unexcepted error happend. Please contact one of our support team.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });

      });
    }

    setLoading(false);

  }

  const addBasket = () => {
    const elements = localStorage.getItem("basket");

    if(elements) {
      const basketArray: basketItem[] = JSON.parse(elements);
      setBasket(basketArray);
    } else {
      setBasket([]);
    }
    const newItem = { id: addon.id, name: addon.name, price: addon.price, tag: addon.tag, icon: addon.icon };
    if(!basket || !basket.length) {
      localStorage.setItem("basket", JSON.stringify([newItem]));
      window.dispatchEvent(new Event("basket"));

      return;
    }
    if (basket.some((basketelement: basketItem) => basketelement.id === addon.id)) {
      return;
    }

    basket.push(newItem);
    const updatedBasket = JSON.stringify(basket);
    localStorage.setItem("basket", updatedBasket);
    window.dispatchEvent(new Event("basket"));

  }
  const findParentWithId = (node: any, id: string): any | null => {
    if (!node) {
      return null;
    }

    if (node.attribs && node.attribs.id === id) {
      return node;
    }

    return findParentWithId(node.parent, id);
  };
  const transformImg = (node: { name: string; attribs: any; parent: any }, index: any) => {
    const lightboxParent = findParentWithId(node.parent, 'lightbox');

    if (node.name === 'img' && lightboxParent && lightboxParent.name === 'div') {
      const { alt } = node.attribs;
      if (alt) {
        return React.createElement('img', {
          ...node.attribs,
          onClick: () => setIndex(parseInt(alt)),
        });
      }
    }
  };


  document.title = "Bagou450 - " + addon.name;
  return (
    <>

        <div className="flex flex-col w-full border-opacity-50">

    <div className={'grid md:grid-cols-2 mx-8 mt-4 gap-x-4 gap-y-4'}>
        <section className=''><img src={`${config.privateiconlink}${addon.icon}`} className='min-w-[50%]' alt={addon.name}/></section>
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
          <div className='hidden'>
          <div className="divider divider-horizontal hidden">OR</div>
          <div className=" h-20 card rounded-box place-items-center grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 mx-8">
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
                <button className={`btn btn-outline outline-0 ${inBasket || loading ? ' btn-secondary btn-disabled' : data.owned ? 'btn-secondary' :' btn-primary'}`} onClick={() => {
                  if(!inBasket && !data.owned) {addBasket()}
                  if(data.owned) {downloadProduct()}

                }}>{inBasket ? 'Already in basket' : data.owned ? 'Download' : 'Add to basket'}</button>
                </div>
            )}
            
        </section>
    </div>
  <div className="divider">Description</div>
          <div className="mockup-browser border bg-base-300 hidden">
            <div className="mockup-browser-toolbar">
              <div className="input">https://daisyui.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
          </div>
          <div className="mockup-phone hidden">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
    <section className='my-4 ql'>
      {ReactHtmlParser(addon.description.replaceAll('rel="noopener noreferrer" target="_blank"', ''), {
        transform: transformImg,
      })}
    </section>
          <Lightbox
            index={index}
            slides={images}
            open={index >= 0}
            close={() => setIndex(-1)}
          />

    </div>
    </>
  );
}
