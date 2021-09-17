import React from 'react';
import Card from './Card'



const MainPage = (props) => {
	

   return (
		<main className="page">
			<div className="cards">
				{Object.values(props.store).map((card) => <Card key={card.name} nameCard={card.name} imgCard={card.imgSrc} />) }
			</div>
		</main>
   );
};
export default MainPage;
