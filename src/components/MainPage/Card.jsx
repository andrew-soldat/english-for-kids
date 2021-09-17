import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = ({nameCard, imgCard}) => {

   return (
      <NavLink key={nameCard} to={`/${nameCard.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} className="card-category">
         <img className="card-category__image" src={imgCard} alt={nameCard} />
			<div className="card-category__text">{nameCard}</div>
      </NavLink>
   );
};
export default Card;
