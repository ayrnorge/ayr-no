import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Listing from "../components/Listing"
import IntercomConfigured from '../components/Intercom/index'
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data: {allPrismicPost} } = this.props
    return(
      <Layout>
      <Listing allPrismicPost={allPrismicPost.edges} />
      <IntercomConfigured />
      </Layout>
    )
  }
}
 
 export default Blog

export const pageQuery = graphql`
 query BlogQuery {
  allPrismicPost(sort: { fields: [data___date], order: DESC }) {
    edges{
      node{
        uid
        data{
          date
          title{
            text
          }
          description
        }
      }
    }
  }
 }
`

