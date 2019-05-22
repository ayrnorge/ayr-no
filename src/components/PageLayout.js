import React from "react"
import PropTypes from "prop-types"
import Header from "./Header /index"
import IntercomConfigured from '../components/Intercom/index'
import "./layout.css"
import styled from '@emotion/styled'


const Container = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 650px) {
  margin: 0 1rem 2rem 1rem;
}
` 



const PageLayout = ({ children }) => (
          <div>
            <Header />
          <Container>
          {children}
          <IntercomConfigured />
          </Container>
          </div>
)

export default PageLayout

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}











