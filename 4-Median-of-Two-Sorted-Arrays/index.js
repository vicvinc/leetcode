/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const merged = mergeSortedArray(nums1, nums2);
  const mergedLen = merged.length;
  if (mergedLen % 2 === 0) {
    const middle = mergedLen / 2;
    return (merged[middle] + merged[middle - 1]) / 2;
  } else {
    return merged[Math.floor(mergedLen / 2)];
  }
};

const mergeSortedArray = (nums1, nums2) => {
  const merged = [];
  const len1 = nums1.length;
  const len2 = nums2.length;
  let l1 = 0;
  let l2 = 0;
  while (l1 < len1 || l2 < len2) {
    const pushL1 =
      (l1 < len1 && nums1[l1] <= nums2[l2]) || (l1 < len1 && l2 === len2);
    const pushL2 =
      (l2 < len2 && nums2[l2] <= nums1[l1]) || (l2 < len2 && l1 === len1);
    if (pushL1) {
      merged.push(nums1[l1]);
      l1++;
    }
    if (pushL2) {
      merged.push(nums2[l2]);
      l2++;
    }
  }
  return merged;
};

module.exports = { mergeSortedArray, findMedianSortedArrays };
