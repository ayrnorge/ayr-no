import React, { useContext } from "react"
import { Link } from "gatsby"
import { MenuContext } from "../Context/Menu"
import ActiveIndicator from "../images/active-indicator.svg"

const ListLinks = () => {
  const { closeMenu } = useContext(MenuContext) || { isOpen: false }

  return (
    <ul style={{ listStyle: "none", margin: "auto" }}>
      <li style={{ paddingBottom: "1rem" }}>
        <Link to="/om-oss" onClick={closeMenu}>
          Hvem er vi
        </Link>
      </li>
      <li style={{ paddingBottom: "1rem" }}>
        <Link to="/tjenester" onClick={closeMenu}>
          Hva kan vi?
        </Link>
      </li>
      <li style={{ paddingBottom: "1rem" }}>
        <Link to="/tjenester-gsuite-kurs" onClick={closeMenu}>
          Hva kan du lære?
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={closeMenu}>
          Her blogger vi
        </Link>
      </li>
    </ul>
  )
}

export default ListLinks
