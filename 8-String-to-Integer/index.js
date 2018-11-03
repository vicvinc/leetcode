/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  const tStr = str.trimLeft();

  const invalidStart = !/[\-\+0-9]/.test(tStr[0]);

  if (invalidStart) return 0;

  const reg = /[\+\-]*.\d*(\.\d+)?/;
  const match = tStr.match(reg);

  if (!match) return 0;

  let num = parseInt(match[0]);

  if (isNaN(num)) return 0;

  if (num > MAX_INT) return MAX_INT;
  if (num < MIN_INT) return MIN_INT;

  return num;
};

const t = "+-42";

console.log(myAtoi(t));
