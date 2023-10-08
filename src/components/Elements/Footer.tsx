import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {


  return (
  <footer className="bg-white w-full border-t border-gray-900/10" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto  px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8">
          <img
            src={'https://cdn.bagou450.com/website/assets/logo/bagou-nobg.webp'}
            className="h-16 w-16"
            alt="Logo Bagou450" />
          <p className="text-sm leading-6 text-gray-600">
            Bagou450<br />Provide Sysadmin service since 2016 <br />Provide Pterodactyl addons since 2020
          </p>
          {/*<div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>*/}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                <Link to={"/contact"} className="link link-hover"><li className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact</li></Link>

                <Link to={"/tos"} className="link link-hover"> <li className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms of Service</li></Link>
                <Link to={"/pp"} className="link link-hover"> <li className="text-sm leading-6 text-gray-600 hover:text-gray-900">  Privacy Policy</li></Link>
                <Link to={"/rp"} className=" link link-hover">  <li className="text-sm leading-6 text-gray-600 hover:text-gray-900">  Refund Policy</li></Link>
                <Link to={"/lm"} className="link link-hover">   <li className="text-sm leading-6 text-gray-600 hover:text-gray-900">   Legal Mention</li></Link>

              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className=" border-t border-gray-900/10 sm:mt-20 lg:mt-24">
      </div>
    </div>
  </footer>
  )
}