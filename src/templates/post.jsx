import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import IntercomConfigured from '../components/Intercom/index'
import styled from '@emotion/styled'

const PostContainer = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
`

const PrevContainer = styled.div`
position: fixed;
margin-left: -10rem;
margin-top: 20rem;
`

const NextClontainer = styled.div`
position: fixed;
margin-left: 70rem;
margin-top: 20rem;
`



const Post = ({ data: { prismicPost, allPrismicPost } }) => {
  const { data } = prismicPost
  
  const currentIndex = allPrismicPost.edges.findIndex((el) => el.node.uid === prismicPost.uid);
  const prevIndex = currentIndex + 1;
  const nextIndex = currentIndex - 1;
  const prevSlug = prevIndex >= allPrismicPost.edges.length ? null : allPrismicPost.edges[prevIndex].node.uid;
  const nextSlug = nextIndex < 0 ? null : allPrismicPost.edges[nextIndex].node.uid;

  return (
      <Layout>
      <PostContainer>
      <h1>{data.title.text}</h1>
      <PrevContainer><Link to={`${prevSlug}`}>Forrige</Link></PrevContainer>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      <NextClontainer><Link to={`${nextSlug}`}>Neste</Link></NextClontainer>
      <IntercomConfigured />
      </PostContainer>
      </Layout>
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