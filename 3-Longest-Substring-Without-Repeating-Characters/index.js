/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let dp = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let idx = dp.indexOf(s[i]);
    if (idx > -1) {
      const popStr = dp.slice(0, idx + 1);
      dp = dp.slice(idx + 1, dp.length);
    }
    dp.push(s[i]);
    max = Math.max(dp.length, max);
  }
  return max;
};

const t = "abcabcbb";
console.log(lengthOfLongestSubstring(t));
