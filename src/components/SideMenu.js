import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import { Link } from "gatsby"

const Container = styled.div`
background-color: white;
height: 100%;
`

const SideMenu = ({ data }) => {
    const [ isOpen, setIsOpen ] = useState()
    
    console.log(isOpen)

    return(
    <Container>
        <ul>{data.map((page, index) =>
        <li><Link to={`/${page.uid}`} key={page.title} onClick={() => setIsOpen(index)}>
        {page.keyword}
        {isOpen === index ? page.subpages.map(subpage => <li>{subpage}</li>) : null } 
        </Link>
        </li>
        )}</ul>
    </Container>
)}


export default () => (
  <StaticQuery
    query={graphql`
    query SideMenu {
    allPrismicService{
    edges{
        node{
        uid
        tags
        data{
            keyword
            title{
            text
            }
        }
        }
    }
    }
     }
    `}
    render={data => { 
        const mainPages = []
        data.allPrismicService.edges.forEach(edge => {
        if (edge.node.tags.includes("Main Service")) {
        const subpages = []
        const cond = edge.node.tags.filter(tag => !tag.includes("Main Service"))
        data.allPrismicService.edges.forEach(sub => {
        if (!sub.node.tags.includes("Main Service") && sub.node.tags.includes(cond[0]) ) {
           subpages.push( { title: sub.node.data.title.text, uid: edge.node.uid });
                    }
                })
                mainPages.push({ keyword: edge.node.data.keyword, subpages, uid: edge.node.uid })
            }
        })
        return (
     <SideMenu data={mainPages} />
    )}}
    />
    )
    
