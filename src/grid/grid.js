export const buildGrid = (height, width, makeRandom = false) => {
  let grid = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      let value;
      if (makeRandom) {
        value = Math.random() > 0.79;
      }
      row.push({status: value, newBorn: value});
    }
    grid.push(row);
  }
  return grid;
};

export const getGridState = (grid = []) => {
  let gridHeight = grid.length,
    gridWidth = grid[0].length;

  let computeNeighbors = function(x, y) {
    let topRow = (x - 1 < 0) ? (gridHeight - 1) : (x - 1),
      leftCol = (y - 1 < 0) ? (gridWidth - 1) : (y - 1),
      bottomRow = (x + 1 === gridHeight) ? 0 : (x + 1),
      rightCol = (y + 1 === gridWidth) ? 0 : (y + 1);

    let total = 0;
    total += grid[topRow][leftCol].status;
    total += grid[topRow][y].status;
    total += grid[topRow][rightCol].status;
    total += grid[x][rightCol].status;
    total += grid[bottomRow][rightCol].status;
    total += grid[bottomRow][y].status;
    total += grid[bottomRow][leftCol].status;
    total += grid[x][leftCol].status;

    return total;
  };

  let gameState = [];
  for (let i = 0; i < gridHeight; i++) {
    let row = [];
    for (let j = 0; j < gridWidth; j++) {
      let cellIsAlive = grid[i][j].status,
        neighbors = computeNeighbors(i, j);
      if (cellIsAlive) {
          if (neighbors < 2 || neighbors > 3)  {//cell dies
            row.push({status: 0});
          } else {//cell stays alive
            row.push({status: 1});
          }
      }
      if (!cellIsAlive) {
        if (neighbors === 3)  {//cell becomes newBorn
          row.push({status: 1, newBorn: true});
        } else {//cell stays dead
          row.push({status: 0});
        }
      }
    }
    gameState.push(row);
  }
  return gameState;
}
