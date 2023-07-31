import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Loading from "./Elements/Loading";
import { config } from "../config/config";

export default function ProductBox({element, key}: {element: any, key: any}) {

  return (
    <Link to={`/product/${element.id}`}>
      <div className="card card-compact bg-neutral  hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-2xl">
        <figure className={'px-4 pt-4'}>
          <LazyLoad>
            <Suspense fallback={<Loading />}>
              <img src={`${config.privateiconlink}${element.icon}`} alt={element.name + " icon"} className='mt-6 h-52 w-52' width="500" height="500" />
            </Suspense>
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{element.name}
          </h2>
          <p >{element.tag}
          </p>
        </div>
      </div>
    </Link>
  )
}