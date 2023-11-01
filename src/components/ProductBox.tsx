import React from 'react';
import { Link } from 'react-router-dom';

import { Product } from './Products';
import { config } from '../config/config';
import { useDark } from '../App';

export default function ProductBox({product}: {product: Product}) {
    const {dark} = useDark();
    return (
        <Link to={`/product/${product.id}`} className={`mx-auto ${dark ? 'bg-bg450-inputdark hover:bg-bg450-dark' : 'bg-gray-200 hover:bg-base-200'}  p-4 rounded-xl shadow-xs  transition-all duration-200 hover:-translate-y-1`}>
            <div key={product.id} className="group relative">
                <div className="px-2 pt-2 overflow-hidden rounded-md group-hover:opacity-75 ">
                    <img
                        src={`${config.iconlink}${product.icon}`}
                        alt={product.name + ' icon'}
                        className="max-w-[50%] md:max-w-[75%]  object-cover object-center rounded-md mx-auto"
                    />
                </div>
                <h3 className={`${dark ? 'text-slate-200' : 'text-gray-700'} mt-4 text-xl font-semibold text-center`}>
                    <span className="absolute inset-0" />
                    {product.name}
                </h3>
                <p className={`${dark ? 'text-slate-300' : 'text-black'} mt-1 text-md text-center`}>{product.tag}</p>
            </div>
        </Link>
    );
}