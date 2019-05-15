import React, { useContext }  from "react"
import { graphql, Link } from "gatsby"
import Listing from "../components/Listing"
import IntercomConfigured from '../components/Intercom/index'
import SEO from "../components/seo"
import { MenuContext } from '../Context/Menu'
import AnchoredMenuButton from '../components/AnchoredMenuButton'
import SideDrawer from '../components/SideDrawer/index'
import Backdrop from '../components/Backdrop/index'
import styled from '@emotion/styled'
import Header from '../components/Header /index'

const MenuContainer = styled.div`
  bottom: 1.5rem;
  left: 2.5rem;
  position: fixed;
`
const PostsContainer = styled.div`
  margin: auto;
  width: 70%;
`


const Blog = ( { data: {allPrismicPost} }) => {
    const { isOpen, closeMenu } = useContext(MenuContext)
    return(
      <div>
        <Header />
        <h1 style={{margin: '0 0 1rem 19rem'}}>Her blogger vi</h1>
        <p style={{margin: '0 0 1rem 19rem', paddingBottom: '1rem'}}>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit <br/> 
        <Link>Don't miss out the next post</Link>
        </p>
          <PostsContainer>
          <Listing allPrismicPost={allPrismicPost.edges} />
          <Listing allPrismicPost={allPrismicPost.edges} />
          </PostsContainer>
      <IntercomConfigured />
      <SideDrawer show={isOpen} />
      {isOpen ? <Backdrop click={closeMenu} /> : null}
      <MenuContainer>
      <AnchoredMenuButton />
      </MenuContainer>
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

