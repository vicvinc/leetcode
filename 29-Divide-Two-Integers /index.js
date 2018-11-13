/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {
  if (dividend === 0 || divisor === 0) return 0;

  const MAX = Math.pow(2, 31);

  const MAX_INT = MAX - 1;
  const MIN_INT = -MAX;

  if (dividend === MIN_INT && divisor === -1) return MAX_INT;

  let q = 0;
  let pos = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);
  let count = 1;

  let sub = dvs;
  while (dvd >= dvs) {
    // console.log("dvd, dvs, q", dvd, sub, q, count);
    if (dvd >> 1 >= sub) {
      sub <<= 1;
      count <<= 1;
      dvd -= sub;
      q += count;
    } else {
      sub >> dvs;
      count >>= 1;
    }
    // console.log("dvd, dvs, q", dvd, sub, q, count);
  }

  if (q > MAX_INT) return MAX_INT;
  if (q < MIN_INT) return MIN_INT;
  return pos ? q : -q;
};

// console.log(divide(-2147483648, -1));
// console.log(divide(-2147483648, 1));
// console.log(divide(2147483647, -1));
// console.log(divide(2147483647, 1));
console.log(divide(-10, -3));
console.log(divide(10, 3));
console.log(divide(7, 3));
console.log(divide(-29, 4));

// console.log(divide(1, 1));

// console.log(divide(1, 10));

for (let i = 0; i < 100; i += 10) {
  for (let j = 0; j < 10; j++) {
    console.log(i, j, divide(i, j));
  }
}
