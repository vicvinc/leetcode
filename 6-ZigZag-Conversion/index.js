/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const sLen = s.length;
  const chunk = Math.floor(sLen / numRows);
  const chunkCharNums = 2 * (numRows - 1);
  let converted = "";

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c <= chunk; c++) {
      const base = c * chunkCharNums;
      const first = r;
      const second = 2 * numRows - 2 - r;

      if (base + first < sLen) {
        converted += s[base + first];
      }

      if (second < chunkCharNums && base + second < sLen && first !== second) {
        converted += s[base + second];
      }
    }
  }
  return converted;
};

const t = "abcdefgh";
const r = "PAHNAPLSIIGYIR";
const t2 = "a";

console.log(convert(t, 2));
