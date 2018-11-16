const make2DArray = n => new Array(n).fill(0).map(x => new Array(n).fill(0));
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let bLen = board.length;

  let rows = make2DArray(bLen);
  let cols = make2DArray(bLen);
  let cell = make2DArray(bLen);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") continue;

      let n = board[i][j] - "0" - 1;
      let cidx = ~~(i / 3) * 3 + ~~(j / 3);
      if (rows[i][n] || cols[j][n] || cell[cidx][n]) return false;

      rows[i][n] = true;
      cols[j][n] = true;
      cell[cidx][n] = true;
    }
  }
  return true;
};

const t = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const res = isValidSudoku(t);

console.log(res);
