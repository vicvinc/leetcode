/**
 * @param {string} s
 * @return {number}
 */
// stack  version
var longestValidParentheses = function(s) {
  const stack = [-1];
  const sLen = s.length;

  let max = 0;
  for (let i = 0; i < sLen; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
};

// dynamic programing version
var dpLongestValidParentheses = function(s) {
  const sLen = s.length;
  const dp = [0];
  let max = 0;
  let i = 1;
  while (i < sLen) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        dp[i] = dp[Math.max(i - 2, 0)] + 2;
      } else if (i - dp[i - 1] > 1 && s[i - dp[i - 1] - 1] === "(") {
        dp[i] = dp[i - 1] + dp[Math.max(i - dp[i - 1], 2) - 2] + 2;
      } else {
        dp[i] = 0;
      }
    } else {
      dp[i] = 0;
    }
    max = Math.max(max, dp[i]);
    i++;
    // console.log(dp);
  }
  return max;
};

const t = "()(()";

console.log(dpLongestValidParentheses(t));
