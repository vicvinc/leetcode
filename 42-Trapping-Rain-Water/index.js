/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const hLen = height.length;
  if (hLen === 0) return 0;

  const leftMax = new Array(hLen);
  leftMax[0] = height[0];
  for (let i = 1; i < hLen; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  const rightMax = new Array(hLen);
  rightMax[hLen - 1] = height[hLen - 1];
  for (let i = hLen - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  let ans = 0;
  for (let i = 0; i < hLen; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

const t = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const res = trap(t);

console.log(res);
