const twoSum = require("../index");

test("[-1, -2, -3, -4, -5] -8 [2, 4]", () => {
  expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
});

test("[2, 7, -3, -4, -5] 9 [0, 1]", () => {
  expect(twoSum([2, 7, -3, -4, -5], 9)).toEqual([0, 1]);
});

test("[2, 7, -2, -4, -5] 0 [0, 2]", () => {
  expect(twoSum([2, 7, -2, -4, -5], 0)).toEqual([0, 2]);
});
