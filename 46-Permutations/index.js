/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  let result = [];
  const f = (rest, m = []) => {
    let len = rest.length;
    if (len === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < len; i++) {
        const next = [...rest];
        const added = next[i];
        next.splice(i, 1);
        f(next, [...m, added]);
      }
    }
  };
  f(nums);
  return result;
};

console.log(permute([1, 2, 3]));
