/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(target, nums, start, end) {
  let [s, e] = [start, end];
  while (s <= e) {
    const mid = ~~((s + e) >> 1);
    if (nums[mid] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return s;
}

var searchInsert = function(nums, target) {
  return binarySearch(target, nums, 0, nums.length - 1);
};

const t = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

console.log(searchInsert(t, 0));
