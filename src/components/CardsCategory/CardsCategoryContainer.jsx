import React from 'react';
import CardCategory from './CardCategory'


const CardsCategoryContainer = ({modePlay, nameCategory, children}) => {
	
   return (
		<main className="page">
			<div className="category-title">
				<h1 className="category-title__text">{nameCategory}</h1>
			</div>
			<div className="cards">
				{Object.values(children).map((child) => 
					<CardCategory modePlay={modePlay} key={child.word} child={child} />
				)}
			</div>
			<div className="play">
				<button className="play__button">Start</button>
			</div>
		</main>
   );
};



export default CardsCategoryContainer;