/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const nLen = nums.length;
  let [s, e] = [-1, -1];
  for (let i = 0; i < nLen; i++) {
    if (nums[i] < target) {
      continue;
    }
    if (nums[i] === target) {
      if (s === -1) s = i;
      e = i;
    }
    if (nums[i] > target) {
      break;
    }
  }
  return [s, e];
};

const t = [5, 7, 7, 8, 8, 10];
const t1 = [1];

console.log(searchRange(t, 8));
