# thoughts

`.` for any single character
`*` for [0, +∞] precedding character

1. `.` skip characters
2. `*` match precedding character
3. `.*` skip all the character

recursion version:

if current match is `.` or character and equal continue, else return false
if current match is `*`, and character before `*` of pattern equals string, continue
else skip `*` match
if pattern is end and string is not, return false
if pattern is end and string is end too, return true
if string is end and pattern is not end, continue

dynamic programing version:

use `dp[i][j]` to record string [0, i] and pattern [0, j] is match or not
when i = 0, j = 0, consider as `string[i] === pattern[j] || pattern[j] === '.'` as true
if `pattern[j] === '*'` then `dp[i][j] = dp[i][j-1] && string[i] === pattern[j-1]`
if `pattern[j] === '.'` then `dp[i][j] = dp[i-1][j-1]`
else `dp[i][j] = dp[i-1][j-1] && string[i] === pattern[j]`

`return dp[slen-1][plen-1]`
