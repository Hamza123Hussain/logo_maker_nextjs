'use client'
import {
  Home,
  Icon,
  LayoutDashboard,
  LayoutDashboardIcon,
  Palette,
  Pencil,
  ShieldPlus,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const routes = [
  {
    id: 1,
    label: 'Icon',
    Icon: <Pencil className=" text-black" />,
    href: '/Icon',
  },
  {
    id: 2,
    label: 'BackGround',
    Icon: <Palette className=" text-black" />,
    href: '/Background',
  },
  {
    id: 3,
    label: 'Upgrade',
    Icon: <ShieldPlus className=" text-black" />,
    href: '/Upgrade',
  },
]

const SideNav = () => {
  const pathname = usePathname()
  return (
    <div className=" flex flex-col h-[vh-100] py-4 space-y-4 text-white bg-transparent  ">
      <div className=" px-1 py-2 flex-1">
        <Link
          href={'/'}
          className=" flex pt-3 items-center justify-center mb-4 gap-4"
        >
          <Home className=" text-black" />

          <h1 className=" font-bold text-xl text-black"> LOGO MAKER</h1>
        </Link>{' '}
        <div className=" mt-10 flex flex-col gap-4">
          {routes.map((ele) => {
            return (
              <div key={ele.id}>
                <Link href={ele.href} className=" flex gap-5 items-center">
                  {ele.Icon}
                  <h3
                    className={`text-sm ${
                      pathname == ele.href ? 'text-green-200' : 'text-zinc-900'
                    }`}
                  >
                    {' '}
                    {ele.label}
                  </h3>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SideNav
