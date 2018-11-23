/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  console.log("result", nums);

  let result = [];
  const f = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = [...arr];
        curr.splice(i, 1);
        f(curr, [...m, curr[i]]);
      }
    }
  };
  f(nums);
  return result;
};

console.log(permute([1, 2, 3]));
