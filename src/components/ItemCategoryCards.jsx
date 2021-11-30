import React, { useState } from 'react'
import playAudio from './utils/playAudio';

const ItemCategoryCards = ({child}) => {
	const [isActive, setActive] = useState(false)

	const addClass = () => {
		setActive(true)
		if (window.innerWidth < 991) {
			setTimeout(() => setActive(false),2000)
		}
	}

	return (
      <div className={isActive ? 'card-item _active' : 'card-item'}>
         <div className="card-item__front">
            <img
               className="card-item__image"
               src={child.imgSrc}
               alt={child.word}
               onClick={() => playAudio(child.audioSrc)}
            />
            <div className="card-item__content">
               <div className="card-item__text">{child.word}</div>
               <button
                  className="card-item__rotate"
                  onClick={addClass}
               ></button>
            </div>
         </div>
         <div className="card-item__back" onMouseLeave={() => setActive(false)}>
            <img
               className="card-item__image"
               src={child.imgSrc}
               alt={child.word}
            />
            <div className="card-item__text">{child.translation}</div>
         </div>
      </div>
   );
};
export default ItemCategoryCards;
