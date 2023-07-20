import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import 'react-toastify/dist/ReactToastify.min.css';
import EditAccountForm, { Account as Acc } from "./Forms/EditAccountForm";
import EditAccountInfosForm from './Forms/EditAccountInfosForm';
import { fetcher } from '../../../api/http';
import NavBarAccount from '../NavBarAccount';
import Loading from "../../Elements/Loading";
import { string } from "yup";


export type Account = {
  email: string;
  name: string;
  role: boolean;
}
export default function AccountContainer() {

  const location = useLocation();
  const infos = location.pathname.startsWith('/account/manage');
  const { data, error, isLoading } = useSWR(
    `https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=${infos}`,
    fetcher
  );
  if (!data || (error || isLoading)) {
    return <></>;
  }
  const myaccount: Acc = {
    email: data.data.email,
    name: data.data.name,
    role: data.data.role,
    discord: data.data.discord,
    github: data.data.github,
    google: data.data.google
  }
  document.title = 'Bagou450 - My account'
  return (
    <>
      <NavBarAccount tab={'manage'}/>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-x-4 mx-12'>

        <EditAccountForm account={myaccount}/>
        <EditAccountInfosForm />

      </section>
      <section className='min-h-screen'>
 </section>
    </>
  );
}
