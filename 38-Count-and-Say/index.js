/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";
  let ans = "1";
  for (let j = 1; j < n; j++) {
    const sLen = ans.length;
    let tmp = "";
    for (let i = 0; i < sLen; i++) {
      let count = 1;
      while (ans[i] === ans[i + 1]) {
        count++;
        i++;
      }
      tmp = `${tmp}${count}${ans[i]}`;
    }
    ans = tmp;
  }
  return ans;
};

console.log(countAndSay(4));
