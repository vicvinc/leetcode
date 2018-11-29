/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const fib = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i === 0) fib[i] = 1;
    else fib[i] = fib[i - 1] * i;
  }
  const nums = new Array(n).fill(1).map((_, i) => i + 1);
  // console.log(fib);
  // console.log(nums);
  let [tmp, tmpk, tmpn] = ["", k, n];
  while (nums.length > 0) {
    const next = Math.ceil(tmpk / fib[tmpn - 1]);
    const idx = Math.max(next - 1, 0);
    tmp += nums[idx];
    nums.splice(idx, 1);
    tmpk = fib[tmpn - 1] - (next * fib[tmpn - 1] - tmpk);
    tmpn--;
  }
  return tmp;
};

const t = [1, 2, 3];

console.log(getPermutation(5, 12));
