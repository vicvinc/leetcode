/**
 * @param {string} digits
 * @return {string[]}
 */

const dStr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

var letterCombinations = function(digits) {
  if (!digits.length) {
    return [];
  }

  const ans = [];
  dfs("", 0, digits, ans);
  return ans;
};

const dfs = (word, i, digits, stack) => {
  if (i === digits.length) {
    stack.push(word);
    return;
  }
  const idx = Number(digits[i]);
  if (idx <= 1) {
    dfs(word, i + 1, digits, stack);
  } else {
    for (let k = 0, kk = dStr[idx].length; k < kk; k++) {
      dfs(word + dStr[idx][k], i + 1, digits, stack);
    }
  }
};

const t = "18192722017";

console.log(letterCombinations(t));
