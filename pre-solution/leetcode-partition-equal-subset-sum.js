var canPartition = function(nums) {
  var len = nums.length
  var S = 0
  
  for(var n of nums) S+=n

  if (S % 2 !== 0) return false
  
  S /= 2

  var map = [len]

  for(var i = 0; i < len; i++) {
    map[i] = [S]
    map[i][0] = true
  }

  //不是很理解为什么小于也可以为true 
  if(nums[0] <= S) map[0][nums[0]] = true 

  for(var i = 1; i < len; i++) {
    var num = nums[i]
    // 注意这里一定要取到S，不然就变为求S-1的解了
    for(var j = 1; j <= S; j++) {
      if (num > j) {
        // 变相理解为 j - num < 0,此时的num不应该包含在解的空间中
        map[i][j] = map[i-1][j]
      } else {
        // 此时可以归为（1-i）的子数组的解
        map[i][j] = map[i-1][j] | map[i-1][j-num]
      }
    }
  }
  
  return !map[len-1][S] ? false : true
}