/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
  const ans = [];
  const stack = [];
  const map = {};
  nums.sort((a, b) => a - b);
  const search = (i, t) => {
    if (t === 0) {
      let key = stack.join("");
      if (!map[key]) {
        ans.push(stack.slice());
        map[key] = 1;
      }
      return;
    }
    if (t < 0 || i >= nums.length) return;

    stack.push(nums[i]);
    search(i + 1, t - nums[i]);
    stack.pop();

    search(i + 1, t);
  };
  search(0, target);
  return ans;
};

const t = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

console.log(combinationSum2(t, target));
