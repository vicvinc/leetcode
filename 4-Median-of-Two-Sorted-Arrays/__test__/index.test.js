const { mergeSortedArray, findMedianSortedArrays } = require("../index");

test("[1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]", () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(mergeSortedArray(a, b)).toEqual([
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10
  ]);
});

test("[1...22], [0, 6]", () => {
  const a = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22
  ];

  const b = [0, 6];
  expect(findMedianSortedArrays(a, b)).toEqual(10.5);
});
