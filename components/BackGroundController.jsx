'use client'
import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import ColourPicker from './ColourPickerController'
import { ValuesContext } from '@/context/Context'

const BackgroundController = () => {
  const [IconValues, SetIconValues] = useContext(ValuesContext)
  const StoredValue = JSON.parse(localStorage.getItem('BGValues'))
  const [Padding, setPadding] = useState(
    IconValues ? IconValues.BG_Padding : 28
  )
  const [Round, setRound] = useState(StoredValue ? StoredValue.BG_Round : 0)
  const [color, setcolor] = useState(
    StoredValue ? StoredValue.BGValues : 'rgba(255,255,255,1)'
  )

  useEffect(() => {
    const BGValues = {
      ...StoredValue,
      BG_Padding: Padding,
      BG_Round: Round,
      BG_COLOR: color,
    }
    SetIconValues((prevIconValues) => ({
      ...prevIconValues,
      ...BGValues,
    }))
    localStorage.setItem('BGValues', JSON.stringify(BGValues))
  }, [Padding, Round, color])
  console.log(IconValues)
  return (
    <div className=" flex flex-col  mx-3 gap-2 my-5">
      <div className=" flex flex-col ">
        <div className="  flex justify-between ">
          <p>Padding</p>
          <p>
            {Padding}
            px
          </p>
        </div>
        <input
          type="range"
          defaultValue={0}
          value={Padding}
          max={40}
          onChange={(e) => setPadding(e.target.value)}
        />
      </div>
      <div className=" flex flex-col ">
        <div className=" flex justify-between">
          <p>Round</p>
          <p>{Round}°</p>
        </div>
        <input
          defaultValue={0}
          value={Round}
          type="range"
          max={70}
          onChange={(e) => setRound(e.target.value)}
        />
      </div>

      <div>
        <ColourPicker selectedcolor={(color) => setcolor(color)} />
      </div>
    </div>
  )
}

export default BackgroundController
