/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  return rMatch(s, p, sLen - 1, pLen - 1);
};

const rMatch = function(s, p, i, j) {
  // console.log("s", s[i], "p", p[j], i, j);
  // pattern ends
  // string ends
  if (j === -1 && i === -1) {
    return true;
  }

  // pattern ends , string not ends
  if (j === -1 && i > -1) {
    return false;
  }

  if (p[j] === "*") {
    // * match 0 or as many as it can
    if (p[j - 1] === "*" || i <= -1) {
      return rMatch(s, p, i, j - 1);
    }
    return rMatch(s, p, i, j - 1) || rMatch(s, p, i - 1, j);
  }

  // ? match or character match
  if ((p[j] === "?" || p[j] === s[i]) && i > -1) {
    return rMatch(s, p, i - 1, j - 1);
  } else {
    return false;
  }
};

const s =
  "abaabaaaabbabbaaabaabababbaabaabbabaaaaabababbababaabbabaabbbbaabbbbbbbabaaabbaaaaabbaabbbaaaaabbbabb";
const p = "ab*aaba**abbaaaa**b*b****aa***a*b**ba*a**ba*baaa*b*ab*";

console.log(isMatch(s, p));
