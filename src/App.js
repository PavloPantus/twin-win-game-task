import React, { useState } from 'react';
import './App.scss';
import { GameMachine } from './components/GameMachine/GameMachine';

function App() {
  const [gameResults, setGameResults] = useState('');

  return (
    <div className="app">
      <h1
        className="app__heading"
      >
        Play and find your luck!
      </h1>

      {
        gameResults
      && (
        <p className="app__game-results">
          {gameResults}
        </p>
      )
      }

      <GameMachine

        setResults={setGameResults}
      />
    </div>
  );
}

export default App;
