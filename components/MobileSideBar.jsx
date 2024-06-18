'use client'
import React from 'react'

import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideNav from './SideNav'
const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" bg-gray-100  p-2">
          <Menu />
        </div>
      </SheetTrigger>

      <SheetContent side="left" className=" p-0">
        <SideNav />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
