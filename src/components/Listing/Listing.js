import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListItem from './ListItem'

const List = styled.ul`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
`

export default class Listing extends Component {
  render() {
    const { allPrismicPost } = this.props
    return (
      <List>
        {allPrismicPost.map(post => {
          return <ListItem key={post.node.uid} node={post.node} />
        })}
      </List>
    )
  }
}

Listing.propTypes = {
  allPrismicPost: PropTypes.array.isRequired,
}