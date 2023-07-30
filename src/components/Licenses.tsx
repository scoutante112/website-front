import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { object, string } from "yup";
import getLicenses from "../api/licenses/getLicenses";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Cookies from "js-cookie";

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
          theme: "dark"
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
          theme: "dark"
        });
      });
    }
  });
  document.title = "Bagou450 - Licenses";

  const isAscending = (thelist: number[]) => {
    return thelist.every(function(x, i) {
      return i === 0 || x >= thelist[i - 1];
    });
  };
  const [selected, setSelected] = useState<boolean>(false);
  const [info, setInfo] = useState<boolean>(false);
  const [license, setLicense] = useState<boolean>(false);
  let liste = [0, 1, 2, 3, 4];
  while (isAscending(liste) === true) {
    liste = liste.slice().sort(() => Math.random() - 0.5);
  }
  const [captcha, setCaptcha] = useState(liste);
  return (
    <>
      <div className="text-center my-4">
        <ToastContainer />

        <div>
          <h1 className="text-white text-4xl">
            Licenses

          </h1>
          <div>
            <ul className="steps steps-vertical lg:steps-horizontal mb-4">
              <li className="step step-primary">Select the store</li>
              <li className={selected ? "step step-primary" : "step"}>Resolve the captcha</li>
              <li className={info ? "step step-primary" : "step"}>Enter your informations</li>
              <li className={license ? "step step-primary" : "step"}>Get your license</li>
            </ul>
            <AnimatePresence>  {!selected ? (
                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                  <p className="mb-2 mt-2 text-white text-2xl">Where you bought it?:</p>

                  <div className={"carousel max-h-96 my-4 w-full"}>
                    <div id="slide1" className="carousel-item relative w-full">
                      <img src="https://cdn.bagou450.com/assets/img/bgshop.webp" alt="Bagou450 Shop"
                           className="mx-auto max-w-screen-md" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="/licenses#slide4" className="btn btn-circle" onClick={() => {setBoughtlocation("pm"); window.scrollTo(0, 0);}}>❮</a>
                        <a href="/licenses#slide2" className="btn btn-circle" onClick={() => {setBoughtlocation("bbb"); window.scrollTo(0, 0);}}>❯</a>
                      </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                      <img src="https://cdn.bagou450.com/assets/img/bbb.webp" alt="BuiltByBits"
                           className="mx-auto max-w-screen-md" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="/licenses#slide1" className="btn btn-circle" onClick={() => {setBoughtlocation("bgshop"); window.scrollTo(0, 0);}}>❮</a>
                        <a href="/licenses#slide3" className="btn btn-circle" onClick={() => {setBoughtlocation("ssx"); window.scrollTo(0, 0);}}>❯</a>
                      </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                      <img src="https://cdn.bagou450.com/assets/img/ssx.webp" alt="SourceXChange"
                           className="mx-auto max-w-screen-md" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="/licenses#slide2" className="btn btn-circle" onClick={() => {setBoughtlocation("bbb"); window.scrollTo(0, 0);}}>❮</a>
                        <a href="/licenses#slide4" className="btn btn-circle" onClick={() => {setBoughtlocation("pm"); window.scrollTo(0, 0);}}>❯</a>
                      </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                      <img src="https://cdn.bagou450.com/assets/img/pm.webp" alt="Pterodactyl Market"
                           className="mx-auto max-w-screen-md" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="/licenses#slide3" className="btn btn-circle" onClick={() => {setBoughtlocation("ssx"); window.scrollTo(0, 0);}}>❮</a>
                        <a href="/licenses#slide1" className="btn btn-circle" onClick={() => {setBoughtlocation("bgshop"); window.scrollTo(0, 0);}}>❯</a>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-primary mb-4" onClick={() => setSelected(!selected)}>Select this
                    shop
                  </button>

                </motion.div>

              )

              :
              null
            }</AnimatePresence>
            <AnimatePresence>
              {selected && !info &&
                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>

                  <p className="my-2">Sort in ascending order</p>
                  <Reorder.Group axis="y" values={captcha} onReorder={setCaptcha}>
                    {captcha.map((item, key) => (
                      <Reorder.Item key={item} value={item}
                                    className="mx-auto border-2 border-solid border-blue-700 w-32 py-2 my-2">
                        {item}
                      </Reorder.Item>
                    ))}
                    <button className="btn btn-outline btn-primary" onClick={() => {
                      if (isAscending(captcha) === true) {
                        setInfo(true);
                        setSelected(true);

                      } else {
                        toast.error(
                          ["You need to learn how to count no?",
                            "No you are serious here?",
                            "Nope that can't work.",
                            "So if i understand 2 > 5 that right?",
                            "Please read again.",
                            "Hello robot sorry but i can't let you continue."][Math.floor(Math.random() * 5)], {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                          });
                        console.log("error");
                      }
                    }}>Submit
                    </button>
                  </Reorder.Group>

                </motion.div>
              }
            </AnimatePresence>
            <AnimatePresence>
              {boughtlocation === "bgshop" && info ? (

                <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                  Sorry but this is not available for the moment
                </motion.div>
              ) : boughtlocation === "ssx" && info ? (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>

                    <p className="mb-2 mt-2 text-white text-2xl">Enter your email:</p>
                    <div className="mt-4 justify-center">
                      <form onSubmit={formik.handleSubmit}>
                        <input id="userid"
                               name="userid"
                               type="userid"
                               placeholder="email@exemple.com"
                               onChange={formik.handleChange}
                               required
                               className="input input-bordered input-info w-full input-lg max-w-xs" />
                        <br />
                        <button className="btn btn-outline btn-primary mt-4" type="submit" disabled={license}>
                          Submit
                        </button>
                      </form>
                    </div>

                  </motion.div>

                )
                : boughtlocation === "pm" && info ? (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>
                    If you bought it on Pterodactyl Market please just use your PayPal transaction id as License
                  </motion.div>
                ) : boughtlocation === "bbb" && info ? (
                  <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>
                    <p className="mb-2 mt-2 text-white text-2xl">Enter your User id:</p>
                    <div className="mt-4 justify-center">
                      <form onSubmit={formik.handleSubmit}>
                        <input id="userid"
                               name="userid"
                               type="userid"
                               placeholder="187451"
                               onChange={formik.handleChange}
                               required
                               className="input input-bordered input-info w-full input-lg max-w-xs" />
                        <br />
                        <button className="btn btn-outline btn-primary mt-4" type="submit" disabled={license}>
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="text-center mx-auto">
                      <h4 className="text-white text-2xl">How to find your UserId?</h4>
                      <p>For find your user id go on <a href={"https://builtbybits.com"} target="_blank"
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
                ) : info && (
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
        <div className="stats shadow my-4 bg-base-300">

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Licenses</div>
            <div className="stat-value">+750</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div className="stat-title">Daily usage</div>
            <div className="stat-value">+25 000</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
            <div className="stat-title">Uptime</div>
            <div className="stat-value">99.99%</div>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-2">

      </div>

    </>
  );
}
