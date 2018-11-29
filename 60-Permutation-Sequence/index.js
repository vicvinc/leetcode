/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let ans = "";
  const f = (arr, m = "") => {
    if (arr.length === 0) {
      ans += m;
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = [...arr];
        curr.splice(i, 1);
        f(curr, [...m, curr[i]]);
      }
    }
  };
};
