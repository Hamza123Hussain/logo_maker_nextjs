'use client'
import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const ColourPicker = ({ selectedcolor }) => {
  const [color, setcolor] = useState('rgba(255,255,255,1)')
  return (
    <div className=" mt-5">
      <p>Color For Icon</p>
      <div className=" mt-2 flex flex-col justify-center items-center">
        <ColorPicker
          value={color}
          onChange={(e) => {
            setcolor(e)
            selectedcolor(e)
          }}
        />
      </div>
    </div>
  )
}

export default ColourPicker
