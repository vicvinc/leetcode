/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let [start, end] = [1, x];
  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (x / mid === mid) {
      return mid;
    } else if (x / mid > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

// for (let x = 0; x < 20; x++) {
//   console.log(mySqrt(x));
// }

console.log(mySqrt(15));
