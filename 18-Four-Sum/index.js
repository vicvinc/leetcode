/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let nLen = nums.length;
  const ans = [];
  const hashSet = {};
  for (let i = 0; i < nLen; i++) {
    for (let j = i + 1; j < nLen; j++) {
      const sum1 = nums[i] + nums[j];
      let start = j + 1;
      let end = nLen - 1;

      while (start < end) {
        const sum2 = nums[start] + nums[end];
        if (sum2 < target - sum1) {
          start++;
        } else if (sum2 > target - sum1) {
          end--;
        } else {
          const temp = [nums[i], nums[j], nums[start], nums[end]];
          const tempStr = temp.sort((a, b) => a - b).join("");
          if (!hashSet[tempStr]) {
            hashSet[tempStr] = temp;
            ans.push(temp);
          }

          while (nums[start] === nums[start + 1]) start++;
          while (nums[end] === nums[end - 1]) end--;

          start++;
          end--;
        }
      }
    }
  }
  return ans;
};

const t = [1, 0, -1, 0, -2, 2];
const t1 = [-3, -2, -1, 0, 0, 1, 2, 3];
const t2 = [0, 0, 0, 0];

const target = 0;

const ans = [
  [-3, -2, 2, 3],
  [-3, -1, 1, 3],
  [-3, 0, 0, 3],
  [-3, 0, 1, 2],
  [-2, -1, 0, 3],
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1]
];

console.log(fourSum(t1, target));
