import React, { useContext } from 'react'
import {Link} from 'gatsby'
import {MenuContext}from '../Context/Menu'
import { navigate } from "gatsby"


const ListLinks = () => {
  const { closeMenu } = useContext(MenuContext)

  return(
<ul style={{ listStyle: 'none', marginLeft: '2rem'}}>
  <li style={{ paddingBottom: '10px' }}>
   <div to="/tjenester" onClick={closeMenu}>Hva kan vi?</div>
  </li>
  <li style={{ paddingBottom: '10px' }}>
   <Link to="/om-oss" onClick={closeMenu}>Hvem er vi</Link>
  </li>
  <li style={{ paddingBottom: '10px' }}>
   <Link to="/gsuite-kurs" onClick={closeMenu}>Hva kan du lære?</Link>
  </li>
  <li>
   <Link to="/blog" onClick={closeMenu}>Her blogger vi</Link>
  </li>
</ul>
  )
}

export default ListLinks;


/* 
   <div onClick={()=> { closeMenu(); navigate("/tjenester") }}>Hva kan vi?</div>

*/