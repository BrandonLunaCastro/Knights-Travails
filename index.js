const gameBoard = () => {
  const board = new Map();
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const box = `${row}-${col}`;
      const validMovements = [];
      board.set(box, validMovements);
    }
  }
  console.log(board);
};
console.log(gameBoard());
