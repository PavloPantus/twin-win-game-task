import React from 'react';
import './GameSlot.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const GameSlot = (
  {
    setAnimationCountHandler,
    animationMove,
    animationStopSlot,
    slides,
    winLineTop,
    winLineMiddle,
    winLineBottom,
  }
) => (
  <div className="container">
    {
      winLineTop
        && <div className="winLineTop" />
    }

    {
      winLineMiddle
        && <div className="winLineMiddle" />
    }

    {
      winLineBottom
        && <div className="winLineBottom" />
    }
    <div
      onAnimationIteration={() => {
        setAnimationCountHandler();
      }}
      className={
        classNames(
          [
            'slot',
            {
              'animation-move': animationMove,
              'animation-stop': animationStopSlot,
            },
          ]
        )
      }

    >
      {slides.map(img => (
        <img
          key={img.key}
          src={img.path}
          alt=""
        />
      ))}
    </div>
  </div>

);

GameSlot.propTypes = {
  setAnimationCountHandler: PropTypes.func.isRequired,
  animationMove: PropTypes.bool.isRequired,
  animationStopSlot: PropTypes.bool.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    key: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number,
    ]).isRequired,
  })).isRequired,
  winLineTop: PropTypes.bool.isRequired,
  winLineMiddle: PropTypes.bool.isRequired,
  winLineBottom: PropTypes.bool.isRequired,
};
