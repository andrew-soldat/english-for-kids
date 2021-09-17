import React from 'react';
import { NavLink } from 'react-router-dom';


const LinkCardCategory = ({nameCard, handleToggleNoActive}) => {
	
   return (
      <li>
			<NavLink to={`/${nameCard.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} className="header__link" onClick={handleToggleNoActive}>{nameCard}</NavLink>
		</li>
   );
};
export default LinkCardCategory;