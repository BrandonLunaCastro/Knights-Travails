const gameBoard = (row, col) => {
  const board = new Array(row);
  board.fill([]).map((el, i) => i < col ? el.push(null) : false);
  return board;
};
console.log(gameBoard(8, 8));
export default gameBoard;
