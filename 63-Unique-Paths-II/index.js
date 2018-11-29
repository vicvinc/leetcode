/**
 * @param {number[][]} map
 * @return {number}
 */
var uniquePathsWithObstacles = function(map) {
  const col = map.length;
  const row = map[0].length;
  // map[m - 1][n - 1] = 1;
  const tmap = map.map(col => col.map(x => (x === 1 ? "#" : 0)));

  if (tmap[col - 1][row - 1] === "#") return 0;

  for (let i = col - 1; i >= 0; i--) {
    for (let j = row - 1; j >= 0; j--) {
      if (tmap[i][j] === "#") {
        tmap[i][j] = 0;
        continue;
      }
      if (i === col - 1 && j === row - 1) {
        tmap[i][j] = 1;
        continue;
      }
      if (j === row - 1) {
        tmap[i][j] = tmap[i + 1][j];
        continue;
      }
      if (i === col - 1) {
        tmap[i][j] = tmap[i][j + 1];
        continue;
      }
      tmap[i][j] = tmap[i + 1][j] + tmap[i][j + 1];
    }
  }
  return tmap[0][0];
};

const t = [[0, 0, 0, 0], [1, 0, 0, 1], [0, 0, 0, 0]];
const t1 = [[0, 1]];
console.log(uniquePathsWithObstacles(t));
