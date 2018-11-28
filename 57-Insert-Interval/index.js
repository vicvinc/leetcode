/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const head = x => x[0];
const tail = x => x[x.length - 1];

const insertInterval = (arr, elem) => {
  const iLen = arr.length;
  console.log(arr.length, elem);
  if (iLen === 0) return arr.push(elem);
  // insert
  if (elem.start < head(arr).start) {
    arr.unshift(elem);
    return;
  }

  if (elem.start > tail(arr).start) {
    arr.push(elem);
    return;
  }

  for (let i = 0; i < iLen; i++) {
    const cur = arr[i];
    if (cur.start > elem.start) {
      arr.splice(i, 0, elem);
      return;
    }
    if (cur.start === elem.start && cur.end >= elem.end) {
      arr.splice(i, 0, elem);
      return;
    }
  }
  arr.push(elem);
  return;
};

var insert = function(intervals, newInterval) {
  intervals.sort((a, b) => a.start - b.start);

  const iLen = intervals.length;
  const ans = [];
  // insert
  insertInterval(intervals, newInterval);
  console.log("after inserted =>", intervals, intervals);

  ans.push(head(intervals));

  for (let i = 1; i <= iLen; i++) {
    const last = tail(ans);
    const cur = intervals[i];
    if (last.end >= cur.start) {
      const start = Math.min(last.start, cur.start);
      const end = Math.max(last.end, cur.end);
      ans.pop();
      ans.push({ start, end });
    } else {
      ans.push(cur);
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

const t7 = [[1, 5]];

const convertArrytoInterval = a => ({ start: head(a), end: tail(a) });

const convertArraytoIntervals = a => a.map(convertArrytoInterval);

console.log(insert(convertArraytoIntervals([]), convertArrytoInterval([0, 3])));
