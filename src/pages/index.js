import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/Header /index"
import SEO from "../components/seo"
import Carousel from '../components/Carousel/index'
import styled from '@emotion/styled'
import BigImage from '../images/bg-circle-big.svg'
import Footer from '../components/Footer'

const HomeContainer = styled.div`
margin-top: 200px;
padding: 0 1.5rem; }
@media screen and (max-width: 768px) {
  .home-main-container {
    margin-top: 3rem;
    display: block;
    padding: 0 .1rem; }
`



const IndexPage = ({ data: { prismicHomepage } }) => (
  <>
  <Header />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeContainer>
      <Carousel content={prismicHomepage.data.slider_content}/>
    </HomeContainer>
    <Footer>
      <Link to="/">Aloha</Link>
      <Link to="/blog/">test</Link>
    </Footer>
    </>
)

export default IndexPage

export const pageQuery = graphql`
query Homepage {
  prismicHomepage{
    id
  data{
    slider_content{
      heading_description{
        text
        html
      }
    }
  }
}
}
`

/*     
<div style={{ display: 'none' }}>{prismicHomepage.data.slider_content.map(c=>(
      <div
      dangerouslySetInnerHTML={{ __html: c.heading_description.html }}
    />
    ))}</div>
} 


 
 

*/