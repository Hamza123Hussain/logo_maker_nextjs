'use client'

import React, { useContext, useEffect, useState } from 'react'
import ColourPicker from './ColourPickerController'
import { ValuesContext } from '@/context/Context'
import IconList from './IconList'

const IconController = () => {
  const { iconValue, setIconValue } = useContext(ValuesContext)
  const isBrowser = typeof window !== 'undefined'
  const StoredValue = JSON.parse(localStorage.getItem('Icon'))

  const [size, setSize] = useState(28)
  const [rotate, setRotate] = useState(0)
  const [color, setColor] = useState('rgba(255,255,255,1)')

  // Load stored values on mount
  useEffect(() => {
    if (isBrowser)
      if (StoredValue) {
        setSize(StoredValue.Size || 28)
        setRotate(StoredValue.Rotate || 0)
        setColor(StoredValue.Color || 'rgba(255,255,255,1)')
        setIconValue(StoredValue)
      }
  }, [])

  // Save icon value to localStorage when it changes
  useEffect(() => {
    setIconValue((prevValue) => ({
      ...prevValue,
      Size: size,
      Rotate: rotate,
      Color: color,
    }))
  }, [size, rotate, color])

  useEffect(() => {
    if (iconValue) {
      localStorage.setItem('Icon', JSON.stringify(iconValue))
    }
  }, [iconValue])

  return (
    <div>
      <label>Icon</label>
      <IconList />
      <div className="flex flex-col mx-3 gap-2 my-5">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Size</p>
            <p>{size}px</p>
          </div>
          <input
            type="range"
            value={size}
            max={200}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Rotate</p>
            <p>{rotate}°</p>
          </div>
          <input
            type="range"
            value={rotate}
            max={360}
            onChange={(e) => setRotate(e.target.value)}
          />
        </div>
        <div>
          <ColourPicker selectedcolor={(color) => setColor(color)} />
        </div>
      </div>
    </div>
  )
}

export default IconController
