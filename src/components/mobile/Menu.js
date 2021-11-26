import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'

function Menu() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    
  return (
    <div>
      <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} direction="right" size={30} color="var(--white-color)"/>
    </div>
  )
}

export default Menu;
