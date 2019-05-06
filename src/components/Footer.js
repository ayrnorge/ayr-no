import React from 'react'
import styled from '@emotion/styled'

const FooterChild = styled.div`
display: flex;
  direction: row;
  justify-content: space-between;
  margin-top: auto;
  max-width: 2500px;
  order: 3;
  padding: 0 60px 35px; }
  @media screen and (max-width: 768px) {
    .footer {
      margin-bottom: 8rem;
      padding: 0 1rem 1rem; }
`

const Footer = ({ children }) => {
    return (
        <FooterChild>{children}</FooterChild>
    )
}

export default Footer