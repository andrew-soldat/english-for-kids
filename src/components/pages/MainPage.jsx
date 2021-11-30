import React from 'react'
import store from '../../store'
import { NavLink } from 'react-router-dom'


const CardCategory = ({nameCategory, imgCategory}) => {
   return (
      <NavLink to={`/${nameCategory.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} className="card-category">
         <img className="card-category__image" src={imgCategory} alt={nameCategory} />
			<div className="card-category__text">{nameCategory}</div>
      </NavLink>
   );
};

const MainPage = () => {
	
   return (
		<main className="page">
			<div className="category-title">
				<h1 className="category-title__text">Сategory сards</h1>
			</div>
			<div className="cards">
				{Object.values(store).map((card) => <CardCategory key={card.name} nameCategory={card.name} imgCategory={card.imgSrc} />) }
			</div>
		</main>
   );
};

export default MainPage;
