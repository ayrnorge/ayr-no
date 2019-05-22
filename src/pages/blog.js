import React, { useContext }  from "react"
import { graphql } from "gatsby"
import Listing from "../components/Listing"
import IntercomConfigured from '../components/Intercom/index'
import SEO from "../components/seo"
import { MenuContext } from '../Context/Menu'
import AnchoredMenuButton from '../components/AnchoredMenuButton'
import SideDrawer from '../components/SideDrawer/index'
import Backdrop from '../components/Backdrop/index'
import styled from '@emotion/styled'
import Header from '../components/Header /index'
import MediaQuery from 'react-responsive';


const IconContainer = styled.div`
bottom: 3rem;
left: 3rem;
position: fixed;
`

const PostsContainer = styled.div`
  margin: auto;
  width: 70%;
`


const Blog = ( { data: {allPrismicPost} }) => {
    const { isOpen, closeMenu } = useContext(MenuContext) || { isOpen: false }
    return(
      <div>
        <Header />
          <PostsContainer>
        <h1>Her blogger vi</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit <br/> 
        </p>
          <Listing allPrismicPost={allPrismicPost.edges} />
          </PostsContainer>
      <IntercomConfigured />
      <SideDrawer show={isOpen} />
      {isOpen ? <Backdrop click={closeMenu} /> : null}
      <MediaQuery minWidth={650}>
      <IconContainer>
      <AnchoredMenuButton />
      </IconContainer>
      </MediaQuery> 
      </div>
    )
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

