/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 找出一个字典序的下一个排列，如果是最后一个，返回第一个字典序排列
const swap = (nums, i, j) => {
  let a = nums[i];
  let b = nums[j];
  a = a ^ b;
  b = b ^ a;
  a = a ^ b;
  [nums[i], nums[j]] = [a, b];
};

const reverse = (nums, start, end) => {
  while (start < end) {
    swap(nums, start++, end--);
  }
};

var nextPermutation = function(nums) {
  const nLen = nums.length;

  let i = nLen - 2;
  while (i > -1 && nums[i] >= nums[i + 1]) i--;

  if (i === -1) {
    reverse(nums, 0, nLen - 1);
    return;
  }

  let j = nLen - 1;
  while (nums[j] <= nums[i] && j > i) j--;

  swap(nums, i, j);

  reverse(nums, i + 1, nLen - 1);
};

const t = [5, 4, 3, 2, 1];

nextPermutation(t);
// reverse(t, 0, 4);

console.log(t);
