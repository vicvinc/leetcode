const dp = new Array(10)
  .fill(0)
  .map((x, i) =>
    new Array(10)
      .fill(0)
      .map((y, j) => (i > 0 && j > 0 && i >= j ? `${i}*${j}=${i * j}` : 0))
      .filter(x => x !== 0)
  )
  .map(x => x.join(" "))
  .filter(x => x !== "")
  .join("\n");

console.log(dp);
