'use client'
import { ValuesContext } from '@/context/Context'
import html2canvas from 'html2canvas'
import { Smile, icons } from 'lucide-react'
import React, { useContext, useEffect } from 'react'

const Icon_Preview = ({ downloadicon }) => {
  const { iconValue, setIconValue } = useContext(ValuesContext)
  const isBrowser = typeof window !== 'undefined'

  const { backgroundValue, setBackgroundValue } = useContext(ValuesContext)

  useEffect(() => {
    if (isBrowser) {
      const StoredValue = JSON.parse(localStorage.getItem('Icon'))
      if (StoredValue) {
        setIconValue(StoredValue)
      }
      const StoredValue2 = JSON.parse(localStorage.getItem('BG'))
      if (StoredValue2) {
        setBackgroundValue(StoredValue2)
        console.log(StoredValue2.Padding)
      }
    }
  }, [])

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
      <h1 className=" text-2xl font-bold my-10">Icon Preview</h1>
      <div>
        <div
          className={`w-[100vw] sm:w-[40vw] h-[80vh] flex justify-center items-center     bg-gray-400  mx-5`}
          style={{
            backgroundColor: backgroundValue.color,
            borderRadius: backgroundValue.Round,
            width: backgroundValue.Width,
          }}
        >
          <div
            id="DownloadLogo"
            className={`w-full h-full flex justify-center items-center   `}
          >
            <TheLogo
              name={iconValue?.Name}
              color={iconValue?.Color}
              size={iconValue?.Size}
              rotation={iconValue?.Rotate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Icon_Preview
