const gameBoard = () => {
  const board = [];
  for (let w = 0; w < 8; w++) {
    const fila = [];
    for (let h = 0; h < 8; h++) {
      fila.push(h);
    }
    board.push(fila);
  }
  board[3][3] = "knight";
  console.log(board);
};
console.log(gameBoard());
