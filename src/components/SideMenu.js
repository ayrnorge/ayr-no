import React, { useContext }from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import './sideMenu.css'
import AnchoredMenuButton from '../components/AnchoredMenuButton/index'
import SideDrawer from '../components/SideDrawer/index'
import { MenuContext } from '../Context/Menu'
import Backdrop from '../components/Backdrop/index'
import ButtonLink from '../components/ButtonLink/index'

const Container = styled.div`
background-color: #fff;
max-width: 13rem;
padding: 1rem;
position: fixed;
`
const IconContainer = styled.div`
bottom: 1.5rem;
left: 3.5rem;
position: fixed;
`

 const SideMenu = ({ data }) => {
    const { isOpen, closeMenu } = useContext(MenuContext)

    data.sort((a ,b) => {
        return a.position - b.position
    })
        // function to sort subpages 
     data.forEach((mainPages) => {
        mainPages.subpages.sort((a, b) => a.position - b.position )
    }) 
 
    return(
    <Container>
        <ul style={{ padding: '0', listStyleType: 'none' }}>{data.map((page) =>
        <li key={page.title} style={{ paddingBottom: '0.8rem', fontSize: '1.1rem', color: '#d3d2d4' }}><Link to={`/${page.uid}`} activeClassName="active">
        {page.keyword} 
        </Link>
        <ul className="sub-menu">
        {page.subpages.map(subpage => 
            <Link activeClassName="active" to={`/${subpage.uid}`} key={subpage.title}>{subpage.title}</Link>
        )}
        </ul>
        </li>
        )}</ul>
        <ButtonLink text={"Ta Kontakt"} url="tel:+4745969999"/>
         <SideDrawer show={isOpen} />
         {isOpen ? <Backdrop click={closeMenu} /> : null}
          <IconContainer>
          <AnchoredMenuButton />
          </IconContainer>
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
            position
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
           subpages.push( { title: sub.node.data.title.text, uid: sub.node.uid, position: sub.node.data.position });
                    }
                })
                mainPages.push({ keyword: edge.node.data.keyword, subpages, uid: edge.node.uid, position: edge.node.data.position })
            }
        })
        return (
     <SideMenu data={mainPages} />
    )}}
    />
    )
    
