import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ayrLogo from './ayr_logo.svg';
import './Header.css';
import SocialIcons from './SocialIcons';


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


const Header = (props) => (
  <header className="header-main">
     <Link className="ayr-logo" to="/" >
        <img className="header-child" src={ayrLogo} alt="AYR logo" />
        </Link>
         <input className="search header-child" aria-label="Search input" name="search" placeholder="Søk..." />
          <div className="header-child header-child-right">
          <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}>
        <ListLink to="/om-oss/">Who are we?</ListLink>
        <ListLink to="/blog/">Here we blog</ListLink>
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

