/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX_INT = 2147483647;
  let t = x < 0 ? -1 * x : x;

  t = String(t)
    .split("")
    .reverse()
    .join("");

  t = parseInt(t);

  return t > MAX_INT ? 0 : x < 0 ? -1 * t : t;
};

const t = 1534236469;

console.log(reverse(t));
