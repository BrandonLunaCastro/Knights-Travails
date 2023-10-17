const gameBoard = () => {
  const board = [];
  for (let w = 0; w < 8; w++) {
    for (let h = 0; h < 8; h++) {
      board.push([w][h]);
    }
  }
  console.log(board);
};
console.log(gameBoard());
