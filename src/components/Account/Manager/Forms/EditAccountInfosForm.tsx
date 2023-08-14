import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useFormik } from "formik";
import { object, string } from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import editAccountInformations from "../../../../api/account/editAccountInformations";
import { fetcher } from "../../../../api/http";
import Loading from "../../../Elements/Loading";
import { config } from "../../../../config/config";

const form = object({
  society: string().nullable(),
  address: string().required(""),
  city: string().required(""),
  firstname: string().required(""),
  lastname: string().required(""),
  postalcode: string()
    .required("")
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, "The postal code is not correct."),
});
export default function EditAccountInfosForm({
                                               setAddress,
                                             }: {
  setAddress?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");

  const {
    data,
    error: erros,
    isLoading,
    mutate,
  } = useSWR(`${config.privateapilink}/account/getinfos`, fetcher);
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
        society: data.data.society,
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
            toast.success("Success! Your informations was edited.", {
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
            if (setAddress) {
              setAddress(false);
            }
          }
          setLoading(false);
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
          setLoading(false);
        });
    },
  });
  if (!data || error || isLoading) {
    return <Loading />;
  }

  return (
    <section className={"my-4 rounded-lg"}>
      <h2 className="text-2xl my-4 text-center">
        Edit your account informations
      </h2>
      <div
        className={
          error === ""
            ? "hidden alert alert-warning shadow-lg"
            : "flex my-4 alert alert-warning shadow-lg"
        }
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="lg:grid lg:grid-cols-2 gap-x-4"
      >
        <div>
          <label className="label">
            <span className="label-text">
              Society <span className="badge badge-outline">optional</span>
              <br />
              <span className="text-red-500">{formik.errors.society}</span>
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
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="text-red-500">{formik.errors.society}</span>
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            id="city"
            defaultValue={data.data.city ? data.data.city : ""}
            name="city"
            type="city"
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange={formik.handleChange}
            disabled={loading}
            required
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="text-red-500">{formik.errors.city}</span>
          </label>
        </div>
        <div>
          <label className="label mx-auto ">
            <span className="label-text">Address</span>
          </label>
          <input
            id="address"
            name="address"
            type="address"
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange={formik.handleChange}
            disabled={loading}
            required
            defaultValue={data.data.address ? data.data.address : ""}
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="text-red-500">{formik.errors.address}</span>
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
            defaultValue={data.data.postal_code ? data.data.postal_code : ""}
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange={formik.handleChange}
            disabled={loading}
            required
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="text-red-500">{formik.errors.postalcode}</span>
          </label>
        </div>
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
            classes="input w-full input-bordered"
          />
          <label className="label">
            <span className="text-red-500">
              {country === "" ? "You need to select a country" : ""}
            </span>
          </label>
        </div>

        <div>
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
            classes="input w-full input-bordered"
          />
          <label className="label">
            <span className="text-red-500">
              {region === "" ? "You need to select a region" : ""}
            </span>
          </label>
        </div>
        <div>
          <label className="label mx-auto ">
            <span className="label-text">Fist name</span>
          </label>
          <input
            id="firstname"
            name="firstname"
            type="firstname"
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange={formik.handleChange}
            disabled={loading}
            required
            defaultValue={data.data.firstname ? data.data.firstname : ""}
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="text-red-500">{formik.errors.firstname}</span>
          </label>
        </div>
        <div>
          <label className="label mx-auto ">
            <span className="label-text">Last name</span>
          </label>
          <input
            id="lastname"
            name="lastname"
            type="lastname"
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange={formik.handleChange}
            disabled={loading}
            required
            defaultValue={data.data.lastname ? data.data.lastname : ""}
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="text-red-500">{formik.errors.lastname}</span>
          </label>
        </div>

        <div className="flex justify-end col-span-2 mx-2">
          <button
            type="submit"
            disabled={
              loading || formik.errors.postalcode
                ? true
                : formik.errors.address
                  ? true
                  : formik.errors.city
                    ? true
                    : formik.errors.firstname
                      ? true
                      : !!formik.errors.lastname
            }
            className="btn btn-primary btn-outline border-0 w-full lg:max-w-sm my-4 self-end "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
