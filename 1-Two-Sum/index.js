function twoSum(s, target) {
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    const idx = dp.indexOf(s[i]);
    if (idx > -1) {
      return [idx, i];
    } else {
      dp.push(target - s[i]);
    }
  }
  console.log(dp);
  return [];
}

const nums = [-1, -2, -3, -4, -5];
const target = -8;

console.log(twoSum(nums, target));
