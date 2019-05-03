import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import './sideMenu.css'

const Container = styled.div`
background-color: #fff;
max-width: 9.5rem;
padding: .5rem .5rem 0 0;
position: fixed;
`

 const SideMenu = ({ data }) => {
    return(
    <Container>
        <ul>{data.map((page) =>
        <li><Link to={`/${page.uid}`} key={page.title} activeClassName="active">
        {page.keyword} 
        </Link>
        <ul className="sub-menu">
        {page.subpages.map(subpage => 
            <Link activeClassName="active" to={`/${subpage.uid}`} key={subpage.title}>{subpage.title}</Link>
        )}
        </ul>
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
           subpages.push( { title: sub.node.data.title.text, uid: sub.node.uid });
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
    
