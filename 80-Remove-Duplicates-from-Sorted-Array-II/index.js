/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const nLen = nums.length;
  if (nLen < 3) return nLen;
  let p = 0;
  for (let i = 0; i < nLen; i++) {
    if (p < 2 || nums[i] > nums[p - 2]) {
      nums[p] = nums[i];
      p++;
    }
  }
  return p;
};

var removeDuplicates1 = function(nums) {
  const nLen = nums.length;
  let p = -1;
  let last = nums[0];
  let count = 1;

  for (let i = 1; i < nLen; i++) {
    if (nums[i] === last) {
      count++;
    } else {
      count = 1;
      last = nums[i];
    }

    if (count === 3 && p === -1) {
      p = i;
      continue;
    }

    if (count < 3 && p > 0) {
      nums[p] = nums[i];
      last = nums[i];
      p++;
    }
  }

  return p === -1 ? nLen : p;
};

const nums = [1, 1, 2];

const p = removeDuplicates(nums);
console.log(nums.slice(0, p));
