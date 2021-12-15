import React from 'react';
import DtAbout from './About';
import DtHome from './Home';
import DtResume from './Resume';
import DtWork from './Work';

function DesktopPage() {
  return (
    <div>
      <DtHome/>
      <DtAbout/>
      <DtWork/>
      <DtResume/>
    </div>
  )
}

export default DesktopPage
