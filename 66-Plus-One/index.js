/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1 || carry) {
      const sum = digits[i] + 1;
      if (sum >= 10) {
        digits[i] = sum % 10;
        carry = 1;
      } else {
        digits[i] = sum;
        return digits;
      }
    }
  }
  if (carry) {
    digits.unshift(1);
  }
  return digits;
};

const t = [0, 4, 4];

console.log(plusOne(t));
