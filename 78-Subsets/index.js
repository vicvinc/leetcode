/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // nums.sort((a, b) => a > b);
  const nLen = nums.length;
  const ans = [];
  const backtrace = (cur, idx) => {
    ans.push(cur);
    for (let i = idx; i < nLen; i++) {
      backtrace([...cur, nums[i]], i + 1);
    }
  };
  backtrace([], 0);
  return ans;
};

console.log(subsets([1, 2, 3, 4, 5]));
