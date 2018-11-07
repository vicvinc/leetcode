function twoSum(s, target) {
  // s.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    const idx = s.indexOf(target - s[i]);
    if (idx > -1 && idx !== i) {
      // ans.push([i, idx]);
      return [i, idx];
    }
  }
  return ans;
}

const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = ~~((start + end) >> 1);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return nums[start] === target ? start : -1;
};

console.log(twoSum([2, 7, -3, -4, -5], 9));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
module.exports = twoSum;
