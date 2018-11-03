var isPalindromic = function(str) {
  var len = str.length;
  if (len === 1) {
    return true;
  }

  var mid = len % 2 === 0 ? len / 2 : Math.floor(len / 2);

  console.log("mid ===>", mid);

  for (var i = 0; i < mid && mid + i < len; i++) {
    if (str[mid - i] === str[mid + i]) {
    } else {
      return false;
    }
  }

  return true;
};

var longestPalindrome1 = function(s) {
  var count = 1;
  var len = s.length;
  let curPL = 1;
  for (var i = 0; i < len; i++) {
    console.log("i ==>", i);
    let left = 0,
      right = 0,
      curPL = 0;

    if (s[i] === s[i - 1]) {
      left = 1;
      while (i - left >= 0 && i + right < len) {
        if (s[i - left] === s[i + right]) {
          curPL += 2;
          left++;
          right++;
        } else {
          break;
        }
      }

      console.log("curPL ==>", curPL);
      count = Math.max(curPL, count);
    }

    (left = 1), (right = 1), (curPL = 1);
    while (i - left >= 0 && i + right < len) {
      if (s[i - left] === s[i + right]) {
        curPL += 2;
        left++;
        right++;
      } else {
        break;
      }
    }

    console.log("curPL 2 ==>", curPL);
    count = Math.max(curPL, count);
  }
  return count;
};

const calSum = dp => {
  var result = 0;
  var odd = 0;

  for (let i in dp) {
    console.log(i, dp[i]);
    if (dp[i] && dp[i] % 2 === 0) {
      result += dp[i];
    } else {
      result += dp[i] - 1;
      odd = 1;
    }
  }

  result += odd;
  console.log(result);

  return result;
};

var longestPalindrome = s => {
  let len = s.length;
  let dp = {};
  let hasOdd = false,
    oddLetter = "";

  for (let i = 0; i < len; i++) {
    if (!dp[s[i]]) {
      dp[s[i]] = 1;
    } else {
      dp[s[i]]++;
    }
  }

  console.log(calSum(dp));

  return calSum(dp);
};

var t1 = "abccccdd";
console.log(longestPalindrome(t1));
