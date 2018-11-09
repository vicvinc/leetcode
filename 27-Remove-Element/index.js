/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0, jj = nums.length; j < jj; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

const t = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(t, 2));
console.log(t);
