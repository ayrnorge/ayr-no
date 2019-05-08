import React from 'react'
import styled from '@emotion/styled'
import googlecloudBadge from '../images/google_cloud_partner_badge.svg'
import AnchoredMenuButton from '../components/AnchoredMenuButton/index'
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  direction: row;
  margin-top: 12rem;
  max-width: 2500px;
  order: 3;
  padding: 0 60px 35px; 
  @media screen and (max-width: 768px) {
      margin-bottom: 8rem;
      padding: 0 1rem 1rem; }
`

const Img = styled.img`
height: 58px;
margin-left: auto;
width: 120px;
@media screen and (max-width: 768px) {
  display: none;
}
`

const Spacer = styled.div`
width: 8rem;
`

const Footer = () => {
    return (
 <Container>
  <AnchoredMenuButton />
  <Spacer />
<Link style={{marginRight: '2rem'}} to="/tjenester/">Hva kan vi?</Link>
<Link style={{marginRight: '2rem'}} to="/om-oss/">Hvem er vi?</Link>
 <Link style={{marginRight: '2rem'}} to="/gsuite-kurs">Hva kan du lære?</Link>
 <Link to="/blog/">Her blogger vi</Link>
        <Img className="footer-child badge-google" src={googlecloudBadge} alt="Google Cloud partner badge" />
      </Container>
    )
}

export default Footer