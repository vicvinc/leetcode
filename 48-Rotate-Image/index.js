/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const row = matrix.length - 1;
  const col = matrix[0].length - 1;
  const rotated = new Array(col + 1)
    .fill(0)
    .map(x => new Array(row + 1).fill(1));
  for (let i = 0; i <= col; i++) {
    for (let j = 0; j <= row; j++) {
      rotated[i][j] = matrix[col - j][i];
    }
  }
  return rotated;
  console.log(rotated);
};

const t = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotate(t));
