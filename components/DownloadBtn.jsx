'use client'
import { ValuesContext } from '@/context/Context'

import React, { useContext } from 'react'

const DownloadBtn = () => {
  const { setdownloadicon } = useContext(ValuesContext)
  return (
    <button
      class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <div className=" flex items-center gap-4 ">
        {' '}
        <h3 onClick={() => setdownloadicon(true)}>Download</h3>{' '}
      </div>
    </button>
  )
}

export default DownloadBtn
