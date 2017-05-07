import React from 'react';
import Board from '../containers/board.js';
import ControlButtons from '../containers/control-buttons.js';
import GenerationsCounter from '../containers/generations-counter.js';


export default () => (
  <div>
    <h1>Game of life</h1>
    <Board />
    <ControlButtons />
    <GenerationsCounter />
  </div>
)
