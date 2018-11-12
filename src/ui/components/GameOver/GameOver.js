import React from 'react';
import './GameOver.scss';

const GameOver = (props) => (
  <div className="game-over">
    Game Over

    <hr/>

    <span className="btn btn-outline-primary" onClick={() => props.click()}>Restart game</span>
  </div>
);

export default GameOver;
