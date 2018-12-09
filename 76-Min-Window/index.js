const minWindow = (s, t) => {
  // generate map
  const map = t.split("").reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  let [sLen, tLen, begin, end, head] = [s.length, t.length, 0, 0, 0];
  let [min, counter] = [Infinity, tLen];

  while (end < sLen) {
    if (map[s[end]]) {
      if (map[s[end]] > 0) {
        counter--;
      }
      map[s[end]]--;
    }
    while (counter === 0) {
      if (end - begin < min) {
        head = begin;
        min = end - begin;
      }
      if (map[s[begin]] < 0) {
        map[s[begin]]++;
      } else if (map[s[begin]] === 0) {
        map[s[begin]]++;
        counter++;
      }
      begin++;
    }
    end++;
  }
  return min === Infinity ? "" : s.substring(head, head + min + 1);
};

const s = "AA";

const t = "AA";

console.log(minWindow(s, t));
