import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import store from '../../store'
import { useMode } from '../../PlayModeContext'

const NavLinkCategory = ({nameCard, handleToggle}) => {	
   return (
      <li>
			<NavLink to={`/${nameCard.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} className="header__link" onClick={handleToggle}>{nameCard}</NavLink>
		</li>
   );
};

const Header = () => {
	const playMode = useMode()
	let [isActive, setActive] = useState(false)

	const handleToggle = () => {
		setActive(!isActive)
		document.body.classList.toggle("_lock")
	}
	
   return (
      <header className="header">
         <div className="header__toggle toggle">
            <span className="toggle__text">Train</span>
            <label className="toggle__switch switch">
               <input
                  className="switch__input"
                  type="checkbox"
                  onClick={playMode.toggleMode}
               />
               <span className="switch__slider"></span>
            </label>
            <span className="toggle__text">Play</span>
         </div>
         <div className="header__menu">
            <div
               className={
                  isActive ? ' header__burger _active' : 'header__burger'
               }
               onClick={handleToggle}
            >
               <span></span>
               <span></span>
               <span></span>
            </div>
            <nav
               className={isActive ? 'header__nav _active' : 'header__nav'}
            >
               <ul className="header__list">
                  <li>
                     <NavLink
                        exact
                        to="/"
                        className="header__link"
                        onClick={handleToggle}
                     >
                        Main
                     </NavLink>
                  </li>
                  {Object.values(store).map((card) => (
                     <NavLinkCategory
                        key={card.name}
                        nameCard={card.name}
                        handleToggle={handleToggle}
                     />
                  ))}
               </ul>
            </nav>
            <div className="header__overlay" onClick={handleToggle}></div>
         </div>
      </header>
   );
};
export default Header;