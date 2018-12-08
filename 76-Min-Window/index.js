const minWindow = (s, t) => {
  const map = {};
  for (let c of t) map[c] = 1;
  console.log(map);
  let d = Infinity;
  let [sLen, tLen, begin, end, head] = [s.length, t.length, 0, 0, 0];
  let counter = tLen;
  while (end < sLen) {
    if (map[s[end++]]-- >= 0) counter--;
    while (counter === 0) {
      //valid
      if (end - begin < d) {
        head = begin;
        d = end - begin;
      }
      if (map[s[begin++]]++ == 0) counter++; //make it invalid
    }
  }
  return d == Infinity ? "" : s.substring(head, d);
};

const s = "ADOBECODEBANC";

const t = "ABC";

console.log(minWindow(s, t));
