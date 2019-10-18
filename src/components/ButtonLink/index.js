import React from "react"
import "./ButtonLink.css"

export default function ButtonLink({ styleName, text, url }) {
  return (
    <a className={`button-link ${styleName || ""}`} href={url}>
      {text}
    </a>
  )
}
