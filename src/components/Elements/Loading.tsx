import { motion } from "framer-motion";
import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";

export default function Loading() {
  return (
    <div className={"h-screen mx-auto text-center cursor-wait"}>

      <LazyLoad><Suspense fallback={<></>}><motion.img
        src="https://cdn.bagou450.com/assets/img/bg5.webp"
        className={'h-44 w-44 mx-auto'}
        alt="Logo"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      /></Suspense></LazyLoad>
      <p className={'text-2xl'}>Loading....</p>
    </div>
  )
}