'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Home, Smile, icons } from 'lucide-react'
import { Iconss } from '@/constants/Icons'

const IconList = ({ selectedicon }) => {
  const [isopen, setopen] = useState(false)

  const TheLogo = ({ name }) => {
    const LudicIcon = icons[name]

    if (!LudicIcon) {
      return <Smile color={'#3c3c3c'} size={20} />
    }
    return <LudicIcon color={'#3c3c3c'} size={20} />
  }
  return (
    <div>
      <div className=" ml-2  p-3 flex items-center bg-gray-200 rounded-xl w-[50px] ">
        <Home onClick={() => setopen(true)} />
      </div>

      <Dialog open={isopen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader onClick={() => setopen(false)}>
            <DialogTitle>Pick An Icon Of Your Choice</DialogTitle>
            <DialogDescription>
              <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 h-[300px] gap-2 overflow-auto">
                {Iconss.map((icon, index) => {
                  return (
                    <div
                      className=" flex p-2 justify-center items-center cursor-pointer border-2 border-slate-700  self-center"
                      key={index}
                      onChangeCapture={(icon) => {
                        selectedicon(icon)
                        setopen(false)
                      }}
                    >
                      <TheLogo name={icon} />
                    </div>
                  )
                })}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default IconList
