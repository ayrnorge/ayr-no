import React, { useState, createContext } from "react"

export const DropdownContext = createContext()

export default ({ children }) => {
  const [currentTags, setCurrentTags] = useState([])

  const defaultContext = {
    setCurrentTags,
    currentTags,
  }

  return (
    <DropdownContext.Provider value={defaultContext}>
      {children}
    </DropdownContext.Provider>
  )
}
