import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer order-t-2 border-neutral border-t-2 my-4 ov">
      <div className="flex items-center space-x-4 mt-4">
        <img
          src="https://cdn.bagou450.com/website/assets/logo/bagou-white-nobg.webp"
          className="h-16 w-16 hidden md:block"
          alt="Logo" />
        <p className="text-lg font-semibold">
          Bagou450<br />Provide Sysadmin service since 2016 <br />Provide Pterodactyl addons since 2020
        </p>
      </div>
      <div>
        <span className="footer-title font-semibold mt-4">About</span>
        <div><Link to={"/contact"} className="link link-hover"><p className={'mb-2'}>Contact</p></Link>

          <Link to={"/tos"} className="link link-hover"> <p className={'mb-2'}>Terms of Service</p></Link>
          <Link to={"/ppo"} className="link link-hover"> <p className={'mb-2'}>  Privacy Policy</p></Link>
          <Link to={"/rp"} className=" link link-hover">  <p className={'mb-2'}>  Refund Policy</p></Link>
          <Link to={"/lm"} className="link link-hover">   <p className={'mb-2'}>   Legal Mention</p></Link>
        </div>
      </div>

    </footer>
  )
}