/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const nLen = nums.length;
  let i = nLen - 1;
  for (let j = i; j >= 0 && i >= 0; ) {
    // console.log(j, nums[j], nums);
    if (nums[j] === 2) {
      nums.push(nums[j]);
      nums.splice(j, 1);
      j--;
    } else if (nums[j] === 0) {
      nums.unshift(nums[j]);
      nums.splice(j + 1, 1);
    } else {
      j--;
    }
    i--;
    // console.log(nums);
  }
};

const t = [2, 0, 2, 1, 1, 0, 1, 2, 1, 1, 2, 1, 0, 1, 2, 0, 1];

sortColors(t);
console.log(t);
