/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea1 = function(heights) {
  const hLen = heights.length;

  let max = heights[0] || 0;
  for (let i = 0; i < hLen; i++) {
    let min = heights[i];
    for (let j = i; j < hLen; j++) {
      if (j > i) {
        min = Math.min(heights[j], min);
      }
      max = Math.max(max, (j - i + 1) * min);
    }
    // console.log(dp);
  }
  return max;
};

const largestRectangleArea2 = heights => {
  const hLen = heights.length;

  let curArea = 0;
  let max = 0;
  for (let i = 0; i < hLen; i++) {
    let left = i - 1;
    let right = i + 1;
    const cur = heights[i];
    curArea += cur;
    while (left >= 0 && cur <= heights[left]) {
      curArea += cur;
      left--;
    }
    while (right < hLen && cur <= heights[right]) {
      curArea += cur;
      right++;
    }
    max = Math.max(curArea, max);
    curArea = 0;
    // i = right;
  }
  return max;
};

const head = x => x[0];
const tail = x => x[x.length - 1];
const largestRectangleArea = heights => {
  heights.push(0);
  let ret = 0;
  const stack = [[0, -1]];
  let top = 0;
  heights.forEach((height, index) => {
    let memoIndex = index;
    while (stack[top][0] > height) {
      const [h, i] = stack.pop();
      ret = Math.max(ret, (index - i) * h);
      memoIndex = i;
      top--;
    }
    if (stack[top][0] < height) {
      stack.push([height, memoIndex]);
      top++;
    }
  });
  return ret;
};

const t = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(largestRectangleArea1(t));
