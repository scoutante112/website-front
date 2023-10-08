import { useFormik } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import getLicenses from "../api/licenses/getLicenses";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CheckIcon } from "@heroicons/react/24/solid";

const form = object({
  userid: string().required("This field is required")
});
export default function Licenses() {
  const [boughtlocation, setBoughtlocation] = useState<string>("bgshop");
  const formik = useFormik({
    initialValues: { userid: "" },
    validationSchema: form,
    onSubmit: (values) => {
      setLicense(true);

      getLicenses(values.userid, boughtlocation).then(() => {
        toast.success(boughtlocation === "bbb" ? "Your license has been set trough BuiltByBit conversation. Please check your BuiltByBit message center." : "Your license has been sent to your email (check your spam)!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
      }).catch(() => {
        toast.error("Error from the api. Maybe you selected the bad store? Refresh the page and retry!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
      });
    }
  });
  document.title = "Bagou450 - Licenses";

  const [selected, setSelected] = useState<boolean>(false);
  const [license, setLicense] = useState<boolean>(false);
  return (
    <>
      <div className="text-center my-4">
        <ToastContainer />

        <div>
          <h1 className="text-white text-4xl">
            Licenses

          </h1>
          <div>

            <div className="lg:border-b lg:border-t lg:border-gray-200 mb-4">
              <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                <ol
                  role="list"
                  className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                >
                  <li className="relative overflow-hidden lg:flex-1">
                    <div className="overflow-hidden border border-gray-200 lg:border-0">
                      <a href="#" className="group">
                        <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
                        <span className="flex items-center px-6 py-5 text-sm font-medium">
              <span className="flex-shrink-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                  <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </span>
              <span className="ml-4 flex min-w-0 flex-col">
                <span className="text-sm font-medium">Select the store</span>
              </span>
            </span>
                      </a>
                    </div>
                  </li>
                  <li className="relative overflow-hidden lg:flex-1">
                    <div className="overflow-hidden border border-gray-200 lg:border-0">
                      <a href="#" className={selected ? 'group' : 'group'}>
                        <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
                        <span className="flex items-center px-6 py-5 text-sm font-medium">
              <span className="flex-shrink-0">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${selected ? 'border-indigo-600' : 'border-gray-300'}`}>
                  <span className={selected ? 'text-indigo-600' : 'text-gray-500'}>2</span>
                </span>
              </span>
              <span className="ml-4 flex min-w-0 flex-col">
                <span className={`text-sm font-medium ${selected ? 'text-indigo-600' : 'text-gray-500'}`}>Enter your informations</span>
              </span>
            </span>
                      </a>
                    </div>
                  </li>
                  <li className="relative overflow-hidden lg:flex-1">
                    <div className="overflow-hidden border border-gray-200 lg:border-0">
                      <a href="#" className={license ? 'group' : 'group'}>
                        <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true" />
                        <span className="flex items-center px-6 py-5 text-sm font-medium">
              <span className="flex-shrink-0">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${license ? 'border-indigo-600' : 'border-gray-300'}`}>
                  <span className={license ? 'text-indigo-600' : 'text-gray-500'}>3</span>
                </span>
              </span>
              <span className="ml-4 flex min-w-0 flex-col">
                <span className={`text-sm font-medium ${license ? 'text-indigo-600' : 'text-gray-500'}`}>Get your license</span>
              </span>
            </span>
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>

            <AnimatePresence>  {!selected ? (
                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                  <p className="mb-2 mt-2 text-white text-2xl">Where you bought it?:</p>

                  <div className={" grid xl:grid-cols-2 gap-x-8 gap-y-8 mx-16"}>
                    <div id="slide1" className="carousel-item relative w-full bg-gray-300 p-8 rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl" onClick={() => {setSelected(true); setBoughtlocation('bgshop');}}>
                      <img src="https://cdn.bagou450.com/assets/img/bgshop.webp" alt="Bagou450 Shop"
                           className="mx-auto max-w-screen-md" />

                    </div>
                    <div id="slide2" className="carousel-item relative w-full bg-gray-300 p-8 rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl" onClick={() => {setSelected(true); setBoughtlocation('bbb');}}>
                      <img src="https://cdn.bagou450.com/assets/img/bbb.webp" alt="BuiltByBits"
                           className="mx-auto max-w-screen-md" />

                    </div>
                    <div id="slide3" className="carousel-item relative w-full bg-gray-300 p-8 flex items-center justify-center rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl" onClick={() => {setSelected(true); setBoughtlocation('ssx');}}>
                      <p className="mx-auto font-bold max-w-screen-md text-4xl">sourceXchange</p>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full bg-gray-300 p-8 rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl">
                      <img src="https://cdn.bagou450.com/assets/img/pm.webp" alt="Pterodactyl Market" onClick={() => {setSelected(true); setBoughtlocation('pm');}}
                           className="mx-auto max-w-screen-md" />

                    </div>
                  </div>


                </motion.div>

              )

              :
              null
            }</AnimatePresence>

            <AnimatePresence>
              {boughtlocation === "bgshop" && selected ? (

                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} className={'text-black'}>
                  Sorry but this is not available for the moment
                </motion.div>
              ) : boughtlocation === "ssx" && selected ? (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>

                    <p className="mb-2 mt-2 text-black text-2xl">Enter your email:</p>
                    <div className="mt-4 justify-center">
                      <form onSubmit={formik.handleSubmit}>
                        <input id="userid"
                               name="userid"
                               type="userid"
                               placeholder="email@exemple.com"
                               onChange={formik.handleChange}
                               required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 " />
                        <br />
                        <button         className="rounded bg-blue-50 px-12 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
                                        type="submit" disabled={license}>
                          Submit
                        </button>
                      </form>
                    </div>

                  </motion.div>

                )
                : boughtlocation === "pm" && selected ? (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }} className={'text-black'}>
                    If you bought it on Pterodactyl Market please just use your PayPal transaction id as License
                  </motion.div>
                ) : boughtlocation === "bbb" && selected ? (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>
                    <p className="mb-2 mt-2 text-black text-2xl" >Enter your User id:</p>
                    <div className="mt-4 justify-center">
                      <form onSubmit={formik.handleSubmit}>
                        <input id="userid"
                               name="userid"
                               type="userid"
                               placeholder="187451"
                               onChange={formik.handleChange}
                               required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-2 " />
                        <br />
                        <button         className=" my-2 rounded bg-blue-50 px-12 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
                                        type="submit" disabled={license}>
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="text-center mx-auto">
                      <h4 className="text-black text-2xl">How to find your UserId?</h4>
                      <p className={'text-black opacity-90'}>For find your user id go on <a href={"https://builtbybits.com"} target="_blank"
                                                        rel="noreferrer">BuiltByBits</a> and click on your account.
                        <br /> After click on your username for go on your account page.
                        <br />When you are on the account page check the url you normally see at end something like
                        "bagou450.<span className="font-bold">187451</span>".
                        <br />You need to take the number after your username.
                        <br />Here with this exemple the id is 187451! If you need more help see the screenshot. </p>
                      <img src={"https://cdn.bagou450.com/assets/img/findbbbuserid.webp"}
                           className="h-[50%] w-[50%] mx-auto text-center" alt={"Find BuiltByBits username"} />
                    </div>
                  </motion.div>
                ) : selected && (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>
                    <p className="text-red-500">Error 784-481 : Please reload the page</p>
                  </motion.div>
                )
              }
            </AnimatePresence>

          </div>
        </div>
      </div>
      <div className="mx-auto text-center ">
        <h2 className="text-white text-2xl mb-4">Some statistics</h2>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Licenses</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  750
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Daily usage</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  25 000
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Uptime</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  99.99%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>


    </>
  );
}
