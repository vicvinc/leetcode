/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindromic = function(x) {
  const str = String(x);
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
};

const t = "-12321";
console.log(isPalindromic(t));
