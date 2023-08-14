import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import deleteLicense from "../../../api/licenses/deleteLicense";
import { fetcher } from "../../../api/http";
import NavBarAccount from "../NavBarAccount";
import Loading from "../../Elements/Loading";
import { config } from "../../../config/config";
import resetLicense from "../../../api/admin/licenses/resetLicense";
import createOrder from "../../../api/shop/createOrder";
import { object, string } from "yup";
import { useFormik } from "formik";
import linkLicense from "../../../api/licenses/linkLicense";
import { FaXmark } from "react-icons/fa6";

interface License {
  product: string;
  usage: number;
  version: string;
  order_id: number;
  maxusage: number;
  product_id: number;
  license: string;
  ip: string[];
}
export default function AccountLicenseContainer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [isHovered, setHovered] = useState<boolean>(false);

  const { data, mutate, error, isLoading } = useSWR(
    `${config.privateapilink}/license`,
    fetcher
  );
  const form = object({
    license: string().required('You need to enter a license').min(8),
  });

  const formik = useFormik({
    initialValues: { license: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      linkLicense(values.license).then(() => {
        mutate();
        setLoading(false)
        toast.success(`License added successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });
        //@ts-ignore
        window.addlicense.close()
      }).catch((e) => {
        toast.error(`Error: ${e.response.data.message}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
        });

        setLoading(false);

      });
    }
  });
  if (!data || error || isLoading) {
    return <Loading />;
  }

  document.title = "Bagou450 - My license";
  return (
    <>
      <NavBarAccount tab={"licenses"} />
      <section className="mx-2 md:mx-8 my-4">
        <dialog id="addlicense" className="modal">

          <form onSubmit={formik.handleSubmit} className="modal-box">
            <h3 className="font-bold text-lg">Add license</h3>
            <FaXmark className={`ml-auto text-xl transition-colors duration-200 mt-1 absolute right-2 top-2 ${isHovered ? 'text-red-700' : ''}`}
                     onMouseEnter={() => setHovered(true)}
                     onMouseLeave={() => setHovered(false)}
                     onClick={() => {
                       //@ts-ignore
                       window.addlicense.close()
                     }}
            />
            <h2 className={'opacity-80 text-sm'}>You can link a already exist license to this account here.</h2>
            <div>
              <label className="label">
                <span className="label-text">License</span>

              </label>
              <input id="license"
                     name="license"
                     type="license"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full  mx-2" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.license}</span>
              </label>
            </div>
            <div className="modal-action">
              <button className="btn btn-primary btn-outline mx-2 border-0" type='submit' disabled={loading || !formik.dirty || !formik.isValid}>Add license</button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div>
          {data.data["license"].length > 0 ? (
            <>
              <p className="text-center text-xl my-6">
                Please notice that these licenses are linked to your account. To
                transfer a license to another account, please{" "}
                <Link to={"/contact"} className="text-blue-500">
                  contact us
                </Link>
                .
              </p>
              <div className="alert my-4 mx-auto max-w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>You have a US server? Consider using our US server instead of the European server. For more information, please <Link to={'/contact'} className={'text-blue-500'}>contact us</Link>.</span>
              </div>
              <div className={'text-right mb-4 mx-2 md:mx-8'}>
                <button className={'btn btn-wide btn-secondary btn-outline outline-0'} onClick={() => {
                  //@ts-ignore
                  window.addlicense.showModal();
                }}>Add license</button>
              </div>
              <table className="table w-full border-2 border-solid border-neutral-content dark:border-neutral">
                {/* head */}
                <thead>
                <tr>
                  <th className={"hidden md:table-cell"}></th>
                  <th>Product</th>
                  <th className={"hidden xl:table-cell"}>Ip</th>
                  <th>Usage</th>
                  <th className={"hidden 2xl:table-cell"}>License</th>
                  <th>Version</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.data["license"].map(
                  (license: License, key: number) => {
                    return (
                    <LicenseRow license={license} mutate={mutate} index={key}/>
                    );
                  }
                )}
                </tbody>
              </table>
            </>
          ) : (
            <>

              <div className={'text-right mb-4 mx-2 md:mx-8'}>
                <button className={'btn btn-wide btn-secondary btn-outline outline-0'} onClick={() => {
                  //@ts-ignore
                  window.addlicense.showModal();
                }}>Add license</button>
              </div>
            <p className={"text-center opacity-80"}>
              No licenses found for this account.
            </p>
            </>
          )}
        </div>
      </section>
      <section className="min-h-screen"></section>
    </>
  );
}


function LicenseRow({license, mutate, index}: {license: License, mutate: any, index: number}) {
  const [ipData, setIpData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const resettheLicense = () => {
    setLoading(true);
    resetLicense(license.license).then(() => {
      mutate();
      toast.success('License has been reset successfully.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });
      setLoading(false)
    }).catch(() => {
      toast.error('An unexcepted error happend. Please contact one of our support team.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });
      setLoading(false)
    })
  }
  const buyUsage = () => {
    setLoading(true);
    createOrder([license.product_id], true).then((data) => {
      setLoading(false);
      if(data.data.status === 'success') {
        window.location.href = data.data.data;
      }
    }).catch(() => {
      setLoading(false)
      toast.error('An unexcepted error happend. Please contact one of our support team.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      });
    });
  }
  return (
    <tr key={index}>
      <th className={"hidden md:table-cell"}>{index}</th>
      <td>{license["product"]}</td>
      <td className={"hidden xl:table-cell"}>
        {license["ip"] ? (
          license["ip"].length === 0 ? (
            <p>No ip for this license.</p>
          ) : (
            license["ip"].map(
              (
                ip:
                  | string
                  | number
                  | boolean
                  | React.ReactPortal
                  | React.ReactElement<
                  any,
                  | string
                  | React.JSXElementConstructor<any>
                >
                  | null
                  | undefined,
                key: number
              ) => {
                const handleMouseEnter = async () => {
                  const response = await fetch(
                    `https://ipapi.co/${ip}/json/`
                  );
                  const data = await response.json();

                  setIpData(data);
                };
                return (
                  <div
                    className="dropdown dropdown-right dropdown-hover"
                    key={key + 50}
                  >
                    <label
                      tabIndex={0}
                      className="btn m-1 btn-neutral z-1"
                      onMouseEnter={handleMouseEnter}
                    >
                      {ip}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-10"
                    >
                      {ipData ? (
                        <>
                          <li className="flex">
                            <strong>Country: </strong>
                            {ipData["country_name"]}{" "}
                            <img
                              alt="Flag"
                              src={`https://flagcdn.com/w20/${ipData["country_code"]}.webp`}
                              className={"mx-2"}
                            />
                          </li>
                          <li>
                            <strong>City: </strong>
                            {ipData["city"]}
                          </li>
                          <li>
                            <strong>Region: </strong>
                            {ipData["region"]}
                          </li>
                          <li>
                            <strong>Asn: </strong>
                            {ipData["asn"]}
                          </li>
                          <li>
                            <strong>Org: </strong>
                            {ipData["org"]}
                          </li>
                          <li>
                            <button
                              className="btn btn-outline btn-error border-0 mt-3"
                              onClick={() => {
                                deleteLicense(
                                  license["license"],
                                  ip
                                )
                                  .then(() => {
                                    mutate();
                                    toast.success(
                                      `${ip} was removed successfully.`,
                                      {
                                        position:
                                          "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar:
                                          false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
                                      }
                                    );
                                  })
                                  .catch(() => {
                                    toast.error(
                                      "An unexcepted error happend. Please contact one of our support team.",
                                      {
                                        position:
                                          "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar:
                                          false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
                                      }
                                    );
                                  });
                              }}
                            >
                              Delete
                            </button>
                          </li>
                        </>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </ul>
                  </div>
                );
              }
            )
          )
        ) : (
          <p className={'my-auto h-full'}>No ip for this license.</p>
        )}
      </td>
      <td>
        {license["usage"]}/{license["maxusage"]}
      </td>

      <td className={"hidden 2xl:table-cell"}>
        <strong>{license["license"]}</strong>
      </td>
      <td>
        <span>{license["version"]}</span>
      </td>
      <td>
        <button
          className={
            "btn btn-primary btn-outline outline-0"
          }
          disabled={loading}
          onClick={() => buyUsage()}
        >
          Buy usage
        </button>{" "}
        <br />
        <button
          className={
            "btn mt-2 btn-error btn-outline outline-0"
          }
          onClick={() => resettheLicense()}
          disabled={loading}
        >
          Reset
        </button>
        <br/>
        <button
          className={
            "btn mt-2 btn-secondary btn-outline outline-0 2xl:hidden"
          }
          onClick={() => {
            navigator.clipboard.writeText(license['license']);
            toast.success('License copied in clipboard.', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
            });
          }}
          disabled={loading}
        >
          Copy License
        </button>
      </td>
    </tr>
  )
}