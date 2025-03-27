import { Wallet } from '@/context/Wallet';
import React from 'react'
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.div initial={"bg-red-400"} className={`fixed top-0 left-0 w-full {
           "backdrop-blur-lg  shadow-md" `}>
      <div className='flex items-center justify-between px-4 max-w-7xl mx-auto p-2 z-10'>
        <div>
          <p className='text-3xl font-extrabold text-gray-300'>SuperDm</p>
        </div>
        <div>
          <div className='text-gray-400 flex gap-8 items-center'>
            <ul className='hover:text-white ease-in-out duration-300 cursor-pointer'>How it Works</ul>
            <ul className='hover:text-white ease-in-out duration-300 cursor-pointer'>Features</ul>
            <ul className='hover:text-white ease-in-out duration-300 cursor-pointer'>Pricing</ul>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='border  bg-gradient-to-bl from-pink-400 to-blue-400 p-0.5 rounded-full cursor-pointer'>
            <button className='text-white bg-black hover:bg-neutral-800 ease-in-out duration-300 px-3 py-2 rounded-full cursor-pointer'>Sign In</button>
          </div>
          <Wallet />
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar;
