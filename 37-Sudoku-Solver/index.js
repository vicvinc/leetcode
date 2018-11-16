const make2DArray = n => new Array(n).fill(0).map(x => new Array(n).fill(0));
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var checkSudoku = (board, i, j, nums) => {
  let bLen = board.length;

  for (let k = 0; k < bLen; k++) {
    if (board[i][k] === String(nums)) return false;
    if (board[k][j] === String(nums)) return false;
  }

  let ci = ~~(i / 3) * 3;
  let cj = ~~(j / 3) * 3;
  for (let m = ci; m < ci + 3; m++) {
    for (let n = cj; n < cj + 3; n++) {
      if (board[m][n] === String(nums)) return false;
    }
  }

  // console.log("checks i, j, num", i, j, nums, true);
  return true;
};

var isValidSudoku = function(board, allowEmpty = true) {
  let bLen = board.length;

  let rows = make2DArray(bLen);
  let cols = make2DArray(bLen);
  let cell = make2DArray(bLen);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") {
        if (allowEmpty) continue;
        else return false;
      }

      let n = board[i][j] - "0" - 1;
      let c = ~~(i / 3) * 3 + ~~(j / 3);
      if (rows[i][n] || cols[j][n] || cell[c][n]) return false;

      rows[i][n] = true;
      cols[j][n] = true;
      cell[c][n] = true;
    }
  }
  return true;
};

// backtrace
const solveSudoku = board => {
  // console.log("board => \n", board);
  const bLen = board.length;
  for (let i = 0; i < bLen; i++) {
    for (let j = 0; j < bLen; j++) {
      if (board[i][j] === ".") {
        for (let n = 1; n <= 9; n++) {
          if (checkSudoku(board, i, j, n)) {
            // if (isValidSudoku(board)) {
            board[i][j] = String(n);
            if (solveSudoku(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return isValidSudoku(board, false);
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

solveSudoku(t);

const res = checkSudoku(t, 0, 2, 1);
console.log(res);
console.log(t);
