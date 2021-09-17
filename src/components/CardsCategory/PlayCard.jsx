import React from 'react';
// import Card from './Card'



const PlayCard = ({child}) => {

	return (
		<div className="card-item">
			<div className="card-item__front">
				<img className="card-item__image" src={child.imgSrc} alt={child.word} />
			</div>
		</div>
		// <div className="play">
			// <button className="play__button">Start</button>
		// </div>
	)
};
export default PlayCard;
