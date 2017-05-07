import { combineReducers } from 'redux';
import boardReducer from './reducer-board';
import gameStateReducer from './reducer-game-state';
import generationsCounterReducer from './reducer-generations-counter';

const mainReducer = combineReducers({
  board: boardReducer,
  gameState: gameStateReducer,
  generationsCounter: generationsCounterReducer
});

export default mainReducer;
