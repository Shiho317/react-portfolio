import React from 'react';
import { Spin as Hamburger } from 'hamburger-react';

function HamburgerMenu({isOpenMenu, setIsOpenMenu}) {
    
  return (
    <div>
      <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} direction="left" size={30} color="var(--white-color)" />
    </div>
  )
}

export default HamburgerMenu;
