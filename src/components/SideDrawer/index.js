import React, { useContext } from "react"
import { Link } from 'gatsby'
import {MenuContext} from '../../Context/Menu'
import "./SideDrawer.css"
import ayrLogo from '../../images/ayr_logo.svg';
import styled from '@emotion/styled'
import Menu from '../Menu/index'

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

const MenuContainer = styled.div`
text-align: center;
margin: auto;
`


const SideDrawer = props => {
  const { closeMenu } = useContext(MenuContext) || { isOpen: false }

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
    <MenuContainer>
      <Menu styleName={'mobile'}/>
      </MenuContainer>
    </div>
  )
}

export default SideDrawer

