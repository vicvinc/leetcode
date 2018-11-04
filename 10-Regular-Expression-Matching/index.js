/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  return pMatch(s, p, sLen - 1, pLen - 1);
};

const pMatch = function(s, p, i, j) {
  // console.log("next", s.substring(0, i + 1), p.substring(0, j + 1));
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

  // * match
  // if (p[j] === "*") {
  //   // * matchs how many times can get to the right solution
  //   if (i > -1 && (p[j - 1] === s[i] || p[j - 1] === ".")) {
  //     return pMatch(s, p, i, j);
  //   } else {
  //     return pMatch(s, p, i, j - 2);
  //   }
  // }

  if (p[j] === "*") {
    if (i > -1 && (p[j - 1] === s[i] || p[j - 1] === ".")) {
      return pMatch(s, p, i, j - 2) || pMatch(s, p, i - 1, j);
    } else {
      return pMatch(s, p, i, j - 2);
    }
  }

  // . match or character match
  if ((p[j] === "." || p[j] === s[i]) && i > -1) {
    return pMatch(s, p, i - 1, j - 1);
  } else {
    return false;
  }
};

const s = "aasdfasdfasdfasdfas";

const p = "aasdf.*asdf.*asdf.*asdf.*s";

console.log.call(null, isMatch(s, p));
