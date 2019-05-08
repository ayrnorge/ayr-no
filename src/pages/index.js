import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import { MenuContext } from '../Context/Menu'
import Header from "../components/Header /index"
import SEO from "../components/seo"
import Carousel from '../components/Carousel/index'
import styled from '@emotion/styled'
import BigImage from '../images/bg-circle-big.svg'
import SmallImage from '../images/bg-circle-small.svg'
import Footer from '../components/Footer'
import SideDrawer from '../components/SideDrawer/index'
import Backdrop from '../components/Backdrop/index'
import MediaQuery from 'react-responsive';


const Background = styled.div`
min-height: 100vh;
background-image: url(${BigImage}), url(${SmallImage});
background-position: 780px -660px, -200px 550px;
background-repeat: no-repeat, no-repeat;
background-size: 1655px auto, 600px auto;
@media screen and (max-width: 768px) {
  background-position: right -90px top -130px, -200px 550px;
  background-size: 200px auto, 600px auto;
}
`

const HomeContainer = styled.div`
margin-top: 200px;
padding: 0 1.5rem; }
@media screen and (max-width: 768px) {
  .home-main-container {
    margin-top: 3rem;
    display: block;
    padding: 0 .1rem; }
`

const IndexPage = ({ data: { prismicHomepage } }) => {
  const { isOpen, closeMenu } = useContext(MenuContext)

  return(
  <Background>
    <Header />
    <SideDrawer show={isOpen} />
    {isOpen ? <Backdrop click={closeMenu} /> : null} 
    <HomeContainer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Carousel content={prismicHomepage.data.slider_content}/>
    </HomeContainer>
    <MediaQuery minWidth={650}>
      <Footer />
    </MediaQuery>
    </Background>
  )
}

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