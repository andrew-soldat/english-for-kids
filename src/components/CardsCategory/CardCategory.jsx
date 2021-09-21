import React, { useState } from 'react';

const CardCategory = ({child}) => {
	const [isActive, setActive] = useState(false);

	return (
		<div className={`card-item ${isActive ? '_active' : ''}`}>
			<div className="card-item__front">
				<img className="card-item__image" src={child.imgSrc} alt={child.word} onClick={ () => new Audio(child.audioSrc).play() } />
				<div className="card-item__content">
					<div className="card-item__text">{child.word}</div>
					<button className="card-item__rotate" onClick={ () => setActive(true) }></button>
				</div>
			</div>
			<div className="card-item__back" onMouseLeave={ () => setActive(false) } >
				<img className="card-item__image" src={child.imgSrc} alt={child.word} />
				<div className="card-item__text">{child.translation}</div>
			</div>
		</div>
	)
};
export default CardCategory;
