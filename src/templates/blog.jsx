import React from "react"
import { graphql, Link } from "gatsby"
import Listing from "../components/Listing"
import styled from "@emotion/styled"
import Header from "../components/Header/index"
import Menu from "../components/Menu/index"
import MediaQuery from "react-responsive"
import activeIndicator from "../images/active-indicator.svg"

const PostsContainer = styled.div`
  min-height: 100px;
  position: relative;
  margin: auto;
  width: 70%;
  @media screen and (max-width: 768px) {
    margin-bottom: 5%;
  }
`

const FooterContainer = styled.div`
width:70%;
padding-left: 16%;
position: absolute;
bottom: 0;

@media screen and (max-width: 768px) {
  text-align center;
  position: relative;
  padding-left: 0;
}
`
const Nav = styled(Link)`
  padding-bottom: 10px;
`
const Space = styled.div`
  flex: 4px;
  @media screen and (max-width: 768px) {
    flex: 0;
  }
`

const Ul = styled.ul`
  display: flex;
  liststyle: none;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: inline-flex;
    liststyle: none;
    flex: 0;
  }
`

const Blog = ({ data: { allPrismicPost }, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`

  return (
    <div style={{ height: "100%" }}>
      <Header />
      <MediaQuery minWidth={650}>
        <div style={{ position: "fixed" }}>
          <Menu />
        </div>
      </MediaQuery>
      <PostsContainer>
        <h1>Her blogger vi</h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit{" "}
        </p>
        <Listing allPrismicPost={allPrismicPost.edges} />
      </PostsContainer>
      <FooterContainer>
        <Ul>
          <MediaQuery minWidth={650}>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                {" "}
                ← Forrige side{" "}
              </Link>
            )}
          </MediaQuery>

          <Space />

          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{ listStyle: "none", margin: 0, padding: "1rem" }}
            >
              <Nav
                to={`/blog/${i === 0 ? "" : i + 1}`}
                activeClassName="active"
                activeStyle={{
                  backgroundImage: `url("${activeIndicator}")`,
                  backgroundSize: "20px 2px",
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {i + 1}
              </Nav>
            </li>
          ))}
          <MediaQuery minWidth={650}>
            <Space />
            {!isLast && (
              <Link to={nextPage} rel="next">
                {" "}
                Neste side →{" "}
              </Link>
            )}
          </MediaQuery>
        </Ul>
      </FooterContainer>
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query TemplateBlogQuery($skip: Int!, $limit: Int!) {
    allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          uid
          data {
            date
            title {
              text
            }
            post_image {
              small {
                url
              }
            }
            description
            author
          }
        }
      }
    }
  }
`
