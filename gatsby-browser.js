import React from "react"

import MenuProvider  from "./src/Context/Menu"

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
)