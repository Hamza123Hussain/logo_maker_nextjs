'use client'

import React, { useContext, useEffect, useState } from 'react'
import ColourPicker from './ColourPickerController'
import { ValuesContext } from '@/context/Context'

const BackgroundController = () => {
  const [IconValues, SetIconValues] = useContext(ValuesContext)
  const isBrowser = typeof window !== 'undefined'
  const StoredValue = isBrowser
    ? JSON.parse(localStorage.getItem('Values'))
    : null

  const [Padding, setPadding] = useState(
    StoredValue ? StoredValue?.BG_Padding : 28
  )
  const [Round, setRound] = useState(StoredValue ? StoredValue?.BG_Round : 0)
  const [color, setcolor] = useState(
    StoredValue ? StoredValue?.BG_COLOR : 'rgba(255,255,255,1)'
  )

  useEffect(() => {
    if (isBrowser) {
      const BGValues = {
        ...StoredValue,
        BG_Padding: Padding,
        BG_Round: Round,
        BG_COLOR: color,
      }
      SetIconValues(BGValues)
      localStorage.setItem('Values', JSON.stringify(BGValues))
    }
  }, [color, Padding, Round])

  console.log(IconValues)

  return (
    <div className="flex flex-col mx-3 gap-2 my-5">
      <div className="flex flex-col">
        {/* <div className="flex justify-between">
          <p>Padding</p>
          <p>
            {Padding}
            px
          </p>
        </div>
        <input
          type="range"
          value={Padding}
          max={200}
          onChange={(e) => setPadding(Number(e.target.value))}
        /> */}
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
