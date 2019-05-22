import React from 'react';
import { PulseLoader } from 'react-spinners';
import HubspotForm from 'react-hubspot-form';
import './HubspotFormConfigured.css';

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
    </div>
  );
}

export default HubspotFormConfigured;