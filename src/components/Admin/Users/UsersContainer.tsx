import React, { useState } from "react";
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import Loading from "../../Elements/Loading";
import NavBarAccount from "../../Account/NavBarAccount";
import CategoryContainer from "../Blogs/CategoryContainer";
import NewsContainer from "../Blogs/NewsContainer";
import editUser from "../../../api/admin/users/editUser";
import { toast } from "react-toastify";

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
  const [perpage, setPerPage] = useState<number>(20);
  const [search, setSearch] = useState<string>('');
  const {data, error, isLoading, mutate} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);
  if(!data || (error || isLoading)) {
    return <Loading/>
  }
  console.log(data);
  return (
    <>
      <NavBarAccount tab={'users'}/>
        <h1 className="text-center text-4xl">Users</h1>

        <table className="table w-full max-w-7xl mx-auto border-neutral border-2">
          {/* head */}
          <thead>
          <tr>
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
    </>
  )
}

function UserRow({user, index, page, perpage, search}: {user: User, index: number, page: number; perpage: number, search: string}) {
  const [loading, setLoading] = useState(false);
  const {mutate} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);

  const editUserFunction = () => {
    setLoading(true)
    editUser(user.id, user.name,user.email, user.society, user.address, user.city, user.country, user.region, user.postal_code, user.phone_number, user.firstname, user.lastname, user.role).then((data) => {

    }).catch((e) => {
      setLoading(false)
      toast.error(`Error: ${e}`, {
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
  }
  return (
    <tr key={index}>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td>{user.discord?.user_id}</td>
      <td><button className={'btn btn-primary btn-outline outline-0'}>Edit</button></td>
    </tr>
  )
}