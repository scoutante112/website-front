import React, { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logout from "../api/auth/logout";
import useSWR from "swr";
import md5 from "blueimp-md5";
import { fetcher } from "../api/http";
import { MainNavRoutes } from "../App";
import { config } from "../config/config";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  const navigate = useNavigate();

  const location = useLocation();
  const infos = location.pathname.startsWith('/account') || location.pathname.startsWith('/admin');
  const { data, mutate, error, isLoading } = useSWR(
    `${config.privateapilink}/auth/isLogged?infos=${infos}`,
    fetcher
  );
  const navigation = useNavigate();



  if (!data || (error || isLoading)) {
    return <></>;
  }

  if(infos && !data.status) {
    mutate();
    navigation('/login');
  }
  if(location.pathname.startsWith('/admin') && !data.data.role) {
    navigation('/');
  }
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    src={"https://cdn.bagou450.com/assets/img/logo_full_colored.webp"}
                    className={"h-8 w-auto"}
                    alt={"Logo Bagou450"} />

                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {MainNavRoutes.map((routes, key) => (
                    <Link to={routes.link} key={key}
                          className={`inline-flex items-center ${location.pathname === routes.link && "border-b-2 border-indigo-500"} px-1 pt-1 text-sm font-medium text-gray-900`}>{routes.name.charAt(0).toUpperCase() + routes.name.slice(1, routes.name.length)}</Link>
                  ))}

                </div>
              </div>
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>*/}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img src={`https://www.gravatar.com/avatar/${md5(data.data.email)}?d=404`} alt="test"
                           onError={({ currentTarget }) => {
                             currentTarget.onerror = null; // prevents looping
                             currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data.name}`;
                           }}
                           className={"rounded-full h-8 w-8 "} />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                            to={"/account/manage"}><p>My account</p></Link>
                        )}
                      </Menu.Item>
                      <Menu.Item onClick={() => logout().then(() => {
                        toast.success("You are now logged out.", {
                          position: "bottom-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light"
                        });
                        navigate("/");
                        mutate();
                      })}>{({ active }) => (<p
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-red-700")}>Logout</p>)}</Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  );
}
