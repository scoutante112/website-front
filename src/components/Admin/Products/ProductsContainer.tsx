import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import Loading from "../../Elements/Loading";
import NavBarAccount from "../../Account/NavBarAccount";
import CategoryContainer from "../Blogs/CategoryContainer";
import NewsContainer from "../Blogs/NewsContainer";
import editUser from "../../../api/admin/users/editUser";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import editAccountInformations from "../../../api/account/editAccountInformations";
import { array, boolean, number, object, string } from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { debounce } from "debounce";
import Pagination from "../../Elements/Pagination";
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css';
import editProduct from "../../../api/admin/products/editProduct";
import EditProductButton from "./EditProductButton";
import NewProductButton from "./NewProductButton";


export interface Product {
  id: number;
  name: string;
  tab: boolean;
  tabroute: string | null;
  new: boolean;
  version: number;
  created_at: string;
  updated_at: string;
  sxcname: string | null;
  licensed: boolean;
  bbb_id: number | null;
  tag: string;
  description: string;
  link: {
    name: string;
    link: string;
  }[];
  autoinstaller: boolean;
  price: number;
  stripe_id: string;
  stripe_price_id: string;
  recurrent: boolean;
}
interface ProductResponse {
  data: Product[];
  total: number;
}

export default function ProductsContainer() {
  const [page, setPage] = useState<number>(1);
  const [perpage, setPerPage] = useState<number>(20);
  const [search, setSearch] = useState<string>('');
  const {data, error, isLoading, mutate} = useSWR<ProductResponse>(`${config.privateapilink}/admin/products?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
  if(!data || (error || isLoading)) {
    return <Loading/>
  }
  console.log(data)
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
  }, 500)
  return (
    <>
      <NavBarAccount tab={'products'}/>
      <h1 className="text-center text-4xl my-2">Products</h1>
      <div className="w-full max-w-7xl mx-auto mb-2 md:flex md:gap-x-2">
        <input type="text" id={'search'} defaultValue={search} placeholder="Search here" className={`input input-bordered input-md w-full `} onChange={(e) => searchValue(e.target.value)}/>
        <NewProductButton page={page} perpage={perpage} search={search}/>
      </div>
      <table className="table w-full max-w-7xl mx-auto border-neutral border-2">
        {/* head */}
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Admin tab</th>
          <th>New</th>
          <th>Version</th>
          <th>Licensed</th>
          <th>Tag</th>
          <th>AutoInstaller</th>
          <th>Price</th>
          <th>Recurrent</th>
          <th></th>

        </tr>
        </thead>
        <tbody>
        {data.data.map((product: Product, index: number) => {
          return (
            <ProductRow product={product} index={index} page={page} perpage={perpage} search={search}/>
          )
        })}
        {/* row 1 */}

        </tbody>
      </table>
      <div className={'text-center mt-2'}>
        <Pagination totalPages={data.total} page={page} setPage={setPage}/>

      </div>
    </>
  )
}

function ProductRow({product, index, page, perpage, search}: {product: Product, index: number, page: number; perpage: number, search: string}) {

  return (
    <tr key={index}>

      <th>{product.id}</th>
      <td>{product.name}</td>
      <td className={product.tab ? 'text-green-500' : 'text-red-500'}>{product.tab ? 'Yes': 'No'}</td>
      <td className={product.new ? 'text-green-500' : 'text-red-500'}>{product.new? 'Yes': 'No'}</td>
      <td>{product.version}</td>
      <td className={product.licensed ? 'text-green-500' : 'text-red-500'}>{product.licensed? 'Yes': 'No'}</td>
      <td>{product.tag}</td>
      <td className={product.autoinstaller ? 'text-green-500' : 'text-red-500'}>{product.autoinstaller ? 'Yes': 'No'}</td>
      <td>{product.price}</td>
      <td className={product.recurrent ? 'text-green-500' : 'text-red-500'}>{product.recurrent ? 'Yes': 'No'}</td>

      <td><EditProductButton product={product} page={page} perpage={perpage} search={search}/></td>
    </tr>
  )
}