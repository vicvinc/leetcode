/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let [i, j, carry, ans] = [a.length - 1, b.length - 1, 0, ""];
  while (i >= 0 || j >= 0 || carry) {
    let sum = 0;
    if (i >= 0) sum += a[i] - "0";
    if (j >= 0) sum += b[j] - "0";
    sum += carry;
    carry = ~~(sum / 2);
    sum = sum % 2;
    ans = sum + ans;
    i--;
    j--;
  }
  return ans;
};

const [a, b] = ["10011", "110111"];

console.log(addBinary(a, b));
