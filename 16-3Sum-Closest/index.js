const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = ~~((end + start) >> 1);
    if (target <= nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const nLen = nums.length;
  const sNums = nums.sort((a, b) => a - b);
  let ans = Infinity;
  for (let i = 0; i < nLen; i++) {
    for (let j = i + 1; j < nLen; j++) {
      let a = target - sNums[i] - sNums[j];
      let pos = binarySearch(sNums, a);
      for (let k = Math.max(pos - 1, 0); k < Math.min(pos, nLen - 1); k++) {
        if (k === i || k === j) continue;
        const sum = sNums[i] + sNums[j] + sNums[k];
        if (Math.abs(target - sum) < Math.abs(target - ans)) ans = sum;
      }
    }
  }
  return ans;
};

const t = [0, 2, 1, -3];

const ta = 1;

console.log(threeSumClosest(t, ta));
