import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Listing from "../components/Listing"
import SEO from "../components/seo"

// Option 1

/*  const Blog = ({ data: { allPrismicPost } }) => (
  <Layout>
    { 
      allPrismicPost.edges.map(blog => {
     return(
       <Link to={blog.node.uid}> 
       <div>{blog.node.data.title.text}</div>
       </Link>
         )
        }
      )
    } 
  </Layout>
)

export default Blog  */

//Option 2
/* 
class Blog extends React.Component {
  render() {
    const { data: {allPrismicPost} } = this.props
    return(
      <Layout>
      <Listing allPrismicPost={allPrismicPost.edges} />
      </Layout>
    )
  }
}
 */
// export default Blog

// option 3 

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Amazing Pandas Eating Things
        </h1>
        {data.allPrismicPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.uid} >
              <h3> {node.data.title.text}{" "}
                <span>
                  — {node.data.date}
                </span>
              </h3>
              <p>{node.description}</p>
            </Link> 
          </div>
        ))}
      </div>
    </Layout>
  )
}


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

