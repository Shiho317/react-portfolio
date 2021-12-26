import React, { useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Menu.css';

export default function Menu() {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const IsCloseMenu = () => {
    setIsOpenMenu(false)
  }

  const [isOpenMenuList, setIsOpenMenuList] = useState(false);

  const handleClickOpenMenu = () => {
    setIsOpenMenuList((prev) => !prev)
  }

  return (
    <div>
      <div className="menu">
        <div className="menu-btn" onClick={handleClickOpenMenu}>
          <HamburgerMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
        </div>
      <div className={isOpenMenuList ? "menu-list" : "menu-list-hidden"}>
      <nav>
        <Scroll 
        to ="home" 
        spy={true}
        smooth={true}
        duration={1000}
        onClick={() => {handleClickOpenMenu(); IsCloseMenu();}}>
        Home
        </Scroll>

        <Scroll
        to="about"
        spy={true} 
        smooth={true}
        duration={1000}
        onClick={() => {handleClickOpenMenu(); IsCloseMenu();}}>
        About Me
        </Scroll>

        <Scroll
        to="work"
        spy={true} 
        smooth={true}
        duration={1000}
        onClick={() => {handleClickOpenMenu(); IsCloseMenu();}}>
        Work
        </Scroll>

        <Scroll
        to="resume" 
        spy={true} 
        smooth={true}
        duration={1000}
        onClick={() => {handleClickOpenMenu(); IsCloseMenu();}}>
        Résumé
        </Scroll>

        <Scroll 
        to="contact" 
        spy={true} 
        smooth={true}
        duration={1000}
        onClick={() => {handleClickOpenMenu(); IsCloseMenu();}}>
        Contact
        </Scroll>
      </nav>
      </div>
      </div>
    </div>
  )
}

