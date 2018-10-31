/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const sLen = s.length;
  const dp = new Array(sLen).fill(0).map(() => new Array(sLen).fill(0));

  let start = 0;
  let maxLength = 0;

  // maxlength = 1
  for (let i = 0; i < sLen; i++) {
    dp[i][i] = 1;
    maxLength = 1;
    start = i;
  }

  // maxlength = 2
  for (let i = 0; i < sLen - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      maxLength = 2;
      start = i;
    }
  }
  // maxlength = k
  // start with 3
  for (let k = 3; k <= sLen; k++) {
    for (let i = 0; i < sLen - k + 1; i++) {
      const j = i + k - 1;
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = 1;
        if (k >= maxLength) {
          maxLength = k;
          start = i;
        }
      }
    }
  }
  return s.substring(start, start + maxLength);
};

const t =
  "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";

const t1 = "ccc";

console.log(longestPalindrome(t1));
