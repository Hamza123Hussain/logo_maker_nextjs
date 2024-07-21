import { createContext, useState } from 'react'

// Create the context
export const ValuesContext = createContext()

// Create a provider component
export const ValuesProvider = ({ children }) => {
  const [backgroundValue, setBackgroundValue] = useState({})
  const [iconValue, setIconValue] = useState({})
  const [downloadicon, setdownloadicon] = useState(false)

  return (
    <ValuesContext.Provider
      value={{
        backgroundValue,
        setBackgroundValue,
        iconValue,
        setIconValue,
        downloadicon,
        setdownloadicon,
      }}
    >
      {children}
    </ValuesContext.Provider>
  )
}
