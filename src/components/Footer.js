import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import '../components/layout.css'
import Menu from '../components/Menu/index'

const Container = styled.div`
  display: flex;
  direction: row;
  max-width: 2500px;
  order: 3;
  padding: 0 10rem 0 12rem; 
  @media screen and (max-width: 768px) {
      margin-bottom: 8rem;
      padding: 0 1rem 1rem; }
`


const Footer = ({ links }) => {
  console.log('footer', links)
  
    return (
  <Container>
  <Link className="nav-link" style={{marginRight: '2rem'}} to="/tjenester/">Hva kan vi?</Link>
  <Link className="nav-link" style={{marginRight: '2rem'}} to="/om-oss/">Hvem er vi?</Link>
  <Link className="nav-link" to="/blog/">Her blogger vi</Link>
      </Container>
    )
}

export default Footer

/* 
  <Link className="nav-link" style={{marginRight: '2rem'}} to="/tjenester/">Hva kan vi?</Link>
  <Link className="nav-link" style={{marginRight: '2rem'}} to="/om-oss/">Hvem er vi?</Link>
  <Link className="nav-link" to="/blog/">Her blogger vi</Link>

*/