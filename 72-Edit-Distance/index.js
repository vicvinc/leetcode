/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const head = x => x[0];
const tail = x => x[x.length - 1];

var minDistance = function(word1, word2) {
  // same word
  const w1Len = word1.length;
  const w2Len = word2.length;

  if (word1 === word2) return 0;
  if (word1 === "") return w2Len;
  if (word2 === "") return w1Len;
  // first letter matches
  if (word1[0] === word2[0])
    return minDistance(word1.slice(1, w1Len), word2.slice(1, w2Len));
  // first letter not matches

  const insert = 1 + minDistance(word1, word2.slice(1, w2Len));
  const remove = 1 + minDistance(word1.slice(1, w1Len), word2);
  const replace = 1 + minDistance(word1.slice(1, w1Len), word2.slice(1, w2Len));

  return Math.min(insert, remove, replace);
};

const minDistanceDP = (w1, w2) => {
  const w1Len = w1.length;
  const w2Len = w2.length;

  const dp = new Array(w1Len + 1).fill(1).map((x, i) =>
    new Array(w2Len + 1).fill(0).map((y, j) => {
      if (i === 0) return j;
      if (j === 0) return i;
      return 0;
    })
  );

  // w1 === w2 === ''
  dp[0][0] = 0;
  for (let i = 1; i < w1Len + 1; i++) {
    for (let j = 1; j < w2Len + 1; j++) {
      // matchs
      if (w1[i - 1] === w2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // assume i-1 as remove
        // assume i-1,j-1 as replace
        // assume j-1 as insert
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
      }
    }
  }

  for (let x of dp) console.log(x);

  return dp[w1Len][w2Len];
};

const test = ["hello", "word"];
const t1 = ["eat", "sea"];

console.log(minDistanceDP(head(t1), tail(t1)));
console.log(minDistance(head(t1), tail(t1)));
