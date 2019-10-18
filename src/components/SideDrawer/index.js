import React, { useContext } from "react"
import { Link } from "gatsby"
import { MenuContext } from "../../Context/Menu"
import "./SideDrawer.css"
import ayrLogo from "../../images/ayr_logo.svg"
import styled from "@emotion/styled"
import Menu from "../Menu/index"
import AnchoredMenuButton from "../AnchoredMenuButton/index"
import googlecloudBadge from "../../images/google_cloud_partner_badge.svg"

const LogoContainer = styled.div`
margin-top: 1rem;
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 1rem 3rem",
        }}
      >
        <LogoContainer>
          <Link onClick={closeMenu} className="ayr-logo" to="/">
            <img className="header-child" src={ayrLogo} alt="AYR logo" />
          </Link>
        </LogoContainer>
        <img
          className="google-cloud-badge"
          src={googlecloudBadge}
          alt="Google Cloud partner badge"
        />
        <div onClick={closeMenu} style={{ marginTop: "1rem" }}>
          <AnchoredMenuButton />
        </div>
      </div>
      <MenuContainer>
        <Menu styleName={"mobile"} />
      </MenuContainer>
    </div>
  )
}

export default SideDrawer
