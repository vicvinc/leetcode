/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const brackets = ["(", ")", "[", "]", "{", "}"];
  let i = 0;
  while (s[i]) {
    const idx = brackets.indexOf(s[i]);
    if (idx > -1) {
      if (idx % 2 === 1) {
        const top = stack[stack.length - 1];
        const topIdx = brackets.indexOf(top);
        if (idx - topIdx === 1) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(s[i]);
      }
    }
    i++;
  }
  return stack.length === 0;
};

const t = "([)]";

console.log(isValid(t));
