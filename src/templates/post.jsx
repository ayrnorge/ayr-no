import React from "react"
import { graphql, Link } from "gatsby"
import IntercomConfigured from '../components/Intercom/index'
import styled from '@emotion/styled'
import moment from 'moment'
import HubspotFormConfigured from '../components/HubspotFormConfigured/index'
import arrowRight from '../images/iconfinder_ChevronRight_1031536.png' 
import arrowLeft from '../images/iconfinder_ChevronLeft.png'
import MediaQuery from 'react-responsive';
import { FacebookShareButton, LinkedinShareButton,  } from 'react-share'
import iconFacebook from '../images/icon_facebook.svg'
import iconLinkedIn from '../images/icon_linkedin.svg'
import Menu from '../components/Menu/index'
import Header from '../components/Header /index'

const PrevContainer = styled.div`
position: fixed;
margin-left: 23rem;
margin-top: 15rem;
@media screen and (max-width: 1440px) {
  margin-left: 12rem;
} 
`
const NextContainer = styled.div`
position: fixed;
margin-left: 74rem;
margin-top: 15rem;
@media screen and (max-width: 1440px) {
  margin-left: 67rem;
} 
`
const Img = styled.img`
padding: 1.6rem 0;
width: 100%;
height: 423px;
@media screen and (max-width: 768px) {
  height: 160px;
} 
`
const Container = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 650px) {
  margin: auto;
}
` 
const Icon = styled.img`
height: 15px; 
margin: 0 0.5rem;
`
const Content = styled.div`
margin: 0 auto;
max-width: 800px;
padding: 0px 1.0875rem 1.45rem;
paddingTop: 0;
@media screen and (max-width: 650px) {
  margin: 0 1rem 2rem 1rem;
}
`

const Post = ({ data: { prismicPost, allPrismicPost } }) => {
  const { data } = prismicPost
  const currentIndex = allPrismicPost.edges.findIndex((el) => el.node.uid === prismicPost.uid);
  const prevIndex = currentIndex + 1;
  const nextIndex = currentIndex - 1;
  const prevSlug = prevIndex >= allPrismicPost.edges.length ? null : allPrismicPost.edges[prevIndex].node.uid;
  const nextSlug = nextIndex < 0 ? null : allPrismicPost.edges[nextIndex].node.uid;
  return (
      <>
      <Header />
      <Container>
      <MediaQuery minWidth={768}>
      <div style={{ position: 'fixed' }}>
      <Menu  />
      </div>
      {prevSlug ?
      <PrevContainer>
      <Link to={prevSlug}><img style={{width: '60px' }} src={arrowLeft} alt="left arrow icon" /></Link></PrevContainer> : null }
      {nextSlug ?
      <NextContainer>
      <Link to={nextSlug}><img style={{width: '60px' }} src={arrowRight} alt="right arrow icon" /></Link></NextContainer> : null }
      </MediaQuery>
      <Content>
      <h1>{data.title.text}</h1>
      <span>{moment(`${data.date}`).format('DD MMMM YYYY')} - skrevet av {data.author}</span>
      <Img src={data.post_image.url} alt={data.post_image.alt} />
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      <div style={{textAlign: 'left', paddingTop: '20px'}}>Del denne bloggen <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '10px' }}>
      <FacebookShareButton url={`http://ayr.no/${prismicPost.uid}`}><Icon src={iconFacebook} />
      </FacebookShareButton>
      <LinkedinShareButton style={{ouline: 'none' }}url={prismicPost.uid}><Icon src={iconLinkedIn} />
      </LinkedinShareButton>
      </div></div>
      <IntercomConfigured />
      <HubspotFormConfigured topic={'Chromebook'} />
      </Content>
      </Container>
      </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!)  {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
        post_image{
        url
        alt
        }
        date
        author
      }
    }
    allPrismicPost {
      edges{
        node{
          uid
        }
      }
    }
  }
`