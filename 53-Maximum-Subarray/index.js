/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const nLen = nums.length;
  let max = nums[0];
  let lastMax = 0;

  for (let i = 0; i < nLen; i++) {
    lastMax += nums[i];
    if (lastMax > max) {
      max = lastMax;
    }
    if (lastMax < 0) {
      lastMax = 0;
    }
  }
  return max;
};

const t = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(t));
