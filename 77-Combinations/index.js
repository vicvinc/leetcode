/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// C(n,k) = C(n-1, k-1) + C(n-1, k)
var combine = function(n, k) {
  // console.log(n, k);
  if (n === k || k === 0) {
    return [new Array(k).fill(1).map((x, i) => i + 1)];
  }
  return [...combine(n - 1, k), ...combine(n - 1, k - 1).map(x => [...x, n])];
};

console.log(combine(5, 2));
