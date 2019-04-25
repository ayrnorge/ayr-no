import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutUs = ({ data: { prismicWhoAreWe } }) => (
  <Layout>
    <SEO title="Om oss" />
    <h1>{prismicWhoAreWe.data.title.text}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: prismicWhoAreWe.data.content.html }}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutUs

export const pageQuery = graphql`
  query IndexQuery {
    prismicWhoAreWe{
    data{
      title{
        text
      }
      content{
        html
      }
    }
  }
  }
`