/**
 * @param {number} n
 * @return {string[][]}
 */

const isValideQueenSolve = board => {
  const bLen = board.length;
  for (let i = 0; i < bLen; i++) {
    for (let j = 0; j < bLen; j++) {
      if (board[i][j] === "Q" && !checkQueen(board, i, j)) {
        return false;
      }
    }
  }
  return true;
};

var solveNQueens = function(n) {
  const ans = [];

  const checkQueen = (board, i, j) => {
    // console.log("check board", board);
    const bLen = board.length;
    // check line 1: y = x + b => b = y - x
    // check line 2: y = -x + b => b = y + x
    const [b1, b2] = [j - i, j + i];
    for (let k = 0; k < bLen; k++) {
      const [m1, m2] = [k + b1, -k + b2];

      const rowValidate = k !== i && board[k][j] === "Q";
      const colValidate = k !== j && board[i][k] === "Q";
      const leftDiagonalValidate = m1 !== j && board[k][m1] === "Q";
      const rightDiagonalValidate = m2 !== j && board[k][m2] === "Q";

      // console.log("==> diagonal check pass");
      if (
        rowValidate ||
        colValidate ||
        leftDiagonalValidate ||
        rightDiagonalValidate
      )
        return false;
    }

    return true;
  };

  const sloveBoard = (board, row = 0) => {
    // console.log("next board ==> \n", row, "\n", board);
    const bLen = board.length;
    if (row === bLen) {
      ans.push(board.map(x => x.join("")));
      return true;
    }

    for (let j = 0; j < bLen; j++) {
      if (checkQueen(board, row, j)) {
        board[row][j] = "Q";
        sloveBoard(board, row + 1);
        board[row][j] = ".";
      }
    }

    return false;
  };

  const board = new Array(n).fill(0).map(x => new Array(n).fill("."));
  sloveBoard(board);
  return ans;
};

// console.log(solveNQueens(4));

const testBoard = [
  ["Q", ".", ".", "."],
  [".", "Q", ".", "."],
  [".", ".", ".", "Q"],
  [".", ".", "Q", "."]
];

// console.log(isValideQueenSolve(testBoard));
const solveNQueens2 = n => {
  const ans = [];
  const dfs = (stack, left, right) => {
    const row = stack.length;
    if (row === n) {
      ans.push(stack);
    }
    for (let i = 0; i < n; i++) {
      const [diff, sum] = [row - i, row + i];
      if (
        stack.indexOf(i) === -1 &&
        left.indexOf(diff) === -1 &&
        right.indexOf(sum) === -1
      ) {
        dfs([...stack, i], [...left, diff], [...right, sum]);
      }
    }
  };
  dfs([], [], []);
  return ans.reduce((acc, board) => {
    return [
      ...acc,
      board.map(c => ".".repeat(c) + "Q" + ".".repeat(n - c - 1))
    ];
  }, []);
};

console.log(solveNQueens(4));
