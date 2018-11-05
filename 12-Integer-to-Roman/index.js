/**
 * @param {number} num
 * @return {string}
 */
// const map = {
//   1: "I",
//   5: "V",
//   10: "X",
//   50: "L",
//   100: "C",
//   500: "D",
//   1000: "M"
// };
var intToRoman = function(num) {
  let romanNum = "";
  const str = String(num);
  const sLen = str.length;
  for (let i = 0; i < sLen; i++) {
    let nn = parseInt(str[i]);
    switch (sLen - i) {
      case 4:
        romanNum += romanTen(nn, "M", "W", "Y");
        break;
      case 3:
        romanNum += romanTen(nn, "C", "D", "M");
        break;
      case 2:
        romanNum += romanTen(nn, "X", "L", "C");
        break;
      case 1:
        romanNum += romanTen(nn, "I", "V", "X");
        break;
      default:
        break;
    }
  }
  return romanNum;
};

function romanTen(nn, unit, fiveUnit, tenUnit) {
  if (nn < 4) {
    return new Array(nn).fill(unit).join("");
  }
  if (nn === 4) {
    return `${unit}${fiveUnit}`;
  }
  if (nn >= 5 && nn < 9) {
    return `${fiveUnit}${new Array(nn - 5).fill(unit).join("")}`;
  }
  if (nn === 9) {
    return `${unit}${tenUnit}`;
  }
}

// for (let i = 1; i <= 9; i++) {
//   // 1-9
//   console.log(romanTen(i, "I", "V", "X"));
//   // 10-90
//   console.log(romanTen(i, "X", "L", "C"));
//   // 100-900
//   console.log(romanTen(i, "C", "D", "M"));
//   // 1000-9000
//   console.log(romanTen(i, "M", "W", "Y"));
// }

// console.log(intToRoman(1));
// console.log(intToRoman(4));
// console.log(intToRoman(5));
// console.log(intToRoman(9));
// console.log(intToRoman(58));
// console.log(intToRoman(1994) === "MCMXCIV");
