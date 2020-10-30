function validSolution(board){
  let row = [];
  let column1 = [];
  let column2 = [];
  for (let i = 0; i < board.length; i++) {
    row.push(board[i].reduce((a,b)=>a+b))
    column1 = [];
    for (let j = 0; j < board.length; j++) {
    column1[j] = board[j][i]
  }
    column2[i] = column1.reduce((a,b)=>a+b)
  }
  // if (board[7][7] === board[8][6]) {
  //   return false;
  // }
  return row.every(is45) && column2.every(is45);
}
function is45(n) {
  return n === 45;
}
