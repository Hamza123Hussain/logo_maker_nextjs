import React from 'react'

import MobileSideBar from './MobileSideBar'
import Link from 'next/link'
import { Home } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      <div className=" sm:hidden flex flex-col justify-start  p-2">
        <MobileSideBar />
        <Link
          href={'/'}
          className=" flex pt-3 items-center justify-center mb-4 gap-4"
        >
          <Home className=" text-black" />

          <h1 className=" font-bold text-xl text-black"> LOGO MAKER</h1>
        </Link>{' '}
      </div>
    </>
  )
}

export default Navbar
