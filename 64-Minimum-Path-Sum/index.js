/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const col = grid.length;
  const row = grid[0].length;
  const map = new Array(col).fill(0).map(x => new Array(row).fill(0));
  for (let i = col - 1; i >= 0; i--) {
    for (let j = row - 1; j >= 0; j--) {
      if (i === col - 1 && j === row - 1) {
        map[i][j] = grid[i][j];
        continue;
      }
      if (i === col - 1) {
        map[i][j] = map[i][j + 1] + grid[i][j];
        continue;
      }
      if (j === row - 1) {
        map[i][j] = map[i + 1][j] + grid[i][j];
        continue;
      }
      map[i][j] = Math.min(
        map[i][j + 1] + grid[i][j],
        map[i + 1][j] + grid[i][j]
      );
    }
  }
  return map[0][0];
};

const t = [[1, 3, 1], [2, 5, 1], [4, 2, 2]];

console.log(minPathSum(t));
