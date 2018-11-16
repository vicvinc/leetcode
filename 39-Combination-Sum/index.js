var combinationSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const stack = [];
  dfs(0, target);
  return ans;

  function dfs(i, t) {
    if (t === 0) {
      ans.push(stack.slice());
      return;
    }

    if (t < 0 || i >= nums.length) return;

    stack.push(nums[i]);
    dfs(i, t - nums[i]);
    stack.pop();

    dfs(i + 1, t);
  }
};

const t = [1, 2, 3, 5, 8];

console.log(combinationSum(t, 3));
