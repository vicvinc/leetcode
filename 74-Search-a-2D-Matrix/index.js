/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const binarySearchLeftCloset = (nums, target) => {
  let [start, end] = [0, nums.length - 1];
  while (start <= end) {
    const mid = ~~((end + start) >> 1);
    if (target <= nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

const binarySearch = (nums, target) => {
  let [start, end] = [0, nums.length - 1];
  while (start <= end) {
    const mid = ~~((end + start) >> 1);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

const head = x => x[0];
const tail = x => x[x.length - 1];

var searchMatrix = function(matrix, target) {
  const col = matrix.length;
  if (col === 0) return false;

  const colHead = matrix.map(head);
  const findCol = binarySearch(colHead, target);
  if (findCol < 0) return false;
  const findRow = binarySearch(matrix[findCol], target);
  // console.log(findCol, findRow, matrix[findCol][findRow]);
  return matrix[findCol][findRow] === target;
};

const t = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];

console.log(searchMatrix([[1]], 0));
console.log(binarySearch([1], 0));
