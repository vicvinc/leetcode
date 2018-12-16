/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1 === s2) return true;
  const sLen1 = s1.length;
  const sLen2 = s2.length;
  if (sLen1 !== sLen2) return false;
  const sFun = (a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;
  };
  const t1 = s1
    .slice()
    .split("")
    .sort(sFun)
    .join("");
  const t2 = s2
    .slice()
    .split("")
    .sort(sFun)
    .join("");
  if (t1 !== t2) return false;

  for (let i = 1; i < sLen1; i++) {
    const s11 = s1.substring(0, i);
    const s12 = s1.substring(i, sLen1);
    const s21 = s2.substring(0, i);
    const s22 = s2.substring(i, sLen1);
    const s23 = s2.substring(0, sLen1 - i);
    const s24 = s2.substring(sLen1 - i, sLen1);
    if (
      (isScramble(s11, s21) && isScramble(s12, s22)) ||
      (isScramble(s11, s24) && isScramble(s12, s23))
    )
      return true;
  }
  return false;
};

console.log(isScramble("vfldiodffghyq", "vdgyhfqfdliof"));
