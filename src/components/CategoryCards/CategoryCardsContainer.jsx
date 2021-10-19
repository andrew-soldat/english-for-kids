import React, { useState } from 'react';
import CategoryCards from './CategoryCards'
import { useMode } from '../../PlayModeContext'
import correctMP3 from './../../assets/audio/correct.mp3'
import wrongMP3 from './../../assets/audio/wrong.mp3'
import failureMP3 from './../../assets/audio/failure.mp3'
import successMP3 from './../../assets/audio/success.mp3'
import successImg from './../../assets/img/success.jpg'
import failureImg from './../../assets/img/failure.jpg'

const CategoryCardsContainer = ({ nameCategory, children}) => {
	const playMode = useMode();
	const [isStartGame, setIsStartGame] = useState(false);
	const [isResultGame, setIsResultGame] = useState(false);
	const [numberMistakes, setNumberMistakes] = useState(0);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i -= 1) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const playAudio = (sound) => {
		new Audio(sound).play();
	}

	let countMistakes = 0;
	
	// console.log(newArraySounds[newArraySounds.length - 1])
	const arraySounds = [];
	
	const startGame = () => {
		Object.values(children).map((child) => arraySounds.push(child.audioSrc));
		let newArraySounds = shuffleArray(arraySounds);
		const wrapperStars = document.querySelector('.wrapper-stars');
		const wrapperCards = document.querySelector('.cards');
		
		setIsStartGame(true);
		playBackSoundCard();
		
		function playBackSoundCard() {
			newArraySounds.length  !== 0 ? setTimeout(() => playAudio(newArraySounds[newArraySounds.length - 1]), 1000) : setTimeout(() => finishGame(), 2000)
		}

		function deleteOneCardFromArray() {
			console.log(newArraySounds);
			newArraySounds.pop();
		}

		wrapperCards.addEventListener('click', (e) => {
			if (`assets/audio/${e.target.getAttribute("data-word")}.mp3` === newArraySounds[newArraySounds.length - 1]) {
				e.target.parentNode.classList.add('hide')
				wrapperStars.innerHTML += `<img src="assets/img/star-win.svg" alt="correct" />`;
				playAudio(correctMP3);
				deleteOneCardFromArray();
				playBackSoundCard();
			} else {
				countMistakes++
				wrapperStars.innerHTML += `<img src="assets/img/star.svg" alt="wrong" />`;
				playAudio(wrongMP3);
			}
		})
	}

	const finishGame = () => {
		if (countMistakes === 0) {
			playAudio(successMP3);
		} else {
			playAudio(failureMP3);
		}
		setNumberMistakes(countMistakes)
		setIsResultGame(true);

		setTimeout(() => {
			setIsResultGame(false);
			setIsStartGame(false);
		}, 4000)
	}
	
	if (isResultGame) {
		return <main className="page _result">
						<div className="result">
							<img src={numberMistakes ? failureImg : successImg} alt={numberMistakes ? failureImg : successImg} />
							<div className="result__text">
								{numberMistakes ? <span>{numberMistakes} mistake{numberMistakes > 1 ? 's' : ''}.</span> : 'Congratulations!'}
							</div>
						</div>
					</main>
	}
   return (
		<main className="page">
			<div className="category-title">
				<h1 className="category-title__text">{nameCategory}</h1>
			</div>
			{playMode.isPlayMode &&
				<div className="wrapper-stars"></div>
			}
			<div className="cards">
				{Object.values(children).map((child) => {
					if (playMode.isPlayMode) return (
						<div key={child.word} className={'card-item ' + (isStartGame ? '' : '_game')}>
							<div className="card-item__front">
								<img className="card-item__image" src={child.imgSrc} data-word={child.word} alt={child.word}/>
							</div>
						</div>
					)
					return (
						<CategoryCards key={child.word} child={child} />
					)
				}
				)}
			</div>
			{playMode.isPlayMode &&
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

export default CategoryCardsContainer;