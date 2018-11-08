/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  let ans = [];

  function dfs(pre, left, right, num) {
    if (left === num && right === num) {
      ans.push(pre);
      return;
    }

    if (left < num) {
      dfs(`${pre}(`, left + 1, right, num);
    }

    if (right < left) {
      dfs(`${pre})`, left, right + 1, num);
    }
  }
  dfs("", 0, 0, n);
  return ans;
};

generateParenthesis(3);
