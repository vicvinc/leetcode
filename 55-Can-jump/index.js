/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const nLen = nums.length;
  let [idx, curStep, nextStep] = [0, 0, 0];
  while (curStep - idx + 1 > 0) {
    while (idx <= curStep && idx < nLen) {
      nextStep = Math.max(nextStep, nums[idx] + idx);
      if (idx >= nLen - 1) return true;
      idx++;
    }
    curStep = nextStep;
  }
  return false;
};

const t = [3, 2, 1, 0, 4, 5, 6, 7, 8, 9];
const t1 = [2, 3, 1, 1, 4];
console.log(canJump(t1));
