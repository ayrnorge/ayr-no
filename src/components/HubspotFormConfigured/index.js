import React from "react"
import { PulseLoader } from "react-spinners"
import "./HubspotFormConfigured.css"
import { Helmet } from "react-helmet"

const HubspotFormConfigured = ({ topic }) => {
  const TEXT = `Vil du vite mer om ${topic}?`
  return (
    <div className="hubspot-form">
      <h2>{TEXT}</h2>
      <p>Fyll ut skjemaet under, og vi kontakter deg for en hyggelig prat.</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script
          src="https://ayr.freshsales.io/web_forms/652632270f2b546ea64fa8c8efc8fdd5fc0da77ec898a7987b4cc7195d0f2132/form.js"
          crossorigin="anonymous"
          id="fs_652632270f2b546ea64fa8c8efc8fdd5fc0da77ec898a7987b4cc7195d0f2132"
        />`,
        }}
      />
      {/* <Helmet></Helmet> */}
    </div>
  )
}

export default HubspotFormConfigured
