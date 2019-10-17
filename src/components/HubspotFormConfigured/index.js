import React from 'react';
import { PulseLoader } from 'react-spinners';
import HubspotForm from 'react-hubspot-form';
import './HubspotFormConfigured.css';
import {Helmet} from "react-helmet";

const HUBSPOT_PORTALID = '3055067';
const HUBSPOT_FORMID = '3293bc38-18b4-4af0-8094-4c00f0f71653';




const HubspotFormConfigured = ({ topic }) => {
  const TEXT = `Vil du vite mer om ${topic}?`;
  return (
    <div className='hubspot-form'>
        <h2>{TEXT}</h2>
      <p>Fyll ut skjemaet under, og vi kontakter deg for en hyggelig prat.</p>
      <HubspotForm
        portalId={HUBSPOT_PORTALID}
        formId={HUBSPOT_FORMID}
        // onSubmit={() => console.log('Submit!')}
        // onReady={(form) => console.log('Form ready!')}
        loading={<PulseLoader />}
      />
        <Helmet>
        <script src='https://ayr.freshsales.io/web_forms/652632270f2b546ea64fa8c8efc8fdd5fc0da77ec898a7987b4cc7195d0f2132/form.js' crossorigin='anonymous' id='fs_652632270f2b546ea64fa8c8efc8fdd5fc0da77ec898a7987b4cc7195d0f2132'></script>
        </Helmet>
    </div>
  );
}

export default HubspotFormConfigured;