import React, { useState, createContext } from 'react';

export const DropdownContext = createContext();

export default ({ children }) => {
  const [ showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true)  
  const menuClose = () => setShowMenu(false);

  const defaultContext = {
    showMenu,
    openMenu,
    menuClose
  };

  return (
    <DropdownContext.Provider value={defaultContext}>
      {children}
    </DropdownContext.Provider>
  );
};


/* 
  showMenu = (event) => {
    event.preventDefault()

    setShowMenu(true), () => {
      document.addEventListener("click", menuClose)
    })
  }

  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu)
      })
    }
  } */