import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { useFormik } from "formik";
import { object, string } from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import debounce from "lodash.debounce";
import { fetcher } from "../../api/http";
import editAccountInformations from "../../api/account/editAccountInformations";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import createOrder from "../../api/shop/createOrder";
import Cookies from "js-cookie";
import getDownloadLink from "../../api/shop/getDownloadLink";
import { config } from "../../config/config";
import Spinner from "../Elements/Spinner";
import { MdClose } from "react-icons/md";
import { basketItem } from "../Elements/BasketIcon";


export default function OrdersCallback() {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { data, error: error, isLoading, mutate } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/orders/status?id=${id}`,
    fetcher
  );
  useEffect(() => {
    localStorage.removeItem("basket");
  }, []);


  const navigation = useNavigate();
  if (!data || error || isLoading) {
    return <Spinner />;
  }
  if (!data["status"]) {
    if (data["message"] === "You need to be authentificated.") {
      navigation("/login");
      window.location.reload();
    }

    return <Spinner />;
  }
  /*
  if (!data.data.exist) {
    navigation("/");
  }*/
  const downloadProduct = () => {
    const order = id;
    if(!order) {
      return;
    }
    setLoading(true);
    toast.info("Please wait during the generation of the file...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    getDownloadLink(order)
      .then((data) => {
        fetch(`${config.privateapilink}${data.data.data}`, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        })
          .then((response) => response.blob())
          .then((blob) => {
            // Téléchargement du fichier blob

            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `Bagou450 - Order #${order}.zip`);
            document.body.appendChild(link);
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
              theme: "dark",
            });
          });
      })
      .catch(() => {
        toast.error(
          "An unexcepted error happend. Please contact one of our support team.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      });
    setLoading(false);
  };

  document.title = `Bagou450 - Order #${data.data.order.id}`;

  return (
    <>
      <section className="text-center justify-center mx-auto">
        <h2 className="text-white text-4xl">Order #{data.data.order.id}</h2>
        <h3
          className={`3xl mb-2 ${
            data.data.order.status === "complete"
              ? "text-green-500"
              : data.data.order.status === "expired"
                ? "opacity-80"
                : "text-orange-500"
          }`}
        >
          {data.data.order.status === "complete"
            ? "Completed"
            : data.data.order.status === "expired"
              ? "Expired"
              : "Pending"}
        </h3>
      </section>

      <div>
        <div className="overflow-x-auto mx-24">
          <table className="table w-full">
            {/* head */}
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>

              {data.data.order.status === "complete" && (
                <>
                  <th>License</th>
                </>
              )}
              <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {data.data.order.products.map((item: any, index: number) => {
              return (
                <tr className="hover w-full" key={index}>
                  <td><div className={'flex w-full gap-x-2'}><img src={`https://cdn.bagou450.com/assets/img/addons/${item.id}`} className={'h-16 w-16'}/><div className={'my-auto'}>{item.name}</div></div></td>
                  <td>{item.tag}</td>
                  <td className={`${item.license ? 'opacity-100': 'opacity-80'}`}>{item.license ? item.license : 'No license'}</td>
                  <td>{item.price}€</td>
<td></td>

                </tr>
              )
            })}

            <tr>
              <td className={'my-2'}>

                <h4 className={'text-xl font-bold'}>Total</h4>
              </td>
              <td></td>
              <td></td>

              <td className={'my-2'}>
                <h4 className="text-xl font-bold">{(data.data.order.products.reduce((total: any, item: { price: any; }) => total + item.price, 0)).toFixed(2)}€</h4>

              </td>
              <td><button className={'btn btn-outline btn-primary outline-0'} onClick={() => downloadProduct()}>Download product{data.data.order.products.length > 1 ? 's' : ''}</button></td>

            </tr>
            </tbody>
          </table>
        </div>
        {data.data.order.status === "incomplete" && (
          <div className="flex justify-end mr-12 my-4">
            <button
              className="btn btn-outline btn-primary outline-0"
              onClick={() => window.location.assign(data.data.order.checkout)}
            >
              Complete order
            </button>
          </div>
        )}
      </div>

      <div className="min-h-screen"></div>
    </>
  );
}
