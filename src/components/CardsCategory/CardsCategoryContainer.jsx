import React, { useState } from 'react';
import CardCategory from './CardCategory'
import correctMP3 from './../../assets/audio/correct.mp3'
import wrongMP3 from './../../assets/audio/wrong.mp3'
import failureMP3 from './../../assets/audio/failure.mp3'
import successMP3 from './../../assets/audio/success.mp3'
import successImg from './../../assets/img/success.jpg'
import failureImg from './../../assets/img/failure.jpg'
// import cn from 'classnames'


const CardsCategoryContainer = ({modeGame, nameCategory, children}) => {
	const [isStartGame, setIsStartGame] = useState(false);
	const [isResultGame, setIsResultGame] = useState(false);
	const [isNumberMistakes, setIsNumberMistakes] = useState(0);

	let numberMistakes = 0;

	const startGame = () => {
		setIsStartGame(true);
		
		const arraySounds = [];

		Object.values(children).map((child) => arraySounds.push(child.audioSrc));

		const newArraySounds = shuffleArraySounds(arraySounds);
		const arrayCards = document.querySelector('.cards');
		const wrapperStars = document.querySelector('.wrapper-stars');
		const btnRepeatSound = document.querySelector('.play__start');

		playBackSoundCard();

		function playBackSoundCard() {
			if (newArraySounds.length  !== 0) {
				setTimeout(() => new Audio(newArraySounds[newArraySounds.length -1]).play(), 1000);
			} else {
				setTimeout(() =>finishGame(), 2000)
			}
		}
		
		function deleteOneCardFromArray() {
			newArraySounds.pop();
		}
		
		btnRepeatSound.addEventListener('click', () => new Audio(newArraySounds[newArraySounds.length -1]).play());

		arrayCards.addEventListener('click', (e) => {
			if (e.target.classList.contains('card-item__image') && !e.target.parentNode.classList.contains('hide')) {
				if (`assets/audio/${e.target.getAttribute("data-word")}.mp3` === newArraySounds[newArraySounds.length -1]) {
					e.target.parentNode.classList.add('hide')
					wrapperStars.innerHTML += `<img src="assets/img/star-win.svg" alt="correct" />`;
					new Audio(correctMP3).play();
					deleteOneCardFromArray();
					playBackSoundCard();
				} else {
					numberMistakes++
					wrapperStars.innerHTML += `<img src="assets/img/star.svg" alt="wrong" />`;
					new Audio(wrongMP3).play();
				}
			}
		})
	}
	
	const finishGame = () => {
		if (numberMistakes === 0) {
			new Audio(successMP3).play();
		} else {
			new Audio(failureMP3).play();
		}
		setIsNumberMistakes(numberMistakes)
		setIsResultGame(true);

		setTimeout(() => {
			setIsResultGame(false);
			setIsStartGame(false);
		}, 4000)

	}

	const shuffleArraySounds = (array) => {
		for (let i = array.length - 1; i > 0; i -= 1) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	
	if (isResultGame) {
		return <main className="page _result">
						<div className="result">
							<img src={isNumberMistakes ? failureImg : successImg} alt={isNumberMistakes ? failureImg : successImg} />
							<div className="result__text">
								{isNumberMistakes ? <span>{isNumberMistakes} mistake{isNumberMistakes > 1 ? 's' : ''}.</span> : 'Congratulations!'}
							</div>
						</div>
					</main>
	}
   return (
		<main className="page">
			<div className="category-title">
				<h1 className="category-title__text">{nameCategory}</h1>
			</div>
			{modeGame &&
				<div className="wrapper-stars"></div>
			}
			<div className="cards">
				{Object.values(children).map((child) => {
					if (modeGame) return (
						<div key={child.word} className={'card-item ' + (isStartGame ? '' : '_game')}>
							<div className="card-item__front">
								<img className="card-item__image" src={child.imgSrc} data-word={child.word} alt={child.word}/>
							</div>
						</div>
					)
					return (
						<CardCategory key={child.word} child={child} />
					)
				}
				)}
			</div>
			{modeGame &&
				<div className="play">
					{isStartGame ?
						<button className="play__repeat">Repeat</button> :
						<button className="play__start" onClick={startGame}>Start</button>
					}
				</div>
			}
		</main>
   );
};

export default CardsCategoryContainer;