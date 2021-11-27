import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Menu.css';

function Menu() {
  
  const [isOpenMenuList, setIsOpenMenuList] = useState(false);

  const handleClickOpenMenu = () => {
    setIsOpenMenuList((prev) => !prev)
  }

  return (
    <div>
      <div className="menu">
        <div className="menu-btn" onClick={handleClickOpenMenu}>
          <HamburgerMenu />
        </div>
      <nav className={isOpenMenuList ? "menu-list" : "menu-list-hidden"}>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Work</li>
        <li>Résumé</li>
        <li>Contact</li>
      </ul>
      </nav>
      </div>
    </div>
  )
}

export default Menu
