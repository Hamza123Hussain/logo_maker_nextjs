'use client'
import { ValuesContext } from '@/context/Context'
import html2canvas from 'html2canvas'
import { Smile, icons } from 'lucide-react'
import React, { useContext, useEffect } from 'react'

const Icon_Preview = ({ downloadicon }) => {
  const [IconValues] = useContext(ValuesContext)
  const TheLogo = ({ name, color, size, rotation }) => {
    const LudicIcon = icons[name]

    if (!LudicIcon) {
      return (
        <Smile
          color={color}
          size={size}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      )
    }
    return (
      <>
        <LudicIcon
          color={color}
          size={size}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </>
    )
  }

  const DownloadPngLogo = () => {
    const DownloadDiv = document.getElementById('DownloadLogo')
    html2canvas(DownloadDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const PngImage = canvas.toDataURL('image/png')
      const DownloadLink = document.createElement('a')
      DownloadLink.href = PngImage
      DownloadLink.download = 'The_Logo_Maker.png'
      DownloadLink.click()
    })
  }
  if (downloadicon) {
    DownloadPngLogo()
  }
  return (
    <div className=" flex flex-col  justify-center items-center">
      Icon Preview
      <div
        className={` w-[300px] sm:w-[400px] flex justify-center items-center  p-[90px]  h-[400px] bg-gray-400  mx-5`}
      >
        <div
          id="DownloadLogo"
          className={`w-full h-full flex justify-center items-center   `}
          style={{
            background: IconValues?.BG_COLOR,
            borderRadius: `${IconValues?.BG_Round}px`,
          }}
        >
          <TheLogo
            name={IconValues?.Icon_Name}
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
