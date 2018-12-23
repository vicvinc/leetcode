/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const ans = [0]; // start from 0
  for (let i = 1; i <= n; i++) {
    const m = Math.pow(2, i - 1);
    for (let j = ans.length - 1; j >= 0; j--) {
      ans.push(m + ans[j]);
    }
  }
  return ans;
};

const n = 4;

console.log(grayCode(n));
