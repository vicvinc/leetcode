/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const wLen = words.length;
  const ans = [];
  for (let i = 0; i < wLen; ) {
    const group = [];
    let [sum, j] = [0, i];
    for (; j < wLen; j++) {
      const spaces = Math.max(group.length - 1, 0);
      const len = words[j].length;
      const extra = group.length > 0 ? 1 : 0;
      const curLen = sum + len + spaces + extra;
      // can put only this word
      if (curLen <= maxWidth) {
        // can put next word
        group.push(words[j]);
        sum += len;
      } else {
        break;
      }
    }

    const gLen = group.length;
    const spaces = maxWidth - sum - gLen + 1;
    // the last line, put all the rest sapces at end
    if (j === wLen) {
      if (gLen > 1) {
        for (let k = 0; k < gLen - 1; k++) {
          group[k] += " ";
        }
      }
      group.push(" ".repeat(spaces));
    } else {
      // insert space
      if (gLen === 1) {
        group.push(" ".repeat(spaces));
      } else {
        const spans = Math.max(gLen - 1, 1);
        const each = ~~(spaces / spans);
        let leftSpace = spaces % spans;
        for (let k = 0; k < gLen - 1; k++) {
          group[k] += " ".repeat(each + 1);
          if (leftSpace > 0) {
            group[k] += " ";
            leftSpace--;
          }
        }
      }
    }
    ans.push(group);
    i = j;
  }
  return ans.map(x => x.join(""));
};

const t0 = {
  words: ["This", "is", "an", "example", "of", "text", "justification."],
  maxWidth: 16
};
const t1 = {
  words: ["What", "must", "be", "acknowledgment", "shall", "be"],
  maxWidth: 16
};
const t2 = {
  words: [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do"
  ],
  maxWidth: 20
};
const t3 = {
  words: [
    "This",
    "is",
    "an",
    "example",
    "of",
    "text",
    "justification.",
    "asdasdasd",
    "dad",
    "ffff",
    "bbasd",
    "err",
    "fdd",
    "zaggg."
  ],
  maxWidth: 16
};
const t4 = {
  words: ["Listen", "to", "many,", "speak", "to", "a", "few."],
  maxWidth: 6
};

const t5 = {
  words: [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do"
  ],
  maxWidth: 20
};

const test = [t5];

for (let t of test) {
  console.log(fullJustify(t.words, t.maxWidth));
}
