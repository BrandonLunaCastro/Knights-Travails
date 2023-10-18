import gameBoard from "./board.js";
const knightMoves = (start, end) => {
  const rows = 8;
  const cols = 8;
  const board = gameBoard(rows, cols);
  board[start] = 0;
  const boxVisited = [];
  const queue = [];
  const movements = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2]
  ];
  queue.push(start);
  while (queue.length !== 0) {
    const coordinate = queue.shift();
    if (coordinate[0] === end[0] && coordinate[1] === end[1]) {
      break;
    }
    for (const [X, Y] of movements) {
      console.log(X, Y);
      const newX = coordinate[0] + X;
      const newY = coordinate[1] + Y;

      if(newY >= 0 && newX >= 0 && newY < cols && newX < rows){
        
      }
    }
  }
};

export default knightMoves;
