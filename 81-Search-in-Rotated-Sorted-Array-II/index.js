/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const binarySearch = (nums, target) => {
  let [start, end] = [0, nums.length];
  while (start <= end) {
    const mid = ~~((start + end) >> 1);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

var search = function(nums, target) {
  const nLen = nums.length;
  let mid = -1;
  let [start, end] = [0, nLen - 1];
  if (nums[start] < nums[end]) {
    return binarySearch(nums, target);
  } else
    while (start <= end) {
      while (nums[start] === nums[start + 1]) start++;
      while (nums[end] === nums[end - 1]) end--;
      if (nums[start] > nums[start + 1]) {
        mid = start + 1;
        break;
      }
      if (nums[end] < nums[end - 1]) {
        mid = end;
        break;
      }
      start++;
      end--;
    }
  const left = nums.slice(0, mid);
  const right = nums.slice(mid, nLen);
  return binarySearch(left, target) || binarySearch(right, target);
};

const t = [2, 5, 6, 0, 0, 1, 2];

console.log(search(t, 3));
