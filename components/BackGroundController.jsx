'use client'

import React, { useContext, useEffect, useState } from 'react'
import ColourPicker from './ColourPickerController'
import { ValuesContext } from '@/context/Context'

const BackgroundController = () => {
  const { backgroundValue, setBackgroundValue } = useContext(ValuesContext)

  const StoredValue = JSON.parse(localStorage.getItem('BG'))
  const [Width, setWidth] = useState(0)
  const [Round, setRound] = useState(0)
  const [color, setcolor] = useState('rgba(255,255,255,1)')
  useEffect(() => {
    if (StoredValue) {
      setRound(StoredValue.Round || 28)
      setWidth(StoredValue.Width || 0)
      setcolor(StoredValue.color || 'rgba(255,255,255,1)')
      setBackgroundValue(StoredValue)
    }
  }, [])

  useEffect(() => {
    setBackgroundValue((Element) => ({
      ...Element,
      color: color,
      Width: Width,
      Round: Round,
    }))

    localStorage.setItem('BG', JSON.stringify(backgroundValue))
  }, [color, Width, Round])

  // console.log(IconValues)

  return (
    <div className="flex flex-col mx-3 gap-2 my-5">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>Width</p>
          <p>
            {Width}
            px
          </p>
        </div>
        <input
          type="range"
          value={Width}
          max={600}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>Round</p>
          <p>{`${Round}`}°</p>
        </div>
        <input
          value={Round}
          type="range"
          max={360}
          onChange={(e) => setRound(Number(e.target.value))}
        />
      </div>
      <div>
        <ColourPicker selectedcolor={(color) => setcolor(color)} />
      </div>
    </div>
  )
}

export default BackgroundController
