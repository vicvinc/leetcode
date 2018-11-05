/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const cur = strs[i];
    while (prefix) {
      const curPre = cur.substring(0, prefix.length);
      // console.log(curPre, prefix);
      if (curPre === prefix) {
        break;
      } else {
        prefix = prefix.slice(0, -1);
      }
    }
  }
  return prefix;
};

const t1 = ["flower", "flow", "flight"];
const t2 = ["doga", "dracecar", "docar"];
const t3 = ["c", "acc", "ccc"];

console.log(longestCommonPrefix(t1));
console.log(longestCommonPrefix(t2));
console.log(longestCommonPrefix(t3));
