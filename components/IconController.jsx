'use client'
import { Smile } from 'lucide-react'
import React, { useState } from 'react'

const IconController = () => {
  const [size, setsize] = useState(28)
  const [rotate, setrotation] = useState(0)
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
            type="range"
            max={360}
            onChange={(e) => setrotation(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default IconController
