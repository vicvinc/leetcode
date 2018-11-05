/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  // return rMatch(s, p, sLen - 1, pLen - 1);
  return dMatch(s, p);
};

const rMatch = function(s, p, i, j) {
  // pattern ends
  // string ends
  if (j === -1 && i === -1) {
    return true;
  }

  // string ends pattern not ends
  // goes on

  // pattern ends , string not ends
  if (j === -1 && i > -1) {
    return false;
  }

  if (p[j] === "*") {
    // * match 0 or as many as it can
    if (i > -1 && (p[j - 1] === s[i] || p[j - 1] === ".")) {
      return rMatch(s, p, i, j - 2) || rMatch(s, p, i - 1, j);
    } else {
      return rMatch(s, p, i, j - 2);
    }
  }

  // . match or character match
  if ((p[j] === "." || p[j] === s[i]) && i > -1) {
    return rMatch(s, p, i - 1, j - 1);
  } else {
    return false;
  }
};

const dMatch = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;

  const dp = new Array(sLen + 1).fill(0).map(x => new Array(pLen + 1).fill(0));

  dp[sLen][pLen] = 1;

  for (let i = sLen; i >= 0; i--) {
    for (let j = pLen - 1; j >= 0; j--) {
      console.log(s.substring(0, i), p.substring(0, j));
      const curMath = i < sLen - 1 && (p[j] === s[i] || p[j] === ".");
      if (j + 1 < pLen && p[j + 1] === "*") {
        dp[i][j] = dp[i][j + 2] || (curMath && dp[i + 1][j]);
      } else {
        dp[i][j] = curMath && dp[i + 1][j + 1];
      }
    }
  }
  const result = dp.map(x => x.map(y => (y ? 1 : 0)));
  console.log(result);
  return !!dp[0][0];
};

const s = "aa";

const p = "aa";

console.log.call(null, isMatch(s, p));
