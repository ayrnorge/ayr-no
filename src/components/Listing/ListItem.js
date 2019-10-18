import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import moment from "moment"

const Img = styled.img`
  width: 274px;
  height: 172px;
`

const Item = styled.div`
  width: 290px;
  padding: 6px;
  margin-bottom: 1.45rem;
`
const Headline = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const StyledLink = styled(Link)`
  word-wrap: break-word;
  font-weight: semi-bold;
`

export default class ListItem extends Component {
  render() {
    const { node } = this.props
    return (
      <Item>
        <Img src={node.data.post_image.small.url} />
        <Headline>
          {moment(`${node.data.date}`).format("DD MMMM YY")} - skrevet av{" "}
          {node.data.author}
        </Headline>
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
      </Item>
    )
  }
}
