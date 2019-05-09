import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header /index"
import Helmet from 'react-helmet';
import styled from '@emotion/styled'
import SideMenu from '../components/SideMenu'
import MediaQuery from 'react-responsive';
import HubspotFormConfigured from '../components/HubspotFormConfigured/index.js'
import IntercomConfigured from '../components/Intercom/index'

const Container = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 650px) {
  margin: 0 0 2rem;
}
` 

const Content = styled.div`
width: 100%;
height: 100%;
margin: 0 0 2rem 14rem;
padding: 0 4rem 2rem 2rem;
@media screen and (max-width: 650px) {
  margin: 0 1rem 2rem 1rem;
}
`

const ImageContainer = styled.div`
margin: 0 6rem 0 6rem;
`


const Service = ({ data: { prismicService } }) => {
  const { data } = prismicService
  return (
    <>
      <Header />
       <Helmet>{data.title.text}</Helmet> 
      <Container>
        <MediaQuery minWidth={650}>
        <SideMenu />
        </MediaQuery>
      <Content>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        <HubspotFormConfigured topic={data.keyword} />
      </Content>
        <MediaQuery minWidth={650}>
      <ImageContainer>
      <img
      src={data.image.url}
      alt={data.image.alt}
      />
       </ImageContainer>
      </MediaQuery>
      <IntercomConfigured />
      </Container>
      </>
  )
}

export default Service


export const PageTemplateQuery = graphql`
query ServiceBySlug($uid: String!) {
  prismicService(uid: { eq: $uid }){
  uid
  data {
    keyword
    title {
      text
    }
    content {
         html
        }
    image {
      url
      alt
    }
      }
    }
  }
`

