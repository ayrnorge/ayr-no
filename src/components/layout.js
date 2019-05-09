import React from "react"
import PropTypes from "prop-types"
import Header from "./Header /index"
import "./layout.css"
import styled from "@emotion/styled"


const Layout = ({ children }) => (
          <div>
            <Header />
          <div  
          style={{
            margin: `0 auto`,
            maxWidth: 1260,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <main>
          {children}
          </main>
          </div>
          </div>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}











