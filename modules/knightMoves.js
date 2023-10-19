import gameBoard from "./board.js";
function validate (col, row, length, board) {
  return (col >= 0) && (row >= 0) && (col < length) && (row < length) && (board[row][col] !== true);
}

const knightMoves = (start, end) => {
  const rows = 8;
  const cols = 8;
  const board = gameBoard(rows, cols);
  const init = start[0];
  const final = start[1];
  board[init][final] = true;
  const queue = [];
  const movements = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]];
  queue.push({ position: start, route: [start] });

  while (queue.length > 0) {
    const { position, route } = queue.shift();
    if (position[0] === end[0] && position[1] === end[1]) {
      return { movements: route.length - 1, route };
    };
    for (const [X, Y] of movements) {
      const newX = position[0] + X;
      const newY = position[1] + Y;
      if (validate(newX, newY, rows, board)) {
        const newPosition = [newX, newY];
        const newRoute = [...route, newPosition];
        board[newX][newY] = true;
        queue.push({ position: newPosition, route: newRoute });
      };
    }
  }
  return null;
}
;

export default knightMoves;
