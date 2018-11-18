/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const add = (a, b) => {
  const aLen = a.length;
  const bLen = b.length;

  if (aLen === 0 || bLen === 0) return 0;

  let ans = "";
  let carry = 0;
  let [i, j] = [aLen - 1, bLen - 1];
  for (; i >= 0 && j >= 0; i--, j--) {
    const sum = Number(a[i]) + Number(b[j]) + carry;
    carry = ~~(sum / 10);
    ans = `${sum % 10}${ans}`;
  }

  while (i >= 0) {
    const sum = Number(a[i]) + carry;
    carry = ~~(sum / 10);
    ans = `${sum % 10}${ans}`;
    i--;
  }

  while (j >= 0) {
    const sum = Number(b[j]) + carry;
    carry = ~~(sum / 10);
    ans = `${sum % 10}${ans}`;
    j--;
  }

  ans = `${carry > 0 ? carry : ""}${ans}`;

  return ans;
};

var multiply = function(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const ans = new Array(aLen + bLen).fill(0);
  for (let i = aLen - 1; i >= 0; i--) {
    for (let j = bLen - 1; j >= 0; j--) {
      const product = Number(a[i]) * Number(b[j]) + ans[i + j + 1];
      // const carry = ~~(product / 10);
      // const cur = product % 10;
      ans[i + j + 1] = product % 10;
      ans[i + j] = ~~(product / 10) + ans[i + j];
      // console.log(ans);
    }
  }
  while (ans[0] === 0 && ans.length > 1) {
    ans.shift();
  }
  return ans.join("");
};

module.exports = multiply;

const test = () => {
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      if (`${i * j}` !== multiply(String(i), String(j))) {
        console.log("i, j", i, j, i * j, multiply(String(i), String(j)));
        return;
      }
    }
  }
};

const a = "0";
const b = "100";

// console.log(multiply(a, b));
// console.log(add("990", "12"));
// test();
