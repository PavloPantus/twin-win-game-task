import React, { useMemo, useState } from 'react';
import './GameMachine.scss';

const GameMachine = () => {
  const [translate, setTranslate] = useState(false);

  const [currentSlides, setCurrentSlides] = useState(
    (() => {
      const slides = [];

      for (let i = 1; i <= 13; i += 1) {
        let a = 1;

        while (a <= 13) {
          slides.push(`images/game-images/(${a}).jpg`);
          a += 1;
        }
      }

      return slides;
    })()
  );
  const slides = useMemo(
    () => {
      const slides = [];

      for (let i = 1; i <= 13; i += 1) {
        slides.push(`images/game-images/(${i}).jpg`);
      }

      return slides;
    }, []
  );

  return (
    <div className="game-machine">
      <div className="container">
        <div
          style={
            {
              transform: `translateY(${translate ? '0px' : ''})`,
              transition: `transform 8s cubic-bezier(0.11, 0.12, 0, 1)`,
            }
          }
          className="slot"
        >
          {currentSlides.map(path => <img src={path} alt="" />)}
        </div>
      </div>

      <button
        onClick={
          () => {
            setTranslate(!translate);
          }
        }
        className="play-button"
      >
        PLAY
      </button>
    </div>
  );
};

export default GameMachine;
