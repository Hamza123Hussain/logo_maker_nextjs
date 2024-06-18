'use client'
import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import ColourPicker from './ColourPickerController'
import { ValuesContext } from '@/context/Context'

const IconController = () => {
  const StoredValue = JSON.parse(localStorage.getItem('Values'))
  const [size, setsize] = useState(StoredValue ? StoredValue?.ICON_SIZE : 28)
  const [rotate, setrotation] = useState(
    StoredValue ? StoredValue.ICON_ROTATION : 0
  )
  const [color, setcolor] = useState(
    StoredValue ? StoredValue.ICON_COLOR : 'rgba(255,255,255,1)'
  )
  const [IconValues, SetIconValues] = useContext(ValuesContext)

  console.log(IconValues)
  useEffect(() => {
    const IconValue = {
      ...StoredValue,
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
      <div className=" ml-2  p-3 flex items-center bg-gray-200 rounded-xl w-[50px] ">
        <Smile />
      </div>
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
            defaultValue={28}
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
            defaultValue={0}
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
