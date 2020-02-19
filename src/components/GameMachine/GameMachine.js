import React, { useMemo, useState, useEffect } from 'react';
import './GameMachine.scss';
import { GameSlot } from '../GameSlot';

export const GameMachine = () => {
  /* default array with pathes to images, it's items will be in slots */
  const currentSlides = useMemo(
    () => {
      const slides = [];

      for (let i = 1; i <= 13; i += 1) {
        slides.push({
          path: `images/game-images/(${i}).jpg`,
          key: i.toString() + Math.random() * Math.random(),
        });
      }

      for (let i = 0; i < 3; i += 1) {
        slides.push({
          path: slides[i].path, key: Math.random() * Math.random(),
        });
      }

      return slides;
    }, []
  );

  /* function gives new Array of slides that is randomly completed */

  const getNewOrderSlides = () => {
    const newSlides = [];
    let oldSlides = [...currentSlides.slice(0, 13)];

    for (let i = 0; i < 13; i += 1) {
      const selfRandom = (min, max) => (
        Math.floor(Math.random() * (max - min + 1)) + min
      );

      const randomIndex = oldSlides
        .indexOf(oldSlides[selfRandom(0, oldSlides.length - 1)]);

      newSlides.push(oldSlides[randomIndex]);

      oldSlides = oldSlides.filter(
        (elem, index) => index !== randomIndex
      );
    }

    for (let i = 0; i < 3; i += 1) {
      newSlides.push({
        path: newSlides[i].path,
        key: Math.random() * Math.random(),
      });
    }

    return newSlides;
  };

  /* here are states for 5 slots, includes
  *   where: slotItems - current items that will show in slot;
  *
  *   animationMoveSlot - boolean indicates on add class animation move or not
  *   to slot;
  *
  *   animationCount - count of first animation iterations,
  * (that one is infinite);
  *
  *   animationStopSlot - add second animation, animation-stop class, that
  *  is not infinite;
  *
  *  winLine top, bot, middle - add win lines classes (
  * if slot item has equal
  * neighborhoods)
  *
  *
  *
  *
  *   */

  const [slotItems1, setSlotItems1] = useState(getNewOrderSlides());
  const [animationMoveSlot1, setAnimationMoveSlot1] = useState(false);
  const [animationCount1, setAnimationCount1] = useState(0);
  const [animationStopSlot1, setAnimationStopSlot1] = useState(false);
  const [winLineTopSlot1, setWinLineTopSlot1] = useState(false);
  const [winLineMiddleSlot1, setwinLineMiddleSlot1] = useState(false);
  const [winLineBottomSlot1, setwinLineBottomSlot1] = useState(false);

  const [slotItems2, setSlotItems2] = useState(getNewOrderSlides());
  const [animationMoveSlot2, setAnimationMoveSlot2] = useState(false);
  const [animationCount2, setAnimationCount2] = useState(0);
  const [animationStopSlot2, setAnimationStopSlot2] = useState(false);
  const [winLineTopSlot2, setWinLineTopSlot2] = useState(false);
  const [winLineMiddleSlot2, setwinLineMiddleSlot2] = useState(false);
  const [winLineBottomSlot2, setwinLineBottomSlot2] = useState(false);

  const [slotItems3, setSlotItems3] = useState(getNewOrderSlides());
  const [animationMoveSlot3, setAnimationMoveSlot3] = useState(false);
  const [animationCount3, setAnimationCount3] = useState(0);
  const [animationStopSlot3, setAnimationStopSlot3] = useState(false);
  const [winLineTopSlot3, setWinLineTopSlot3] = useState(false);
  const [winLineMiddleSlot3, setwinLineMiddleSlot3] = useState(false);
  const [winLineBottomSlot3, setwinLineBottomSlot3] = useState(false);

  const [slotItems4, setSlotItems4] = useState(getNewOrderSlides());
  const [animationMoveSlot4, setAnimationMoveSlot4] = useState(false);
  const [animationCount4, setAnimationCount4] = useState(0);
  const [animationStopSlot4, setAnimationStopSlot4] = useState(false);
  const [winLineTopSlot4, setWinLineTopSlot4] = useState(false);
  const [winLineMiddleSlot4, setwinLineMiddleSlot4] = useState(false);
  const [winLineBottomSlot4, setwinLineBottomSlot4] = useState(false);

  const [slotItems5, setSlotItems5] = useState(getNewOrderSlides());
  const [animationMoveSlot5, setAnimationMoveSlot5] = useState(false);
  const [animationCount5, setAnimationCount5] = useState(0);
  const [animationStopSlot5, setAnimationStopSlot5] = useState(false);
  const [winLineTopSlot5, setWinLineTopSlot5] = useState(false);
  const [winLineMiddleSlot5, setwinLineMiddleSlot5] = useState(false);
  const [winLineBottomSlot5, setwinLineBottomSlot5] = useState(false);

  /* responsible for starting game process */
  const [startGame, setStartGame] = useState(false);

  /* show results */
  const [showResult, setShowResult] = useState(false);

  /* indicates how long to rotate slot */
  const defaultMaxAnimationCount = 2;

  /* indicates on gap betwean startin rotation of different slots */
  const timeGapBetweanSlots = 50;

  /* next 5 useEffects are handle adding stop animation
  class(second animation) */

  useEffect(() => {
    if (animationCount1 > defaultMaxAnimationCount) {
      setAnimationCount1(0);
      setAnimationMoveSlot1(false);
      setAnimationStopSlot1(true);
    }
  }, [animationCount1]);

  useEffect(() => {
    if (animationCount2 > defaultMaxAnimationCount) {
      setAnimationCount2(0);
      setAnimationMoveSlot2(false);
      setAnimationStopSlot2(true);
    }
  }, [animationCount2]);

  useEffect(() => {
    if (animationCount3 > defaultMaxAnimationCount) {
      setAnimationCount3(0);
      setAnimationMoveSlot3(false);
      setAnimationStopSlot3(true);
    }
  }, [animationCount3]);

  useEffect(() => {
    if (animationCount4 > defaultMaxAnimationCount) {
      setAnimationCount4(0);
      setAnimationMoveSlot4(false);
      setAnimationStopSlot4(true);
    }
  }, [animationCount4]);

  useEffect(() => {
    if (animationCount5 > defaultMaxAnimationCount) {
      setAnimationCount5(0);
      setAnimationMoveSlot5(false);
      setAnimationStopSlot5(true);
    }
  }, [animationCount5]);

  /* use efect to start game process */

  useEffect(() => {
    if (startGame) {
      /* hide previus win lines */

      setShowResult(false);
      setWinLineTopSlot1(false);
      setwinLineMiddleSlot1(false);
      setwinLineBottomSlot1(false);

      setWinLineTopSlot2(false);
      setwinLineMiddleSlot2(false);
      setwinLineBottomSlot2(false);

      setWinLineTopSlot3(false);
      setwinLineMiddleSlot3(false);
      setwinLineBottomSlot3(false);

      setWinLineTopSlot4(false);
      setwinLineMiddleSlot4(false);
      setwinLineBottomSlot4(false);

      setWinLineTopSlot5(false);
      setwinLineMiddleSlot5(false);
      setwinLineBottomSlot5(false);

      /* starting game process,
      adding class with infinite rotation to slots */

      setAnimationStopSlot1(false);
      setSlotItems1(getNewOrderSlides());
      setAnimationMoveSlot1(true);

      setTimeout(() => {
        setAnimationStopSlot2(false);
        setSlotItems2(getNewOrderSlides());
        setAnimationMoveSlot2(true);
      }, timeGapBetweanSlots);

      setTimeout(() => {
        setAnimationStopSlot3(false);
        setSlotItems3(getNewOrderSlides());
        setAnimationMoveSlot3(true);
      }, timeGapBetweanSlots * 2);

      setTimeout(() => {
        setAnimationStopSlot4(false);
        setSlotItems4(getNewOrderSlides());
        setAnimationMoveSlot4(true);
      }, timeGapBetweanSlots * 3);

      setTimeout(() => {
        setAnimationStopSlot5(false);
        setSlotItems5(getNewOrderSlides());
        setAnimationMoveSlot5(true);

        /* after 5 seconds(first animation duration + second, + all gaps
        between launches of each slot), show results of game
        )  */

        setTimeout(() => {
          setShowResult(true);
        }, defaultMaxAnimationCount * 1000 + 3000);

        setStartGame(false);
      }, timeGapBetweanSlots * 4);
    }
  }, [startGame]);

  useEffect(() => {
    if (showResult) {
      /* show win lines for each slot */
      /* first slot */

      if (slotItems1[0].path === slotItems2[0].path) {
        setWinLineTopSlot1(true);
      }

      if (slotItems1[1].path === slotItems2[1].path) {
        setwinLineMiddleSlot1(true);
      }

      if (slotItems1[2].path === slotItems2[2].path) {
        setwinLineBottomSlot1(true);
      }

      /* second slot */

      if (slotItems2[0].path === slotItems3[0].path
        || slotItems1[0].path === slotItems2[0].path) {
        setWinLineTopSlot2(true);
      }

      if (slotItems2[1].path === slotItems3[1].path
        || slotItems1[1].path === slotItems2[1].path) {
        setwinLineMiddleSlot2(true);
      }

      if (slotItems2[2].path === slotItems3[2].path
        || slotItems1[2].path === slotItems2[2].path) {
        setwinLineBottomSlot2(true);
      }

      /* 3 slot */

      if (slotItems2[0].path === slotItems3[0].path
        || slotItems3[0].path === slotItems4[0].path) {
        setWinLineTopSlot3(true);
      }

      if (slotItems2[1].path === slotItems3[1].path
        || slotItems3[1].path === slotItems4[1].path) {
        setwinLineMiddleSlot3(true);
      }

      if (slotItems2[2].path === slotItems3[2].path
        || slotItems3[2].path === slotItems4[2].path) {
        setwinLineBottomSlot3(true);
      }

      /* slot 4 */

      if (slotItems4[0].path === slotItems3[0].path
        || slotItems4[0].path === slotItems5[0].path) {
        setWinLineTopSlot4(true);
      }

      if (slotItems4[1].path === slotItems3[1].path
        || slotItems4[1].path === slotItems5[1].path) {
        setwinLineMiddleSlot4(true);
      }

      if (slotItems4[2].path === slotItems3[2].path
        || slotItems4[2].path === slotItems5[2].path) {
        setwinLineBottomSlot4(true);
      }

      /* slot 5 */

      if (slotItems5[0].path === slotItems4[0].path) {
        setWinLineTopSlot5(true);
      }

      if (slotItems5[1].path === slotItems4[1].path) {
        setwinLineMiddleSlot5(true);
      }

      if (slotItems5[2].path === slotItems4[2].path) {
        setwinLineBottomSlot5(true);
      }
    }
  }, [showResult]);

  return (
    <div className="game-machine">

      <GameSlot
        setAnimationCountHandler={() => {
          setAnimationCount1(animationCount1 + 1);
        }}
        animationMove={
          animationMoveSlot1
        }

        animationStopSlot={
          animationStopSlot1
        }

        slides={
          slotItems1
        }

        winLineTop={winLineTopSlot1}
        winLineMiddle={winLineMiddleSlot1}
        winLineBottom={winLineBottomSlot1}

      />

      <GameSlot
        setAnimationCountHandler={() => {
          setAnimationCount2(animationCount2 + 1);
        }}
        animationMove={
          animationMoveSlot2
        }

        animationStopSlot={
          animationStopSlot2
        }

        slides={
          slotItems2
        }

        winLineTop={winLineTopSlot2}
        winLineMiddle={winLineMiddleSlot2}
        winLineBottom={winLineBottomSlot2}
      />

      <GameSlot
        setAnimationCountHandler={() => {
          setAnimationCount3(animationCount3 + 1);
        }}
        animationMove={
          animationMoveSlot3
        }

        animationStopSlot={
          animationStopSlot3
        }

        slides={
          slotItems3
        }

        winLineTop={winLineTopSlot3}
        winLineMiddle={winLineMiddleSlot3}
        winLineBottom={winLineBottomSlot3}
      />

      <GameSlot
        setAnimationCountHandler={() => {
          setAnimationCount4(animationCount4 + 1);
        }}
        animationMove={
          animationMoveSlot4
        }

        animationStopSlot={
          animationStopSlot4
        }

        slides={
          slotItems4
        }

        winLineTop={winLineTopSlot4}
        winLineMiddle={winLineMiddleSlot4}
        winLineBottom={winLineBottomSlot4}

      />

      <GameSlot
        setAnimationCountHandler={() => {
          setAnimationCount5(animationCount5 + 1);
        }}
        animationMove={
          animationMoveSlot5
        }

        animationStopSlot={
          animationStopSlot5
        }

        slides={
          slotItems5
        }

        winLineTop={winLineTopSlot5}
        winLineMiddle={winLineMiddleSlot5}
        winLineBottom={winLineBottomSlot5}

      />

      <button
        type="button"
        onClick={
          () => {
            setStartGame(true);
          }}
        className="game-machine__play-button"
      >
        PLAY
      </button>
    </div>
  );
};
