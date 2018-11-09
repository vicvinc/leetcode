/**
 * @param {string} s
 * @param {string} p
 * @return {number}
 */
var strStr = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if (s === "" && pLen > 0) return -1;
  if (p === "" || s === p) return 0;
  let i = 0;
  while (s[i]) {
    if (s[i] === p[0] && i + pLen < sLen && s.slice(i, i + pLen) === p) {
      return i;
    }
    i++;
  }
  return -1;
};

const s = "efadqsazzdasews";
const p = "zz";

console.log(strStr(s, p));
