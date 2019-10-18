import React, { useState, createContext } from "react"

export const MenuContext = createContext()

export default ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  const defaultContext = {
    isOpen,
    openMenu,
    closeMenu,
  }

  return (
    <MenuContext.Provider value={defaultContext}>
      {children}
    </MenuContext.Provider>
  )
}
