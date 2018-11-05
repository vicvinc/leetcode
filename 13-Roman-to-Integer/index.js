function romanToInt(s) {
  const rMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let result = rMap[s[0]];

  for (let i = 1; i < s.length; i++) {
    let cur = rMap[s[i]];
    let pre = rMap[s[i - 1]];
    if (cur <= pre) {
      result += cur;
    } else {
      result = cur - pre + result - pre;
    }
  }
  return result;
}

console.log(romanToInt("LVIII"));
