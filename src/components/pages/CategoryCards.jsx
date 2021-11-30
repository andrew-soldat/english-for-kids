import React, { useState, useMemo } from 'react';
import ItemCategoryCards from '../ItemCategoryCards';
import { useMode } from '../../PlayModeContext';
import correctMP3 from './../../assets/audio/correct.mp3';
import wrongMP3 from './../../assets/audio/wrong.mp3';
import failureMP3 from './../../assets/audio/failure.mp3';
import successMP3 from './../../assets/audio/success.mp3';
import successImg from './../../assets/img/success.jpg';
import failureImg from './../../assets/img/failure.jpg';
import shuffleArray from '../../utils/shuffleArray';
import playAudio from '../../utils/playAudio';

const CategoryCards = ({ nameCategory, children }) => {
   const playMode = useMode();
   const [isStartGame, setIsStartGame] = useState(false);
   const [isResultGame, setIsResultGame] = useState(false);
   const [numberMistakes, setNumberMistakes] = useState(0);
   const [arrayStars, setArrayStars] = useState([]);

   const newArraySounds = useMemo(() => {
      const arraySounds = [];
      Object.values(children).map((child) => arraySounds.push(child.audioSrc));
      return shuffleArray(arraySounds);
   }, [children, isResultGame, playMode.isPlayMode]);

   const startGame = () => {
      setIsStartGame(true);
      playBackSoundCard();
   };

   function playBackSoundCard() {
      newArraySounds.length
         ? setTimeout(
              () => playAudio(newArraySounds[newArraySounds.length - 1]),
              1000
           )
         : setTimeout(() => finishGame(), 2000);
   }

   function deleteOneCardFromArray() {
      newArraySounds.pop();
   }

   function getSelectCard(e) {
      if (
         `assets/audio/${e.target.getAttribute('data-word')}.mp3` ===
         newArraySounds[newArraySounds.length - 1]
      ) {
         e.target.parentNode.classList.add('hide');
         setArrayStars([...arrayStars, 'star-win']);
         playAudio(correctMP3);
         deleteOneCardFromArray();
         playBackSoundCard();
      } else {
         setNumberMistakes(numberMistakes + 1);
         setArrayStars([...arrayStars, 'star']);
         playAudio(wrongMP3);
      }
   }

   const finishGame = () => {
      playAudio(numberMistakes ? failureMP3 : successMP3);
      setIsResultGame(true);
      setTimeout(() => {
         setIsResultGame(false);
         setIsStartGame(false);
         setNumberMistakes(0);
         setArrayStars([]);
      }, 4000);
   };

   if (isResultGame) {
      return (
         <div className="result">
            <img
               src={numberMistakes ? failureImg : successImg}
               alt={numberMistakes ? failureImg : successImg}
            />
            <div className="result__text">
               {numberMistakes ? (
                  <span>
                     {numberMistakes}{' '}
                     {numberMistakes > 1 ? 'mistakes' : 'mistake'}.
                  </span>
               ) : (
                  'Congratulations!'
               )}
            </div>
         </div>
      );
   }
   return (
      <>
         <div className="category-title">
            <h1 className="category-title__text">{nameCategory}</h1>
         </div>
         <div className="wrapper-stars">
            {arrayStars.length !== 0 &&
               arrayStars.map((item, index) => (
                  <img key={index} src={`assets/img/${item}.svg`} alt="wrong" />
               ))}
         </div>
         <div className="cards">
            {Object.values(children).map((child) => {
               if (playMode.isPlayMode)
                  return (
                     <div
                        key={child.word}
                        className={
                           isStartGame ? 'card-item' : 'card-item _game'
                        }
                     >
                        <div
                           className={
                              isStartGame
                                 ? 'card-item__front'
                                 : 'card-item__front active'
                           }
                        >
                           <img
                              onClick={getSelectCard}
                              className="card-item__image"
                              src={child.imgSrc}
                              data-word={child.word}
                              alt={child.word}
                           />
                        </div>
                     </div>
                  );
               return <ItemCategoryCards key={child.word} child={child} />;
            })}
         </div>
         {playMode.isPlayMode && (
            <div className="play">
               {isStartGame ? (
                  <button
                     className="play__repeat"
                     onClick={() =>
                        playAudio(newArraySounds[newArraySounds.length - 1])
                     }
                  >
                     Repeat
                  </button>
               ) : (
                  <button className="play__start" onClick={startGame}>
                     Start
                  </button>
               )}
            </div>
         )}
      </>
   );
};

export default CategoryCards;
