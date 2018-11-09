/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0;
  for (let i = 0, ii = nums.length; i < ii; i++) {
    if (nums[i] !== nums[j]) {
      // nums.splice(i, 1);
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0, jj = nums.length; j < jj; j++) {
    if (nums[j] !== nums[i]) {
      // nums.splice(i, 1);
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const t = [1, 1, 2];
console.log(removeDuplicates(t));
