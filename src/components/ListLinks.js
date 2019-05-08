import React from 'react'
import {Link} from 'gatsby'



const ListLinks = () => (
<ul style={{ listStyle: 'none', marginLeft: '2rem'}}>
  <li style={{ paddingBottom: '10px' }}>
   <Link to="/tjenester">Hva kan vi?</Link>
  </li>
  <li style={{ paddingBottom: '10px' }}>
   <Link to="/om-oss">Hvem er vi</Link>
  </li>
  <li style={{ paddingBottom: '10px' }}>
   <Link to="/gsuite-kurs">Hva kan du lære?</Link>
  </li>
  <li>
   <Link to="/blog">Her blogger vi</Link>
  </li>
</ul>
)

export default ListLinks;