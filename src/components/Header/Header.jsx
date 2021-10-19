import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import store from '../../store'
import { useMode } from '../../PlayModeContext'

const NavLinkCategory = ({nameCard, handleToggleNoActive}) => {	
   return (
      <li>
			<NavLink to={`/${nameCard.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} className="header__link" onClick={handleToggleNoActive}>{nameCard}</NavLink>
		</li>
   );
};

const Header = () => {
	const playMode = useMode();
	let [isActive, setActive] = useState(false);
	
	const handleToggleNoActive = () => {
		setActive(false);
		document.body.classList.remove("_lock");
	}

	const handleToggle = () => {
		setActive(!isActive);
		document.body.classList.toggle("_lock")
	}
	
   return (
      <header className="header">
			<div className="header__toggle toggle">
				<span className="toggle__text">Train</span>
				<label className="toggle__switch switch">
					<input className="switch__input" type="checkbox" onClick={playMode.toggleMode} />
					<span className="switch__slider"></span>
				</label>
				<span className="toggle__text">Play</span>
			</div>
			<div className="header__menu">
				<div className={`header__burger ${isActive ? '_active' : ''}`} onClick={ handleToggle }>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className={`header__nav ${isActive ? '_active' : null}`}>
					<ul className="header__list"  onClick={handleToggleNoActive}>
						<li>
							<NavLink exact to="/" className="header__link">Main</NavLink>
						</li>
						{Object.values(store).map((card) => <NavLinkCategory key={card.name} nameCard={card.name} />) }
					</ul>
				</nav>
				<div className="header__overlay" onClick={handleToggleNoActive}></div>
			</div>
		</header>
   );
};
export default Header;