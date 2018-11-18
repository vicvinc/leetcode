/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const nLen = nums.length;
  // if (nLen === 0) return 1;

  for (let i = 0; i < nLen; i++) {
    let idx = nums[i];
    while (idx > 0 && idx <= nLen && idx !== nums[idx]) {
      let tmp = nums[idx];
      nums[idx] = idx;
      idx = tmp;
    }
  }
  for (let i = 0; i <= nLen; i++) {
    if (nums[i] !== i && i > 0) return i;
  }
  return nLen + 1;
};

const t = [3, 4, -1, 1];
const t1 = [7, 8, 9, 11, 12];
const t2 = [1, 2, 0];

console.log(firstMissingPositive(t));
console.log(firstMissingPositive(t1));
console.log(firstMissingPositive(t2));
console.log(firstMissingPositive([1]));
console.log(firstMissingPositive([1, 2]));
