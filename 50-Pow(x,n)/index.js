/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 0) return 0;

  if (n > 0) {
    return (n % 2 === 1 ? x : 1) * myPow(x * x, Math.floor(n / 2));
  } else {
    return myPow(1 / x, -n);
  }
};

console.log(myPow(0.00001, 2147483647));
