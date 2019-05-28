import React from "react"
import { graphql } from "gatsby"
import Listing from "../components/Listing"
import IntercomConfigured from '../components/Intercom/index'
import styled from '@emotion/styled'
import Header from '../components/Header /index'
import Menu from '../components/Menu/index'
import MediaQuery from 'react-responsive'

const PostsContainer = styled.div`
  margin: auto;
  width: 70%;
`

const Blog = ( { data: {allPrismicPost} } ) => {

/*
  const currentIndex = allPrismicPost.edges.findIndex((el) => el.node.uid === prismicPost.uid);
  const prevIndex = currentIndex + 1;
  const nextIndex = currentIndex - 1;
  const prevSlug = prevIndex >= allPrismicPost.edges.length ? null : allPrismicPost.edges[prevIndex].node.uid;
  const nextSlug = nextIndex < 0 ? null : allPrismicPost.edges[nextIndex].node.uid;
*/

  return(
      <div>
        <Header />
        <MediaQuery minWidth={650}>
      <div style={{position: 'fixed'}}>
        <Menu  />
      </div>
       </MediaQuery>
          <PostsContainer>
        <h1>Her blogger vi</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit <br/> 
        </p>
          <Listing allPrismicPost={allPrismicPost.edges} />
          </PostsContainer>
      <IntercomConfigured />
      </div>
    )
}
 
 export default Blog

export const pageQuery = graphql`
 query BlogQuery {
  allPrismicPost(
    sort: { fields: [data___date], order: DESC }
    ) {
    edges{
      node{
        uid
        data{
          date
          title{
            text
          }
          post_image{
            small{
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
