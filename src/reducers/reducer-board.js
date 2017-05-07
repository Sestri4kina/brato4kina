import * as grid from '../grid/grid';

const GRID_HEIGHT = 200,
  GRID_WIDTH = 200,
  initialGrid = grid.buildGrid(GRID_HEIGHT, GRID_WIDTH);

export default (state = initialGrid, action) => {
  switch (action.type) {
    case 'TOGGLE_ALIVE':
      let board  = state.slice(0),
        cell = board[action.x][action.y];
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
      return board;
    case 'MAKE_RANDOM':
      return grid.buildGrid(GRID_HEIGHT, GRID_WIDTH, true);
    case 'CLEAR':
      return grid.buildGrid(GRID_HEIGHT, GRID_WIDTH);
    case 'SPEED_CONTROL':
      return grid.getGridState(state.slice(0));
    default:
      return state;
  }
};
