import React from "react"
import MenuProvider from "./src/Context/Menu"
import DropDown from "./src/Context/DropDown"

export const wrapRootElement = ({ element }) => (
  <MenuProvider>
    <DropDown>{element}</DropDown>
  </MenuProvider>
)
