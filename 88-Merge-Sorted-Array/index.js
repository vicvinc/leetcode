/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let [i, j] = [0, 0];
  if (n === 0) return;

  for (; i < m + j; i++) {
    if (nums1[i] >= nums2[j]) {
      nums1.splice(i, -1, nums2[j]);
      nums1.pop();
      j++;
    }
  }

  for (; j < n; j++) {
    nums1[i] = nums2[j];
    i++;
  }
};

const n1 = [1, 2, 3, 0, 0, 0];
const m = 0;
const n2 = [2, 5, 6];
const n = 3;

merge(n1, m, n2, n);
console.log(n1);
