import React, { useContext }  from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Listing from "../components/Listing"
import IntercomConfigured from '../components/Intercom/index'
import SEO from "../components/seo"
import { MenuContext } from '../Context/Menu'
import AnchoredMenuButton from '../components/AnchoredMenuButton'
import SideDrawer from '../components/SideDrawer/index'
import Backdrop from '../components/Backdrop/index'
import styled from '@emotion/styled'


const Container = styled.div`
hieght: 100vh;
max-width: 13rem;
padding: 1rem;
position: fixed;
`

const MenuContainer = styled.div`
  bottom: 1.5rem;
  left: 2.5rem;
  position: fixed;

`


const Blog = ( { data: {allPrismicPost} }) => {
    const { isOpen, closeMenu } = useContext(MenuContext)
    return(
      <Layout>
      <div style={{display: 'flex', direction: 'row'}}>
        <div>
          <Listing allPrismicPost={allPrismicPost.edges} />
        </div>
      <IntercomConfigured />
      <SideDrawer show={isOpen} />
      {isOpen ? <Backdrop click={closeMenu} /> : null}
      </div>
      <Container>
      </Container>
      <MenuContainer>
      <AnchoredMenuButton />
      </MenuContainer>
      </Layout>
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
          description
        }
      }
    }
  }
 }
`

