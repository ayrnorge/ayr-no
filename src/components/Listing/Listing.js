import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListItem from './ListItem'

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  } 
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