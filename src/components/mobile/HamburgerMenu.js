import React from 'react';
import { Spin as Hamburger } from 'hamburger-react';

export default function HamburgerMenu({isOpenMenu, setIsOpenMenu}) {
    
  return (
    <div>
      <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} direction="left" size={30} color="var(--hover-color)" />
    </div>
  )
}

