import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/index"
import "./layout.css"

const PostLayout = ({ children }) => (
  <div>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </div>
)

export default PostLayout

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
