/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let t = x < 0 ? -1 * x : x;

  t = String(t)
    .split("")
    .reverse()
    .join("");

  t = parseInt(t);

  return t > 2147483647 ? 0 : x < 0 ? -1 * t : t;
};

const t = 1534236469;

console.log(reverse(t));
