/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
  if (!s || s[0] === "0" || s.indexOf("00") > -1) return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[1] === "0" ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    const first = s.substring(i - 1, i);
    const second = s.substring(i - 2, i);
    if (first >= 1 && first <= 9) dp[i] += dp[i - 1];
    if (second >= 10 && second <= 26) dp[i] += dp[i - 2];
  }
  return dp[dp.length - 1];
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

const t = [
  "",
  "8976543747384757",
  "12",
  "226",
  "10",
  "101010",
  "26",
  "121028763512451635128372",
  "12102124112"
]; // test

const r = [0, 1, 2, 3, 1, 1, 2, 24, 30]; // expect

// for (let i = 0; i < t.length; i++) {
//   const ans = numDecodings(t[i]);
//   console.log(ans === r[i]);
// }

console.log(numDecodings("121021"));
