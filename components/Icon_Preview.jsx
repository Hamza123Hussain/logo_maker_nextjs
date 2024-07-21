'use client'
import { ValuesContext } from '@/context/Context'
import html2canvas from 'html2canvas'
import React, { useContext, useEffect, useRef } from 'react'
import { TheLogo } from './Logo'

const Icon_Preview = () => {
  const {
    iconValue,
    setIconValue,
    backgroundValue,
    setBackgroundValue,
    downloadicon,
    setdownloadicon,
  } = useContext(ValuesContext)
  const isBrowser = typeof window !== 'undefined'
  const downloadRef = useRef(null)

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

  useEffect(() => {
    if (downloadicon) {
      DownloadPngLogo()
    }
  }, [downloadicon])

  const DownloadPngLogo = () => {
    if (downloadRef.current) {
      html2canvas(downloadRef.current).then((canvas) => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'download.png'
        link.click()
      })
    }
    setdownloadicon(false)
  }

  return (
    <div className=" flex flex-col  justify-center items-center">
      <h1 className=" text-2xl font-bold my-10">Icon Preview</h1>
      <div>
        <div
          id="DownloadLogo"
          ref={downloadRef}
          className={`w-[100vw] sm:w-[40vw] h-[80vh] flex justify-center items-center     bg-gray-400  mx-5`}
          style={{
            backgroundColor: backgroundValue.color,
            borderRadius: backgroundValue.Round,
            width: backgroundValue.Width,
          }}
        >
          <div className={`w-full h-full flex justify-center items-center   `}>
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
