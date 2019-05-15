import React, { useContext, useEffect, useRef } from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { DropdownContext } from '../../Context/DropDown'

const Container = styled.div`
  background-color: #fff;
  max-width: 13rem;
  padding: 1rem;
  position: fixed;
`

const Dropdown = (props) => {
  const { showMenu, openMenu, menuClose } = useContext(DropdownContext)

  const menuRef = useRef()
  console.log(menuRef)
  
   useEffect(() => {
     if (showMenu) { 
    document.addEventListener("click", menuClose) 
    } 
    return () =>  document.removeEventListener("click", menuClose) 
  
  }, [showMenu]) 

    return (
      <Container>
      <ul style={{ padding: '0', listStyleType: 'none' }}>{props.data.map((page) =>
      <li onClick={openMenu} key={page.title} style={{ paddingBottom: '0.7rem', fontSize: '.8rem', color: '#d3d2d4' }}>
      <Link to={`/${page.uid}`} activeClassName="active">
      {page.keyword} 
      </Link>
     { showMenu ? <ul className="sub-menu">
      {page.subpages.map(subpage => 
          <Link onClick={openMenu} activeClassName="active" to={`/${subpage.uid}`} key={subpage.title}>{subpage.title}</Link>
      )}
      </ul> : null }
      </li>
      )}</ul>
  </Container>
    )
}

export default Dropdown
