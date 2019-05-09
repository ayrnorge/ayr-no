import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HubspotFormConfigured from '../components/HubspotFormConfigured/index'
import styled from '@emotion/styled'
import AnchoredMenuButton from '../components/AnchoredMenuButton/index'
import { MenuContext } from '../Context/Menu'
import SideDrawer from '../components/SideDrawer/index'
import Backdrop from '../components/Backdrop/index'
import MediaQuery from 'react-responsive';
import IntercomConfigured from '../components/Intercom/index'


const IconContainer = styled.aside`
bottom: 1.5rem;
left: 3.5rem;
position: fixed;
`


const aboutUs = ({ data: { prismicWhoAreWe } }) => {
  const { isOpen, closeMenu } = useContext(MenuContext)
  return (
  <Layout>
    <SEO title="Om oss" />
    <h1>{prismicWhoAreWe.data.title.text}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: prismicWhoAreWe.data.content.html }}
    />
    <HubspotFormConfigured topic={prismicWhoAreWe.data.title.text}/>
    <MediaQuery minWidth={650}>
    <IconContainer>
    <SideDrawer show={isOpen} />
         {isOpen ? <Backdrop click={closeMenu} /> : null}
    <AnchoredMenuButton />
    </IconContainer>
    </MediaQuery>
    <IntercomConfigured />
  </Layout>
  )
}

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