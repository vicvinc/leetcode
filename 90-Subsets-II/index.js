/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => (a >= b ? 1 : -1));
  const ans = [];
  const map = {};
  const backtrace = (cur, idx) => {
    const cStr = cur.join("");
    if (!map[cStr]) {
      ans.push(cur);
      map[cStr] = 1;
    }
    for (let i = idx; i < nums.length; i++) {
      backtrace([...cur, nums[i]], i + 1);
    }
  };
  backtrace([], 0);
  return ans;
};

const t = [1, 2, 2];

console.log(subsetsWithDup(t));
