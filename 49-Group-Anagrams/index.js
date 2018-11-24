/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  const sLen = strs.length;
  const dist = {};

  for (let i = 0; i < sLen; i++) {
    const v = strs[i].split("").sort((a, b) => a > b);
    if (dist[v]) {
      dist[v].push(strs[i]);
    } else {
      dist[v] = [strs[i]];
    }
  }
  const ans = [];
  for (let x in dist) {
    ans.push(dist[x]);
  }
  return ans;
};

const t = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(t));
