/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let ans = 0;
  const dfs = (stack, left, right) => {
    const row = stack.length;
    if (row === n) {
      ans++;
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
  return ans;
};

console.log(totalNQueens(4));
