import React from 'react';
import { PulseLoader } from 'react-spinners';
import HubspotForm from 'react-hubspot-form';
import './HubspotFormConfigured.css';

const HUBSPOT_PORTALID = '3055067';
const HUBSPOT_FORMID = '3293bc38-18b4-4af0-8094-4c00f0f71653';


const HubspotFormConfigured = ({ topic }) => {
  const TEXT = `Vil du vite mer om ${topic}? Fyll ut skjemaet under, og vi kontakter deg for en hyggelig prat.`;
  return (
    <div className='hubspot-form'>
      <p>{TEXT}</p>
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