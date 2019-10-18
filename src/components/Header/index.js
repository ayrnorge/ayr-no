import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AnchoredMenuButton from "../AnchoredMenuButton/index"
import MediaQuery from "react-responsive"
import ayrLogo from "../../images/ayr_logo.svg"
import "./Header.css"
import SocialIcons from "./SocialIcons"
import googlecloudBadge from "../../images/google_cloud_partner_badge.svg"
import { MenuContext } from "../../Context/Menu"
import SideDrawer from "../../components/SideDrawer/index"
import Backdrop from "../../components/Backdrop/index"

const Header = () => {
  const { isOpen, closeMenu } = useContext(MenuContext) || { isOpen: false }

  return (
    <header className="header-main">
      <Link className="ayr-logo" to="/">
        <img className="header-child" src={ayrLogo} alt="AYR logo" />
      </Link>
      <div className="header-child header-child-right">
        <img
          className="google-cloud-badge"
          src={googlecloudBadge}
          alt="Google Cloud partner badge"
        />
        <ul
          style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}
        >
          <MediaQuery minWidth={651}>
            <SocialIcons />
          </MediaQuery>
          <MediaQuery maxWidth={650}>
            <SideDrawer show={isOpen} />
            {isOpen ? <Backdrop click={closeMenu} /> : null}
            <AnchoredMenuButton />
          </MediaQuery>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
