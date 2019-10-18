import React, { useEffect } from "react"
import "./HubspotFormConfigured.css"

const HubspotFormConfigured = ({ topic }) => {
  const TEXT = `Vil du vite mer om ${topic}?`

  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://ayr.freshsales.io/web_forms/652632270f2b546ea64fa8c8efc8fdd5fc0da77ec898a7987b4cc7195d0f2132/form.js'
    script.async = true
    script.crossorigin = 'anonymous';
    script.id = 'fs_652632270f2b546ea64fa8c8efc8fdd5fc0da77ec898a7987b4cc7195d0f2132'

    document.getElementById('form').appendChild(script);

    return () => {
      document.getElementById('form').innerHtml = '';
    }
  }, [topic])

  return (
    <div className="hubspot-form" id="form">
      <h2>{TEXT}</h2>
      <p>Fyll ut skjemaet under, og vi kontakter deg for en hyggelig prat.</p>
    </div>
  )
}

export default HubspotFormConfigured
