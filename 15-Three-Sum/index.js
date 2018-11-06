/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const nLen = nums.length;

  const sNums = nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nLen; i++) {
    if (i && sNums[i - 1] === sNums[i]) continue;

    let target = -sNums[i];
    let [start, end] = [i + 1, nLen - 1];
    while (start < end) {
      const sum = sNums[start] + sNums[end];
      if (sum !== target) {
        sum > target ? end-- : start++;
      } else {
        ans.push([sNums[i], sNums[start], sNums[end]]);
        while (sNums[start] === sNums[start + 1]) {
          start++;
        }
        while (sNums[end] === sNums[end - 1]) {
          end--;
        }
        start++;
        end--;
      }
    }
  }
  return ans;
};

// const t = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
const t = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
// const t = require("./test-case");

console.log(threeSum(t));

// twoSum([0, 1, 3], 1);
