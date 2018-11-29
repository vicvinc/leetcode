/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const tail = x => x[x.length - 1];
  const str = s.split(" ");
  // console.log(str)
  while (tail(str) === "") str.pop();
  if (str.length === 0) return 0;
  return tail(str).length;
};
