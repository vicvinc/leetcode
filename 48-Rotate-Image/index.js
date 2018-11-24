/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const mLen = matrix.length;
  const isOdd = mLen % 2;
  const len = mLen - 1;

  for (let i = 0; i < len / 2 || (isOdd && i === len / 2); i++) {
    for (let j = 0; j < len / 2; j++) {
      rotateCircle(matrix, i, j);
    }
  }

  function rotateCircle(matrix, i, j) {
    const first = matrix[i][j];
    const second = matrix[j][len - i];
    const third = matrix[len - i][len - j];
    const forth = matrix[len - j][i];
    // console.log("1,2,3,4 =>", first, second, third, forth);
    matrix[i][j] = forth;
    matrix[j][len - i] = first;
    matrix[len - i][len - j] = second;
    matrix[len - j][i] = third;
  }
};

const t1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const t2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
const t3 = [
  [5, 1, 9, 11, 17],
  [2, 4, 8, 10, 18],
  [13, 3, 6, 7, 19],
  [15, 14, 12, 16, 20],
  [21, 22, 23, 24, 25]
];

rotate(t2);

console.log(t2);
