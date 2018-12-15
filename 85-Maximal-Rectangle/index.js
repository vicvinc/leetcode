/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const col = matrix.length;
  if (!col) return 0;
  const row = matrix[0].length;
  if (!row) return 0;

  const heights = new Array(row).fill(0);
  const left = new Array(row).fill(0);
  const right = new Array(row).fill(row);

  let max = 0;

  for (let i = 0; i < col; i++) {
    let curLeft = 0;
    let curRight = row;
    for (let j = 0; j < row; j++) {
      // calculate heights
      if (matrix[i][j] === "1") {
        heights[j]++;
        left[j] = Math.max(left[j], curLeft);
      } else {
        heights[j] = 0;
        left[j] = 0;
        curLeft = j + 1;
      }
    }
    for (let j = row - 1; j >= 0; j--) {
      if (matrix[i][j] === "1") {
        right[j] = Math.min(right[j], curRight);
      } else {
        right[j] = row;
        curRight = j;
      }
    }
    // console.log(left, right, heights);
    for (let j = 0; j < row; j++) {
      max = Math.max(max, (right[j] - left[j]) * heights[j]);
    }
  }
  return max;
};

const t = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
];

const t1 = [["0", "1"]];

console.log(maximalRectangle(t1));
