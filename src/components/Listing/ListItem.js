import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Item = styled.li`
  margin-bottom: 1.45rem;
`
const Headline = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin-bottom: 0;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const StyledLink = styled(Link)`
  font-size: 2.369rem;
  font-style: normal;
  `

export default class ListItem extends Component {
  render() {
    const { node } = this.props
    return (
      <Item>
        <Headline>
          {node.data.date}
        </Headline>
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
        <div>{node.data.description}</div>
      </Item>
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
}