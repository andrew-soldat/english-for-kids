import React, { useState } from 'react';
import LinkCardCategory from './LinkCardCategory'
import { NavLink } from 'react-router-dom';
// import { useMode } from './../../ModePlayContext';

const Header = ( {toggleMode, store} ) => {
	// const modePlay = useMode();
	
	let [isActive, setActive] = useState(false);
	
	const handleToggleNoActive = () => {
		setActive(false);
		document.body.classList.remove("_lock");
	}

	const handleToggle = () => {
		setActive(!isActive);

		if (!isActive) {
			document.body.classList.add("_lock");
		} else {
			document.body.classList.remove("_lock");
		}
	};

	document.addEventListener("click", function (e) {
		if (!e.target.closest('.header__list li, .header__burger')) {
			setActive(false);
			document.body.classList.remove("_lock");
		}
	})
	
   return (
      <header className="header">
			<div className="header__toggle toggle">
				<span className="toggle__text">Train</span>
				<label className="toggle__switch switch">
					<input className="switch__input" type="checkbox" onClick={toggleMode} />
					<span className="switch__slider"></span>
				</label>
				<span className="toggle__text">Game</span>
			</div>
			<div className="header__menu">
				<div className={`header__burger ${isActive ? '_active' : ''}`} onClick={ handleToggle }>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className={`header__nav ${isActive ? '_active' : null}`}>
					<ul className="header__list">
						<li>
							<NavLink exact to="/" className="header__link" onClick={handleToggleNoActive}>Main</NavLink>
						</li>
						{Object.values(store).map((card) => <LinkCardCategory key={card.name} nameCard={card.name} handleToggleNoActive={handleToggleNoActive} />) }
					</ul>
				</nav>
				<div className="header__overlay"></div>
			</div>
		</header>
   );
};
export default Header;