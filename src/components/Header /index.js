import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AnchoredMenuButton from '../AnchoredMenuButton/index'
import MediaQuery from 'react-responsive';
import ayrLogo from './ayr_logo.svg';
import './Header.css';
import SocialIcons from './SocialIcons';

const Header = (props) => (
  <header className="header-main">
     <Link className="ayr-logo" to="/" >
        <img className="header-child" src={ayrLogo} alt="AYR logo" />
        </Link>
          <div className="header-child header-child-right">
          <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}>
          <MediaQuery minWidth={651}>
         <SocialIcons />
          </MediaQuery>
          <MediaQuery maxWidth={650}>
         <AnchoredMenuButton />
          </MediaQuery>
      </ul>
            </div>
        </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

