/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const cLen = matrix.length;
  const rLen = matrix[0].length;

  const col = new Array(cLen).fill(1);
  const row = new Array(rLen).fill(1);
  for (let i = 0; i < cLen; i++) {
    matrix[i].map((x, idx) => {
      if (x == 0) {
        col[i] = 0;
        row[idx] = 0;
      }
    });
  }
  for (let i = 0; i < cLen; i++) {
    for (let j = 0; j < rLen; j++) {
      if (col[i] === 0 || row[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
};

const t = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(t);
console.log(t);
