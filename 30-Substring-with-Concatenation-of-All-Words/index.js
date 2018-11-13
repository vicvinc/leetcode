/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const sLen = s.length;
  const wsLen = words.length;
  if (sLen === 0 || wsLen === 0) return [];

  const wLen = words[0].length;
  if (wLen === 0) return [];

  const subLen = wLen * wsLen;

  const dict = {};
  for (word of words) {
    dict[word] = ~~dict[word] + 1;
  }

  const ans = [];

  for (let i = 0; i < sLen - subLen + 1; i++) {
    let tmp = Object.assign({}, dict);
    for (let j = i; j < i + subLen; j += wLen) {
      let subStr = s.substr(j, wLen);
      // matchs from start, and matches word has not been visited
      if (!(subStr in tmp)) break;

      if (--tmp[subStr] === 0) delete tmp[subStr];
    }
    if (Object.keys(tmp).length === 0) ans.push(i);
  }
  return ans;
};

const t1 = {
  s: "wordgoodgoodgoodbestword",
  w: ["word", "good", "best", "word"]
};

const t2 = {
  s: "barfoothefoobarman",
  w: ["foo", "bar"]
};

const t3 = {
  s: "a",
  w: []
};

const { s, w } = require("./test-case");

const res = findSubstring(s, w);

console.log(res);
