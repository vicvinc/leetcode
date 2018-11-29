/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const reg = /^[+-]?(\d+(\.\d+)?|(\.\d+)|(\d+\.))(e[+-]?\d+)?$/;
  return reg.test(s.trim());
};

const t = [
  "1",
  "1.1",
  "1.1e123",
  "+1",
  "-1",
  "+1.2",
  "-3.1415926e-9",
  "1 ",
  ".1",
  "1.",
  "1.e-4"
];

for (let x of t) {
  console.log(isNumber(x));
}
