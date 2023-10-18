const gameBoard = (row, col) => {
  const board = new Array(row);
  for (let i = 0; i < row; i++) {
    board[i] = new Array(col).fill(null);
  }
  return board;
};

export default gameBoard;
