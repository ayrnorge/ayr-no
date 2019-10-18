import React from "react"
import PageLayout from "../components/PageLayout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <Container>
      <h2>404</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </PageLayout>
)

export default NotFoundPage
