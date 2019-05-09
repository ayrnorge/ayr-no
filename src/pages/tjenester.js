import React from "react"
import { Link } from "gatsby"
import IntercomConfigured from '../components/Intercom/index'
import Layout from "../components/layout"
import SEO from "../components/seo"

const tjenester = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This page is not displayed</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <IntercomConfigured />
  </Layout>
)

export default tjenester
