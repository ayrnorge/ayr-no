import React, { useContext } from "react"
import { graphql } from "gatsby"
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
import MediaQuery from 'react-responsive'
import IntercomConfigured from '../components/Intercom/index'


const Background = styled.div`
position:relative;
display: flex;
flex-direction: column;
justify-content; space-between;
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
height: 100%;
margin-bottom: 10rem;
margin-top: 160px;
padding: 0 1.5rem; 
@media screen and (max-width: 768px) {
margin-top: 2.5rem;
  }
`

const FooterContainer = styled.div`
position: absolute;
right: 0;
bottom: 0;
left: 0;
padding: 1rem;
padding-bottom: 60px;
text-align: center;
`


const IndexPage = ({ data: { prismicHomepage } }) => {
  const { isOpen, closeMenu } = useContext(MenuContext) || { isOpen: false }

  return(
  <Background>
    <Header />
    <HomeContainer>
    <SEO title="Home" keywords={[`Google g suite`, `Chromebook`,`Google Cloud Platform`]} />
    <Carousel content={prismicHomepage.data.slider_content} />
    </HomeContainer>
    <MediaQuery minWidth={651}>
        <FooterContainer>
          <Footer />
        </FooterContainer>
    </MediaQuery>
    <IntercomConfigured />
    </Background>
  )
}

export default IndexPage

export const pageQuery = graphql`
query Homepage {
  prismicHomepage{
    data{
      slider_content{
        heading_description {
          html
        }
        slug{
          uid
        }
      }
    }
  }
}
`
