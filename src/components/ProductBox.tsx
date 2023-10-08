import React from "react";
import { Link } from "react-router-dom";

import { Product } from "./Products";

export default function ProductBox({product, key}: {product: Product, key: number}) {

  return (
    <Link to={`/product/${product.id}`} className={'bg-[#d8dde5] p-4 rounded-xl shadow-2xl  hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 '}>
      <div key={product.id} className="group relative">
        <div className="px-2 pt-2 w-full overflow-hidden rounded-md group-hover:opacity-75 ">
          <img
            src={`https://beta-api.bagou450.com/storage/logos/${product.id}.webp`}
            alt={product.name + " icon"}
            className="min-w-[50%] object-cover object-center rounded-md"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-700">
            <span className="absolute inset-0" />
            {product.name}
        </h3>
        <p className="mt-1 text-md text-black">{product.tag}</p>
      </div>
    </Link>
  )
}