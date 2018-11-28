/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

const head = x => x[0];
const tail = x => x[x.length - 1];

var merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  const iLen = intervals.length;
  const ans = [];
  for (let i = 0; i < iLen; i++) {
    const nums = intervals[i];
    const last = tail(ans);
    if (last && last.end >= nums.start) {
      const start = Math.min(last.start, nums.start);
      const end = Math.max(last.end, nums.end);
      ans.pop();
      ans.push({ start, end });
    } else {
      ans.push(nums);
    }
  }

  return ans;
};

const t = [[1, 3], [2, 6], [8, 10], [15, 18]];
const t1 = [[1, 4], [4, 5]];
const t2 = [[1, 3], [2, 6], [8, 10], [15, 18]];
const t3 = [[1, 4], [0, 2], [3, 5]];
const t4 = [[1, 4], [0, 4]];
const t5 = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];
const t6 = [
  [2, 3],
  [0, 1],
  [1, 2],
  [3, 4],
  [4, 5],
  [1, 1],
  [0, 1],
  [4, 6],
  [5, 7],
  [1, 1],
  [3, 5]
];

const convertArraytoIntervals = a =>
  a.map(x => ({ start: head(x), end: tail(x) }));

console.log(merge(convertArraytoIntervals(t6)));
