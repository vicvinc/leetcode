/**
 * @param {string} s
 * @return {number}
 */

const baseFun = val => {
  if (!val || val[0] === "0") return 0;
  if (val.length === 0) return 1;
  var n = parseInt(val);

  if (n <= 26) {
    return 1;
  }

  return 0;
};

var numDecodings = function(s) {
  if (!s || s[0] === "0" || s.indexOf("00") > -1) return 0;

  var len = s.length;

  if (len === 1) {
    return 1;
  }

  var dp = new Array(len + 1);

  (dp[0] = 0), (dp[1] = 1);
  for (var i = 2; i < dp.length; i++) {
    if (s[i - 1] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i - 1];
    }

    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6"))
      dp[i] += dp[i - 2];
  }

  return dp[dp.length - 1] === undefined ? 0 : dp[dp.length - 1];
};

var s = "10";

console.log(numDecodings(s));
