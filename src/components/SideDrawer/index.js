import React, { useContext } from "react"
import { Link } from 'gatsby'
import {MenuContext} from '../../Context/Menu'
import ListLinks from '../ListLinks'
import "./SideDrawer.css"
import ayrLogo from '../../images/ayr_logo.svg';
import styled from '@emotion/styled'

const LogoContainer = styled.div`
flex: none;
margin: auto;
padding: 60px;
max-height: 33px;
width: 60px; }
@media screen and (max-width: 768px) {
  .ayr-logo {
    margin-right: 2rem; }

`


const SideDrawer = props => {
  const { closeMenu } = useContext(MenuContext)

  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  } 
  return (
    <div className={drawerClasses}>
    <LogoContainer>
      <Link onClick={closeMenu} className="ayr-logo" to="/" >
    <img className="header-child" src={ayrLogo} alt="AYR logo" />
    </Link>
    </LogoContainer>
    <nav style={{ marginTop: '10rem'}}>
    <ListLinks />
    </nav>
    </div>
  )
}

export default SideDrawer

