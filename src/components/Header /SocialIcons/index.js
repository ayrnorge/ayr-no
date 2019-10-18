import * as React from "react"
import facebookIcon from "./icon_facebook.svg"
import instagramIcon from "./icon_instagram.svg"
import linkedinIcon from "./icon_linkedin.svg"
import "./SocialIcons.css"

export default function SocialIcons() {
  return (
    <div className="header-child social-icons">
      <a
        href="https://www.facebook.com/ayrnorge/"
        className="icon"
        target="_blank"
      >
        <img src={facebookIcon} alt="Facebook icon" />
      </a>
      <a
        href="https://www.linkedin.com/company/ayr-as/"
        className="icon"
        target="_blank"
      >
        <img src={linkedinIcon} alt="LinkedIn icon" />
      </a>
      <a
        href="https://www.instagram.com/ayr.no/"
        className="icon"
        target="_blank"
      >
        <img src={instagramIcon} alt="Instagram icon" />
      </a>
    </div>
  )
}
