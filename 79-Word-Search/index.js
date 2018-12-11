/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const head = x => x[0];
const tail = x => x[x.length - 1];

var exist = function(board, word) {
  const col = board.length;
  const row = board[0].length;

  const dfs = (board, word, i, j, idx) => {
    if (i < 0 || j < 0 || i >= col || j >= row) return false;
    if (board[i][j] !== word[idx]) return false;
    if (idx === word.length - 1) return true;

    // console.log(i, j, idx);
    const tmp = board[i][j];
    board[i][j] = "visited";
    const ans =
      dfs(board, word, i - 1, j, idx + 1) ||
      dfs(board, word, i + 1, j, idx + 1) ||
      dfs(board, word, i, j - 1, idx + 1) ||
      dfs(board, word, i, j + 1, idx + 1);
    board[i][j] = tmp;
    return ans;
  };

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === head(word)) {
        if (dfs(board, word, i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
};

const map = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

const w = "ABFDEE";

console.log(exist([["a"]], "ab"));
