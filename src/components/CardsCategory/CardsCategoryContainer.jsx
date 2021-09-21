import React, { useState } from 'react';
import CardCategory from './CardCategory'


const CardsCategoryContainer = ({modePlay, nameCategory, children}) => {
	const [isStartPlay, setIsStartPlay] = useState(false);

	const startPlay = () => {
		setIsStartPlay(true);

		const arraySounds = [];

		Object.values(children).map((child) => arraySounds.push(child.audioSrc));
	
		const newArraySounds = shuffleArraySounds(arraySounds);

		newArraySounds.forEach((item) => {
			const el = new Audio(item);
			el.play()
		})
	}

	const shuffleArraySounds = (array) => {
		for (let i = array.length - 1; i > 0; i -= 1) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	 }

   return (
		<main className="page">
			<div className="category-title">
				<h1 className="category-title__text">{nameCategory}</h1>
				{modePlay &&
					<div className="wrapper-stars">
						{/* <img src="assets/img/star.svg" alt="" />
						<img src="assets/img/star-win.svg" alt="" /> */}
					</div>
				}
			</div>
			<div className="cards">
				{Object.values(children).map((child) => {
					if (modePlay) return (
						<div key={child.word} className="card-item">
							<div className="card-item__front">
								<img className="card-item__image" src={child.imgSrc} alt={child.word} />
							</div>
						</div>
					)
					return (
						<CardCategory modePlay={modePlay} key={child.word} child={child} />
					)
				}
				)}
			</div>
			{modePlay &&
				<div className="play">
					{isStartPlay ?
						<button className="play__repeat">Repeat</button> :
						<button className="play__start" onClick={startPlay}>Start</button>
					}
				</div>
			}
		</main>
   );
};

export default CardsCategoryContainer;