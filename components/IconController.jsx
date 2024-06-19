'use client'
import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import ColourPicker from './ColourPickerController'
import { ValuesContext } from '@/context/Context'
import IconList from './IconList'

const IconController = () => {
  const isBrowser = typeof window !== 'undefined'
  const StoredValue = isBrowser
    ? JSON.parse(localStorage.getItem('Values'))
    : null
  const [size, setsize] = useState(StoredValue ? StoredValue?.ICON_SIZE : 28)
  const [rotate, setrotation] = useState(
    StoredValue ? StoredValue.ICON_ROTATION : 0
  )

  const [color, setcolor] = useState(
    StoredValue ? StoredValue.ICON_COLOR : 'rgba(255,255,255,1)'
  )
  const [IconValues, SetIconValues] = useContext(ValuesContext)

  useEffect(() => {
    const IconValue = {
      ...IconValues,
      ICON_SIZE: size,
      ICON_ROTATION: rotate,
      ICON_COLOR: color,
    }
    SetIconValues(IconValue)
    localStorage.setItem('Values', JSON.stringify(IconValue))
  }, [size, rotate, color])

  return (
    <div>
      <label>Icon</label>
      <IconList />
      <div className=" flex flex-col  mx-3 gap-2 my-5">
        <div className=" flex flex-col ">
          <div className="  flex justify-between ">
            <p>Size</p>
            <p>
              {size}
              px
            </p>
          </div>
          <input
            type="range"
            value={size}
            max={512}
            onChange={(e) => setsize(e.target.value)}
          />
        </div>
        <div className=" flex flex-col ">
          <div className=" flex justify-between">
            <p>Rotate</p>
            <p>{rotate}°</p>
          </div>
          <input
            value={rotate}
            type="range"
            max={360}
            onChange={(e) => setrotation(e.target.value)}
          />
        </div>

        <div>
          <ColourPicker selectedcolor={(color) => setcolor(color)} />
        </div>
      </div>
    </div>
  )
}

export default IconController
