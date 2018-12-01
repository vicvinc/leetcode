/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const fib = new Array(n).fill(0);
  fib[0] = 1;
  fib[1] = 2;
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n - 1];
};

console.log(climbStairs(45));
