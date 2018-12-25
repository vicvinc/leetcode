const swap = (nums, i, j) => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

const partition = nums => {
  const nLen = nums.length;
  const index = (Math.random() * nLen) >>> 0;
  console.log(nums[index], nums);
  swap(nums, index, nLen - 1);
  let small = -1;
  console.log(nums[index], nums);
  for (let i = 0; i < nLen; i++) {
    if (nums[i] < nums[nLen - 1]) {
      small++;
      if (small !== i) {
        swap(nums, small, i);
        console.log(nums);
      }
    }
  }
  small++;
  swap(nums, small, nLen - 1);
  return nums[small];
};

const t = [1, 2, 3, 5, 8, 13, 21];

const shuffle = nums => {
  let n = nums.length;
  while (n) {
    const rd = (Math.random() * n--) >>> 0;
    const tmp = nums[n];
    nums[n] = nums[rd];
    nums[rd] = tmp;
  }
};

shuffle(t);

console.log(t);
console.log(partition(t));
console.log(t);
