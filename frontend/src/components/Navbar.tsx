import { Wallet } from '@/context/Wallet';
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-2'>
      <div className='flex items-center justify-between px-4'>
        <div>
          <p className='text-4xl font-extrabold text-amber-300'>SuperDm</p>
        </div>
        <Wallet />
      </div>
    </div>
  )
}

export default Navbar;
