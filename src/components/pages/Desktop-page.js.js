import React from 'react';
import DtAbout from './About';
import DtContact from './Contact';
import DesktopMenu from './DesktopMenu';
import DtHome from './Home';
import DtResume from './Resume';
import DtWork from './Work';

function DesktopPage() {
  return (
    <div>
      <DesktopMenu/>
      <DtHome/>
      <DtAbout/>
      <DtWork/>
      <DtResume/>
      <DtContact/>
    </div>
  )
}

export default DesktopPage
