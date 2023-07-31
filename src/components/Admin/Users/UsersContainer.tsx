import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import Loading from "../../Elements/Loading";
import NavBarAccount from "../../Account/NavBarAccount";
import editUser from "../../../api/admin/users/editUser";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { object, string } from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { debounce } from "debounce";
import Pagination from "../../Elements/Pagination";

interface Discord {
  id: number;
  user_id: number;
  discord_id: string;
  username: string;
  avatar: string;
  discriminator: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface Github {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  github_id: string;
  avatar: string;
  plan: string;
}

interface Google {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  google_id: string;
  avatar: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  api_token: string | null;
  society: string | null;
  address: string;
  city: string;
  country: string;
  region: string;
  postal_code: string;
  phone_number: string | null;
  firstname: string;
  lastname: string;
  login_token: string | null;
  role: number;
  discord: Discord  | null;
  github: Github  | null;
  google: Google  | null;
}

export default function UsersContainer() {
  const [page, setPage] = useState<number>(1);
  const [perpage] = useState<number>(20);
  const [search, setSearch] = useState<string>('');
  const {data, error, isLoading} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
  if(!data || (error || isLoading)) {
    return <Loading/>
  }
  const searchValue = debounce((value: string) => {
    setSearch(value);
    setPage(1);
  }, 500)
  return (
    <>
      <NavBarAccount tab={'users'}/>
        <h1 className="text-center text-4xl my-2">Users</h1>
      <div className="w-full max-w-7xl mx-auto mb-2">
        <input type="text" id={'search'} defaultValue={search} placeholder="Search here" className={`input input-bordered input-md w-full `} onChange={(e) => searchValue(e.target.value)}/>
      </div>
        <table className="table w-full max-w-7xl mx-auto border-neutral border-2">
          {/* head */}
          <thead>
          <tr>
            <th></th>
            <th></th>

            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Discord</th>
            <th>Action</th>

          </tr>
          </thead>
          <tbody>
          {data.data.map((user: User, index: number) => {
            return (
               <UserRow user={user} index={index} page={page} perpage={perpage} search={search}/>
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
const form = object({
  name: string().required(),
  email: string().required(),
  phone_number: string().optional().nullable(),
  role: string().required(),
  society: string().nullable(),
  address: string().optional().nullable(),
  city: string().optional().nullable(),
  firstname: string().optional().nullable(),
  lastname: string().optional().nullable(),
  postal_code: string().optional().nullable().matches(/^\d{5}(?:[-\s]\d{4})?$/, 'The postal code is not correct.'),
});
function UserRow({user, index, page, perpage, search}: {user: User, index: number, page: number; perpage: number, search: string}) {
  const [loading, setLoading] = useState(false);
  const {mutate} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  useEffect(() => {
    async function fetchRegion(data: { country_name: any; data: { country: React.SetStateAction<string>; country_name: React.SetStateAction<string>; region: React.SetStateAction<string>; data: { region: string; }; }; region: any; }) {
      const response = await fetch('https://ipapi.co/json/');
      const responseData = await response.json();
      setCountry(responseData.country_name && data.data.country === '' ? responseData.country_name : data.data.country !== '' ? data.data.country : '');
      setRegion(responseData.region && data.data.region === '' ? responseData.region : data.data.region !== '' ? data.data.region : '');
    }

      formik.setValues({
        name: user.name ? user.name : '',
        email: user.email ? user.email : '',
        phone_number: user.phone_number ? user.phone_number : '',
        role: user.role ? `${user.role}`: '0',
        society: user.society ? user.society : '',
        address: user.address ? user.address : '',
        city: user.city? user.city : '',
        postal_code: user.postal_code ? user.postal_code : '',
        lastname: user.lastname? user.lastname : '',
        firstname: user.firstname ? user.firstname : '' })
      setCountry(user.country);
      setRegion(user.region);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCountryChange = (value: React.SetStateAction<string>) => {
    setCountry(value);
  };

  const handleRegionChange = (value: React.SetStateAction<string>) => {
    setRegion(value);
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', society: '', address: '', city: '', postal_code: '', firstname: '', lastname: '', phone_number: '', role: '' },
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      if (region === '' || !region) {
        setLoading(false)
        return;

      }
      if (country === '' || !country) {
        setLoading(false)
        return;
      }
      editUser(user.id, values.name,values.email, values.society, values.address, values.city, country, region, values.postal_code, values.phone_number, values.firstname, values.lastname, values.role).then((data) => {
        if (data.data['status'] === 'error') {
          toast.error(data.data['message'], {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false)

        } else {
          mutate();
          toast.success('Success! Your informations was edited.', {
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
          // @ts-ignore
          window["edituserModal" + user.id].close()
        }
        setLoading(false)
      }).catch((e) => {
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
        setLoading(false)
      })
    }
  });
  // @ts-ignore
  return (
    <tr key={index}>
      <dialog id={"edituserModal" + user.id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit User (Admin):</h3>
          <form onSubmit={formik.handleSubmit} className='grid md:grid-cols-2 gap-x-4'>
            <div className='mx-auto w-full max-w-sm'>
              <div className={'grid grid-cols-1'}><label className="label">
                <span className="label-text">Society <span className="badge badge-outline">optional</span><br /><span className='text-red-500'>{formik.errors.society}</span></span>

              </label>
                <input id="society"
                       name="society"
                       type="society"
                       defaultValue={user.society ? user.society : ''}
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       className="input input-bordered w-full  max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.society}</span>
                </label>
              </div>
              <div><label className="label">
                <span className="label-text">City</span>
              </label>
                <input id="city"
                       defaultValue={user.city}
                       name="city"
                       type="city"
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.city}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Address</span>
              </label>
                <input id="address"
                       name="address"
                       type="address"
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       defaultValue={user.address}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.address}</span>
                </label>
              </div>

              <div>
                <label className="label mx-auto ">
                  <span className="label-text">Postal code</span>
                </label>

                <input id="postalcode"
                       name="postalcode"
                       type="postalcode"
                       defaultValue={user.postal_code}
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       className="input input-bordered w-full max-w-sm " />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.postal_code}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Fist name</span>
              </label>
                <input id="firstname"
                       name="firstname"
                       type="firstname"
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       defaultValue={user.firstname}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.firstname}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Last name</span>
              </label>
                <input id="lastname"
                       name="lastname"
                       type="lastname"
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       defaultValue={user.lastname}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.lastname}</span>
                </label>
              </div>


            </div>
            <div className='mx-auto'>
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
                  classes="input w-full input-bordered w-full max-w-sm"
                />
              </div>
              <label className="label">
                <span className='text-red-500'>{country === '' ? 'You need to select a country' : ''}</span>
              </label>
              <div className=''>
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
                  classes="input w-full input-bordered w-full max-w-sm"
                />
                <label className="label">
                  <span className='text-red-500'>{region === '' ? 'You need to select a region' : ''}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Username</span>
              </label>
                <input id="name"
                       name="name"
                       type="name"
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       defaultValue={user.name}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.name}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Email</span>
              </label>
                <input id="email"
                       name="email"
                       type="email"
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       defaultValue={user.email}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.email}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Phone Number</span>
              </label>
                <input id="phone_number"
                       name="phone_number"
                       type="phone_number"
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       defaultValue={user.phone_number ? user.phone_number : ''}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.phone_number}</span>
                </label>
              </div>
              <div><label className="label mx-auto ">
                <span className="label-text">Role</span>
              </label>
                <input id="role"
                       name="role"
                       type="role"
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                       onChange={formik.handleChange}
                       disabled={loading}
                       required
                       defaultValue={user.role}
                       className="input input-bordered w-full max-w-sm" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.role}</span>
                </label>
              </div>
            </div>

            <div className='flex justify-end col-span-2 mx-4'>
              <button type='submit' disabled={loading || formik.errors.postal_code ? true : formik.errors.address ? true : formik.errors.city ? true : formik.errors.firstname ? true : !!formik.errors.lastname} className='btn btn-primary btn-outline outline-0 self-end mx-4'>Submit</button>
              <button type="button" className="btn" onClick={() => { // @ts-ignore
                window["edituserModal" + user.id].close()}}>Close</button>
            </div>
          </form>
        </div>
      </dialog>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td>{user.discord?.discord_id} ({user.discord?.username})</td>
      <td><button className={'btn btn-primary btn-outline outline-0'} onClick={() => { // @ts-ignore
        window["edituserModal" + user.id].showModal()}}>Edit</button></td>
    </tr>
  )
}