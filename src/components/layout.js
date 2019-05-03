import React from "react"
import PropTypes from "prop-types"
import Header from "./Header /index"
import "./layout.css"
import styled from "@emotion/styled"


const Container = styled.div`
margin: 0 auto,
max-Width: 960,
padding: 0px 1.0875rem 1.45rem ,
paddingTop: 0,
`



const Layout = ({ children }) => (
          <div>
            <Header />
          <div  
          style={{
            margin: `0 auto`,
            maxWidth: 960,
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



// previous code below  











/* 
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header  />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)
*/