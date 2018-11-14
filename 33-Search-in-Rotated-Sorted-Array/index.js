/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(target, nums, start, end) {
  if (nums[start] > target || nums[end] < target) return -1;

  let [s, e] = [start, end];

  while (s < e) {
    const mid = ~~((s + e) >> 1);
    if (nums[mid] < target) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return nums[s] === target ? s : -1;
}

var search = function(nums, target) {
  let max = 0;
  let nLen = nums.length;
  for (let i = 0; i < nLen - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      max = i;
      break;
    }
  }

  let s1 = binarySearch(target, nums, 0, max);
  let s2 = binarySearch(target, nums, max + 1, nLen - 1);

  return Math.max(s1, s2);
};

const t = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
const t1 = [4, 5, 6, 7, 0, 1, 2];

const t2 = [3, 5, 1];

const res = search(t2, 1);

console.log(res);
