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
var merge = function(intervals) {
  intervals.sort((a, b) => tail(a).end > tail(b).end);

  const head = x => x[0];
  const tail = x => x[x.length - 1];
  const divideMerge = nums => {
    // console.log("nums", nums);
    const nLen = nums.length;
    if (nLen <= 1) return nums;
    if (nLen === 2) {
      if (head(nums).end >= tail(nums).start) {
        const [start, end] = [head(nums).start, tail(nums).end];
        return [{ start, end }];
      } else {
        return nums;
      }
    }
    const mid = ~~(nLen / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid, nLen);
    return [...divideMerge(left), ...divideMerge(right)];
  };

  return divideMerge(intervals);
};

const t = [[1, 3], [2, 6], [8, 10], [15, 18]];
const t1 = [[1, 4], [4, 5]];
const t2 = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(t2));
