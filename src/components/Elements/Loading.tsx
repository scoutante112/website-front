import { motion } from "framer-motion";
import React from "react";

export default function Loading() {
  return (
    <div className={"h-screen mx-auto text-center cursor-wait"}>
      <motion.img
        src="https://cdn.bagou450.com/assets/img/bg5.webp"
        className={'h-44 w-44 mx-auto'}
        alt="Logo"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <p className={'text-2xl'}>Loading....</p>
    </div>
  )
}