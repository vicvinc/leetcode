/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  const f = (rest, m = []) => {
    const len = rest.length;
    const dumplicated = [];
    if (len === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < len; i++) {
        const next = [...rest];
        const added = next[i];
        if (dumplicated.indexOf(added) === -1) {
          next.splice(i, 1);
          f(next, [...m, added]);
          dumplicated.push(added);
        }
      }
    }
  };
  f(nums);
  return result;
};

console.log(permuteUnique([1, 1, 2]));
