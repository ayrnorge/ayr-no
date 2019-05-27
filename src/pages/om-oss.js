import React, { useContext } from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/PageLayout"
import SEO from "../components/seo"
import HubspotFormConfigured from '../components/HubspotFormConfigured/index'
import styled from '@emotion/styled'
import { MenuContext } from '../Context/Menu'
import SideDrawer from '../components/SideDrawer/index'
import Backdrop from '../components/Backdrop/index'
import MediaQuery from 'react-responsive';
import Menu from '../components/Menu/index'


const Content = styled.div`
width: 1050px;
height: 100%;
margin: 0 0 2rem 14rem;
padding: 0 4rem 2rem 2rem;
@media screen and (max-width: 650px) {
  margin: 0;
}
`

const aboutUs = ({ data: { prismicWhoAreWe } }) => {
  const { isOpen, closeMenu } = useContext(MenuContext) || { isOpen: false }
  return (
    <PageLayout>
       <MediaQuery minWidth={650}>
      <div style={{position: 'fixed'}}>
        <Menu  />
      </div>
       </MediaQuery>
    <Content>
    <SEO title="Om oss" />
    <h1>{prismicWhoAreWe.data.title.text}</h1>
    <div
    dangerouslySetInnerHTML={{ __html: prismicWhoAreWe.data.content.html }}
    />
    <HubspotFormConfigured topic={prismicWhoAreWe.data.title.text}/>
    </Content>
    <MediaQuery minWidth={650}>
    <SideDrawer show={isOpen} />
    {isOpen ? <Backdrop click={closeMenu} /> : null}
    </MediaQuery>
    </PageLayout>
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
      about_us_image{
      url
    }
    }
  }
  }
`