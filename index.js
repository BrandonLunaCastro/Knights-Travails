import knightMoves from "./modules/knightMoves.js";
const moves = knightMoves([0, 0], [3, 3]);
const route = moves.route;
if (route) {
  console.log(`You made it in ${moves.movements} moves!  Here's your path:`);
  for (const position of moves.route) {
    console.log(position);
  }
}
