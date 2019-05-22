import React from 'react'
import styled from '@emotion/styled'
import AnchoredMenuButton from '../components/AnchoredMenuButton/index'
import { Link } from 'gatsby'
import '../components/layout.css'

const Container = styled.div`
  display: flex;
  direction: row;
  max-width: 2500px;
  order: 3;
  padding: 0 60px 0; 
  @media screen and (max-width: 768px) {
      margin-bottom: 8rem;
      padding: 0 1rem 1rem; }
`

const Spacer = styled.div`
width: 10rem;
`


const Footer = () => {
    return (
  <Container>
  <AnchoredMenuButton />
  <Spacer />
  <div className="footer-link">
  <Link className="nav-link" style={{marginRight: '2rem'}} to="/tjenester/">Hva kan vi?</Link>
  <Link className="nav-link" style={{marginRight: '2rem'}} to="/om-oss/">Hvem er vi?</Link>
  <Link className="nav-link"style={{marginRight: '2rem'}} to="/tjenester-gsuite-kurs">Hva kan du lære?</Link>
  <Link className="nav-link" to="/blog/">Her blogger vi</Link>
  </div>
      </Container>
    )
}

export default Footer