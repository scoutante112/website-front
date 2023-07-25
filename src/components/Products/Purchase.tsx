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

const form = object({
  society: string().nullable(),
  address: string().required(),
  city: string().required(),
  postalcode: string()
    .required()
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, "The postal code is not correct."),
  firstname: string().required(),
  lastname: string().required(),
});
export default function Purchase() {

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");
  const [accountinfo, setAccinfo] = useState(false);

  const { id } = useParams();
  const {
    data,
    error: erros,
    isLoading,
    mutate,
  } = useSWR(
    `${config.privateapilink}/account/getinfos`,
    fetcher
  );
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
    mutate: mutate2,
  } = useSWR(
    `${config.privateapilink}/addons/getone?id=${id}`,
    fetcher
  );
  const { data: data3, error: error3, isLoading: isLoading3, mutate: mutate3 } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/orders/status?id=${id}`,
    fetcher
  );
  useEffect(() => {
    async function fetchRegion(data: {
      country_name: any;
      data: {
        country: React.SetStateAction<string>;
        country_name: React.SetStateAction<string>;
        region: React.SetStateAction<string>;
        data: { region: string };
      };
      region: any;
    }) {
      const response = await fetch("https://ipapi.co/json/");
      const responseData = await response.json();
      setCountry(
        responseData.country_name && data.data.country === ""
          ? responseData.country_name
          : data.data.country !== ""
          ? data.data.country
          : ""
      );
      setRegion(
        responseData.region && data.data.region === ""
          ? responseData.region
          : data.data.region !== ""
          ? data.data.region
          : ""
      );
    }
    if (data && !erros && !isLoading) {
      formik.setValues({
        society: data.data.society ? data.data.society : "",
        address: data.data.address ? data.data.address : "",
        city: data.data.city ? data.data.city : "",
        postalcode: data.data.postal_code ? data.data.postal_code : "",
        lastname: data.data.lastname ? data.data.lastname : "",
        firstname: data.data.firstname ? data.data.firstname : "",
      });
      setCountry(data.data.country);
      setRegion(data.data.region);
      fetchRegion(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleCountryChange = (value: React.SetStateAction<string>) => {
    setCountry(value);
  };

  const handleRegionChange = (value: React.SetStateAction<string>) => {
    setRegion(value);
  };

  const formik = useFormik({
    initialValues: {
      society: "",
      address: "",
      city: "",
      postalcode: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: form,
    onSubmit: (values) => {
      console.log(region);
      setLoading(true);
      if (region === "" || !region) {
        setError("You need to select a State/Region");
        setLoading(false);
        return;
      }
      if (country === "" || !country) {
        setError("You need to select a Country");
        setLoading(false);
        return;
      }
      setError("");
      editAccountInformations(
        values.society,
        values.address,
        values.city,
        region,
        values.postalcode,
        country,
        values.firstname,
        values.lastname
      )
        .then((data) => {
          if (data.data["status"] === "error") {
            toast.error(data.data["message"], {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setLoading(false);
          } else {
            mutate();
            setAccinfo(true);
            setLoading(false);
          }
          setLoading(false);
        })
        .catch((e) => {
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
          setLoading(false);
        });
    },
  });
  const navigation = useNavigate();
  if (!data || error || isLoading) {
    return <></>;
  }
  if (!data["status"]) {
    if (data["message"] === "Unauthenticated.") {
      navigation("/login");
      window.location.reload();
    }
    mutate();
    return (
      <>
        <Spinner/>
      </>
    );
  }
  
  const makePurchase = (price: number) => {
        createOrder(data2.data.id).then((data) => {
            if(data.status === 'error') {
                return toast.error(
                    data.message,
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

            }

           window.location.href = data.data.data
        }).catch((e) => {
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
        })
  }
  const downloadProduct = (order: string, name: string) => {
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
    getDownloadLink(order).then((data) => {
      fetch(`${config.privateapilink}${data.data.data}`, {headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access_token')}`
      }}).then(response => response.blob()).then(blob => {
          // Téléchargement du fichier blob
          
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${name}.zip`);
          document.body.appendChild(link);
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          toast.success('Your file is now downloaded!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      })     
      
    }).catch(() => {
      toast.error('An unexcepted error happend. Please contact one of our support team.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    })
    setLoading(false);

  }
  if ((!data2 || error2 || isLoading2) || (!data3 || error3 || isLoading3)) {
    return <p>Loading...</p>;
  }
  document.title = "Bagou450 - " + data3.data.exist ? "Order completed" : "Purchase " + data2.data.name;

  return (
    <>
      <section
        className="text-center justify-center mx-auto"
      >
        <h2 className="text-white text-4xl">{data3.data.exist ? 'Thanks for your order!' : `Purchase ${data2.data.name}`}</h2>
        <ul className="steps mx-auto text-center my-4">
          <li className="step step-primary">Enter your informations</li>
          <li className={accountinfo || data3.data.exist ? "step step-primary" : "step"}>
            Summary
          </li>
          <li className={data3.data.exist ? "step step-primary" : "step"}>Purchase</li>
          <li className={data3.data.exist ? "step step-primary" : "step"}>Receive Product</li>
        </ul>
      </section>
      {!data3.data.exist ? (
      <><AnimatePresence>
                  {!accountinfo && (
                      <motion.div
                          initial={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={"my-4 rounded-lg "}
                      >
                          <div
                              className={error === ""
                                  ? "hidden alert alert-warning shadow-lg"
                                  : "flex my-4 alert alert-warning shadow-lg"}
                          >
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="stroke-current flex-shrink-0 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>{error}</span>
                              </div>
                          </div>

                          <form
                              onSubmit={formik.handleSubmit}
                              className="grid grid-cols-2 gap-x-4"
                          >
                              <div className="mx-auto w-full max-w-sm">
                                  <div>
                                      <label className="label mx-auto">
                                          <span className="label-text">
                                              Society{" "}
                                              <span className="badge badge-outline">optional</span>
                                              <br />
                                              <span className="text-red-500">
                                                  {formik.errors.society}
                                              </span>
                                          </span>
                                      </label>
                                      <input
                                          id="society"
                                          name="society"
                                          type="society"
                                          defaultValue={data.data.society}
                                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                          onChange={formik.handleChange}
                                          disabled={loading}
                                          className="input input-bordered w-full  max-w-sm" />
                                      <label className="label">
                                          <span className="text-red-500">
                                              {formik.errors.society}
                                          </span>
                                      </label>
                                  </div>
                                  <div>
                                      <label className="label">
                                          <span className="label-text">City</span>
                                      </label>
                                      <input
                                          id="city"
                                          defaultValue={data.data.city}
                                          name="city"
                                          type="city"
                                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                          onChange={formik.handleChange}
                                          disabled={loading}
                                          required
                                          className="input input-bordered w-full max-w-sm" />
                                      <label className="label">
                                          <span className="text-red-500">{formik.errors.city}</span>
                                      </label>
                                  </div>
                                  <div>
                                      <label className="label mx-auto ">
                                          <span className="label-text">Adress</span>
                                      </label>
                                      <input
                                          id="address"
                                          name="address"
                                          type="address"
                                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                          onChange={formik.handleChange}
                                          disabled={loading}
                                          required
                                          defaultValue={data.data.address}
                                          className="input input-bordered w-full max-w-sm" />
                                      <label className="label">
                                          <span className="text-red-500">
                                              {formik.errors.address}
                                          </span>
                                      </label>
                                  </div>

                                  <div>
                                      <label className="label mx-auto ">
                                          <span className="label-text">Postal code</span>
                                      </label>

                                      <input
                                          id="postalcode"
                                          name="postalcode"
                                          type="postalcode"
                                          defaultValue={data.data.postal_code}
                                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                          onChange={formik.handleChange}
                                          disabled={loading}
                                          required
                                          className="input input-bordered w-full max-w-sm " />
                                      <label className="label">
                                          <span className="text-red-500">
                                              {formik.errors.postalcode}
                                          </span>
                                      </label>
                                  </div>
                              </div>
                              <div className="mx-auto">
                                  <div>
                                      <label className="label mx-auto">
                                          <span className="label-text">Country</span>
                                      </label>
                                      <CountryDropdown
                                          id="country"
                                          name="country"
                                          value={country}
                                          onChange={handleCountryChange}
                                          disabled={loading}
                                          classes="input w-full input-bordered w-full max-w-sm" />
                                  </div>
                                  <label className="label">
                                      <span className="text-red-500">
                                          {country === "" ? "You need to select a country" : ""}
                                      </span>
                                  </label>
                                  <div className="">
                                      <label className="label mx-auto">
                                          <span className="label-text">State/Region</span>
                                      </label>
                                      <RegionDropdown
                                          id="region"
                                          name="region"
                                          country={country}
                                          value={region}
                                          onChange={handleRegionChange}
                                          disabled={loading}
                                          classes="input w-full input-bordered w-full max-w-sm" />
                                      <label className="label">
                                          <span className="text-red-500">
                                              {region === "" ? "You need to select a region" : ""}
                                          </span>
                                      </label>
                                  </div>
                                  <div>
                                      <label className="label mx-auto ">
                                          <span className="label-text">First name</span>
                                      </label>

                                      <input
                                          id="firstname"
                                          name="firstname"
                                          type="firstname"
                                          defaultValue={data.data.firstname}
                                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                          onChange={formik.handleChange}
                                          disabled={loading}
                                          required
                                          className="input input-bordered w-full max-w-sm " />
                                      <label className="label">
                                          <span className="text-red-500">
                                              {formik.errors.firstname}
                                          </span>
                                      </label>
                                  </div>
                                  <div>
                                      <label className="label mx-auto ">
                                          <span className="label-text">Last Name</span>
                                      </label>

                                      <input
                                          id="lastname"
                                          name="lastname"
                                          type="lastname"
                                          defaultValue={data.data.lastname}
                                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                          onChange={formik.handleChange}
                                          disabled={loading}
                                          required
                                          className="input input-bordered w-full max-w-sm " />
                                      <label className="label">
                                          <span className="text-red-500">
                                              {formik.errors.lastname}
                                          </span>
                                      </label>
                                  </div>
                              </div>

                              <div className="flex justify-center col-span-2">
                                  <button
                                      type="submit"
                                      onClick={() => formik.submitForm}
                                      disabled={loading || formik.errors.postalcode
                                          ? true
                                          : false || formik.errors.address
                                              ? true
                                              : false || formik.errors.city
                                                  ? true
                                                  : false || formik.errors.firstname
                                                      ? true
                                                      : false || formik.errors.lastname
                                                          ? true
                                                          : false}
                                      className="btn btn-primary btn-outline w-full max-w-sm my-4 self-end "
                                  >
                                      Next Step
                                  </button>
                              </div>
                          </form>
                      </motion.div>
                  )}
              </AnimatePresence><AnimatePresence>
                      {accountinfo && (
                          <motion.div
                              initial={{ opacity: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                          >
                              <div className="overflow-x-auto mx-24">
                                  <table className="table w-full">
                                      {/* head */}
                                      <thead>
                                          <tr>
                                              <th></th>
                                              <th>Name</th>
                                              <th>Description</th>
                                              <th>Price</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr className="hover">
                                              <th>1</th>
                                              <td className="flex gap-x-2">
                                                  <img
                                                      src={`https://cdn.bagou450.com/assets/img/addons/${data2.data.id}`}
                                                      alt={data2.data.name}
                                                      className="max-w-12 max-h-12 rounded-lg shadow-2xl" />
                                                  <span className="my-auto">{data2.data.name}</span>
                                              </td>
                                              <td>{data2.data.tag}</td>
                                              <th className="textbold">{data2.data.price}€</th>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <div className="grid md:grid:cols-2">
                                  <div className="ml-24">
                                      <h2 className="text-white text-2xl">Your informations:</h2>
                                      <p>
                                          <strong>Name:</strong> {data.data.lastname} {data.data.lastname}
                                      </p>
                                      <p>
                                          <strong>Country: </strong>
                                          {data.data.country}
                                      </p>
                                      <p>
                                          <strong>Region: </strong>
                                          {data.data.region}
                                      </p>
                                      <p>
                                          <strong>Address: </strong>
                                          {data.data.address}
                                      </p>
                                      <p>
                                          <strong>City: </strong>
                                          {data.data.city}
                                      </p>
                                      <p>
                                          <strong>Postal code: </strong>
                                          {data.data.postal_code}
                                      </p>
                                  </div>
                                  <div className="ml-auto mr-24">
                                      <p className="my-2">
                                          <strong>Price: </strong>
                                          {data2.data.price}€
                                      </p>
                                      <p className="my-2">
                                          <strong>Fees: </strong>
                                          0.35€
                                      </p>
                                      <p className="text-xl mt-2">
                                          <strong>Total Price: </strong>
                                          <strong className="text-bold">{data2.data.price + 0.35}€</strong>
                                      </p>
                                  </div>
                              </div>
                              <div className="flex justify-end mr-12 my-4">
                                  <button className="btn btn-outline btn-primary" onClick={() => makePurchase(data2.data.price + 0.35)}>Purchase (With bank card)</button>
                              </div>
                          </motion.div>
                      )}
                  </AnimatePresence></>
      ) :
      (
        <div>
            <p className="text-3xl text-center">Order status: <span className={data3.data.order.status === 'complete' ? 'text-green-500' : 'text-red-500'}>{data3.data.order.status.toUpperCase()}</span></p>
            <p className="text-2xl text-center">Order content:</p>
            <div className="overflow-x-auto mx-24">
                                  <table className="table w-full">
                                      {/* head */}
                                      <thead>
                                          <tr>
                                              <th></th>
                                              <th>Name</th>
                                              <th>Description</th>
                                              <th>Price</th>
                                              {data3.data.order.status === 'complete' && (<>{data3.data.order.license &&<th> License</th>}<th>Download</th></>)}
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr className="hover">
                                              <th>1</th>
                                              <td className="flex gap-x-2">
                                                  <img
                                                      src={`https://cdn.bagou450.com/assets/img/addons/${data2.data.id}`}
                                                      alt={data2.data.name}
                                                      className="max-w-12 max-h-12 rounded-lg shadow-2xl" />
                                                  <span className="my-auto">{data2.data.name}</span>
                                              </td>
                                              <td>{data2.data.tag}</td>
                                              <th className="textbold">{data2.data.price}€</th>
                                              {data3.data.order.status === 'complete' && (<>{data3.data.order.license &&<td> {data3.data.order.license}</td>}<th><button className="btn mx-4" onClick={() => downloadProduct(data3.data.order.id, data2.data.name)} disabled={loading}>Download</button></th></>)}

                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              {data3.data.order.status === 'incomplete' && (
                              <div className="flex justify-end mr-12 my-4">
                                  <button className="btn btn-outline btn-primary" onClick={() => window.location.assign(data3.data.order.checkout)}>Complete order</button>
                              </div>
)}
        </div>
      )
}
<div className="min-h-screen"></div>

    </>
  );
}
