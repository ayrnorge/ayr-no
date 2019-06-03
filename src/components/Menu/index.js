import React, { useContext }from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import './menu.css'
import { MenuContext } from '../../Context/Menu'
import { DropdownContext } from '../../Context/DropDown'
import ButtonLink from '../ButtonLink/index'


const Menu = ({ data, styleName })  => {
    const { closeMenu } = useContext(MenuContext) || { isOpen: false }
    const { currentTags } = useContext(DropdownContext) || { currentTags: []}

    data.sort((a ,b) => {
        return a.position - b.position
    })
        // function to sort subpages 
     data.forEach((mainPages) => {
        mainPages.subpages.sort((a, b) => a.position - b.position )
    })  
 
    return(
    <div className={`menu ${styleName || ''}`}>
        {  <ul className={`menu ${styleName || ''}`}>{data.map((page) =>
        <li  key={page.position} className={`menu ${styleName || ''}`}>
        <Link to={`/${page.uid}`}  key={page.position} activeClassName="active" onClick={closeMenu}>
        {page.keyword} 
        </Link>
        <ul className={`menu ${styleName || ''}`}>
        {page.subpages.map(subpage =>
            { return ( 
                subpage.tags.some(element => currentTags.includes(element)) &&  //tags array comparison to show the proper sub-menu list 
              <Link activeClassName="active" to={`/${subpage.uid}`} key={subpage.title} onClick={closeMenu}>{subpage.title}</Link> // the currentTag comes from Service component
              )}
        )}
        </ul>
        </li>
        )}
        </ul> } 
         
        <ButtonLink text={"Ta Kontakt"} url="tel:+4745969999"/>
    </div>
)}
 

export default (props) => (
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
           subpages.push( { title: sub.node.data.title.text, uid: sub.node.uid, position: sub.node.data.position, tags: sub.node.tags });
                    }
                })
                mainPages.push({ keyword: edge.node.data.keyword, subpages, uid: edge.node.uid, position: edge.node.data.position })
            }
        })
        return (
        <Menu data={mainPages} {...props} />
    )}}
    />
    )
    