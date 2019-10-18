import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import "../components/layout.css"
import { StaticQuery, graphql } from "gatsby"
import activeIndicator from "../images/active-indicator.svg"

const Container = styled.div`
  display: flex;
  direction: row;
  max-width: 2500px;
  order: 3;
  padding: 0 10rem 0 12rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 8rem;
    padding: 0 1rem 1rem;
  }
`

const Nav = styled(Link)`
  padding-bottom: 10px;
  :hover {
    background-image: url(${activeIndicator});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 20px 2px;
    padding-bottom: 10px;
  }
`

const Footer = ({ links }) => {
  links.sort((a, b) => {
    return a.position - b.position
  })
  // function to sort subpages
  links.forEach(mainPages => {
    mainPages.subpages.sort((a, b) => a.position - b.position)
  })

  return (
    <Container>
      {links.map(link => (
        <Nav key={link.keyword} to={link.uid} style={{ marginRight: "2rem" }}>
          {link.keyword}
        </Nav>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Fotoer {
        allPrismicService {
          edges {
            node {
              uid
              tags
              data {
                position
                keyword
                title {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const mainPages = []
      data.allPrismicService.edges.forEach(edge => {
        if (edge.node.tags.includes("Main Service")) {
          const subpages = []
          const cond = edge.node.tags.filter(
            tag => !tag.includes("Main Service")
          )
          data.allPrismicService.edges.forEach(sub => {
            if (
              !sub.node.tags.includes("Main Service") &&
              sub.node.tags.includes(cond[0])
            ) {
              subpages.push({
                title: sub.node.data.title.text,
                uid: sub.node.uid,
                position: sub.node.data.position,
                tags: sub.node.tags,
              })
            }
          })
          mainPages.push({
            keyword: edge.node.data.keyword,
            subpages,
            uid: edge.node.uid,
            position: edge.node.data.position,
          })
        }
      })
      return <Footer links={mainPages} {...props} />
    }}
  />
)
