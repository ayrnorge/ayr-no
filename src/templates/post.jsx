import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import PostLayout from "../components/PostLayout"
import IntercomConfigured from '../components/Intercom/index'
import styled from '@emotion/styled'
import AnchoredMenuButton from '../components/AnchoredMenuButton/index'
import Backdrop from '../components/Backdrop/index'
import SideDrawer from '../components/SideDrawer/index'
import { MenuContext } from '../Context/Menu'
import moment from 'moment'
import HubspotFormConfigured from '../components/HubspotFormConfigured/index'
import arrowRight from '../images/iconfinder_ChevronRight_1031536.png' 
import arrowLeft from '../images/iconfinder_ChevronLeft.png'
import MediaQuery from 'react-responsive';
import { FacebookIcon, LinkedinIcon, FacebookShareButton, LinkedinShareButton,  } from 'react-share'
import iconFacebook from '../images/icon_facebook.svg'
import iconLinkedIn from '../images/icon_linkedin.svg'

const PostContainer = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
`

const PrevContainer = styled.div`
position: fixed;
margin-left: -10rem;
margin-top: 15rem;
`

const NextClontainer = styled.div`
position: fixed;
margin-left: 53rem;
margin-top: 15rem;
`

const Img = styled.img`
padding: 1.6rem 0;
width: 100%;
height: 423px;
@media screen and (max-width: 768px) {
  height: 160px;
} 
`
const MenuContainer = styled.div`
  bottom: 1.5rem;
  left: 2.5rem;
  position: fixed;
`

const Icon = styled.img`
height: 15px; 
margin: 0 0.5rem;
`

const Post = ({ data: { prismicPost, allPrismicPost } }) => {
  const { data } = prismicPost
  const { isOpen, closeMenu } = useContext(MenuContext) || { isOpen: false } // the || operator was added in order to run gatsby build 
  
  const currentIndex = allPrismicPost.edges.findIndex((el) => el.node.uid === prismicPost.uid);
  const prevIndex = currentIndex + 1;
  const nextIndex = currentIndex - 1;
  const prevSlug = prevIndex >= allPrismicPost.edges.length ? null : allPrismicPost.edges[prevIndex].node.uid;
  const nextSlug = nextIndex < 0 ? null : allPrismicPost.edges[nextIndex].node.uid;
  return (
    <PostLayout>
      <PostContainer>
      <h1>{data.title.text}</h1>
      <span>{moment(`${data.date}`).format('DD MMMM YYYY')} - skrevet av {data.author}</span>
      <Img src={data.post_image.url} alt={data.post_image.alt} />
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <FacebookShareButton url={`http://ayr.no/${prismicPost.uid}`}><Icon src={iconFacebook} />
      </FacebookShareButton> 
      <LinkedinShareButton url={prismicPost.uid}><Icon src={iconLinkedIn} />
      </LinkedinShareButton>
      
      </div>
      {prevSlug ? 
      <PrevContainer>
        <Link to={`${prevSlug}`}><img style={{width: '60px' }} src={arrowLeft} alt="left arrow icon" /></Link></PrevContainer> : null }
      {nextSlug ? 
      <NextClontainer>
        <Link to={`${nextSlug}`}><img style={{width: '60px' }} src={arrowRight} alt="right arrow icon" /></Link></NextClontainer> : null }
      <IntercomConfigured />
      <HubspotFormConfigured topic={'Chromebook'} />
      </PostContainer>
      <SideDrawer show={isOpen} />
      {isOpen ? <Backdrop click={closeMenu} /> : null}
      <MediaQuery minWidth={650}>
      <MenuContainer>
      <AnchoredMenuButton />
      </MenuContainer>
      </MediaQuery>
      </PostLayout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
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
    allPrismicPost{
      edges{
        node{
          uid
        }
      }
    }
  }
`