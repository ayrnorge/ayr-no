import React from "react"
import ListLinks from '../ListLinks'
import "./SideDrawer.css"

const SideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  } 
  return (
    <nav className={drawerClasses}>
     <ListLinks />
    </nav>
  )
}

export default SideDrawer

