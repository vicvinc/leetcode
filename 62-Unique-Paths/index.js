/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const map = new Array(m).fill(1).map(x => new Array(n));
  map[m - 1][n - 1] = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (j === n - 1 || i === m - 1) {
        map[i][j] = 1;
      } else {
        map[i][j] = map[i + 1][j] + map[i][j + 1];
      }
    }
  }
  return map[0][0];
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(14, 12));
