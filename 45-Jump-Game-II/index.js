/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const nLen = nums.length;
  if (nLen < 2) return 0;
  let [idx, nextStep, curStep, level] = [0, 0, 0, 0];
  while (curStep - idx + 1 > 0) {
    level++;
    for (; idx <= curStep && idx < nLen; idx++) {
      nextStep = Math.max(nums[idx] + idx, nextStep);
      if (nextStep >= nLen - 1) {
        return level;
      }
    }
    curStep = nextStep;
  }
  return 0;
};
const t0 = [1];
const t = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const t1 = [2, 3, 1, 1, 4];
const t2 = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const t3 = [
  3,
  4,
  1,
  2,
  13,
  4,
  1,
  3,
  12,
  31,
  2,
  31,
  23,
  12,
  31,
  23,
  12,
  312,
  31,
  23,
  1,
  2,
  3,
  12,
  3,
  1,
  23,
  1,
  2,
  3,
  1,
  2,
  ,
  31,
  2,
  31,
  2,
  3,
  1,
  23,
  1,
  2,
  3,
  1,
  23,
  1,
  2,
  3,
  1,
  23,
  1,
  2,
  3,
  1,
  4,
  35,
  3,
  45,
  3,
  4,
  5,
  34,
  5,
  3,
  4,
  3,
  45,
  3,
  4,
  53,
  45,
  3,
  4,
  5,
  34,
  5,
  34,
  5,
  34,
  5
];
console.log(jump(t3));
