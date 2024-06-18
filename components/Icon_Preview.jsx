'use client'
import { ValuesContext } from '@/context/Context'
import { Smile, icons } from 'lucide-react'
import React, { useContext } from 'react'

const Icon_Preview = () => {
  const [IconValues] = useContext(ValuesContext)
  const TheLogo = ({ name, color, size, rotation }) => {
    // const LudicIcon = icons[name]

    // if (!LudicIcon) {
    //   return
    // }
    return (
      <>
        <Smile
          color={color}
          size={size}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </>
    )
  }
  return (
    <div className=" flex flex-col  justify-center items-center">
      Icon Preview
      <div
        className={` w-[300px] sm:w-[400px] flex justify-center items-center  p-[90px]  h-[400px] bg-gray-400  mx-5`}
      >
        <div
          className={`w-full h-full flex justify-center items-center   `}
          style={{
            background: IconValues?.BG_COLOR,
            borderRadius: `${IconValues?.BG_Round}px`,
          }}
        >
          <TheLogo
            name={'smile'}
            color={IconValues?.ICON_COLOR}
            size={IconValues?.ICON_SIZE}
            rotation={IconValues?.ICON_ROTATION}
          />
        </div>
      </div>
    </div>
  )
}

export default Icon_Preview
