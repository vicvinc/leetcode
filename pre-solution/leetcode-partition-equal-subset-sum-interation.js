var sum = function(nums) {
  return nums.reduce(function(acc, cur) {
    acc += cur
    return acc
  }, 0)
}
// a = > collection
// b => index array
var diff = function(a, b) {
  return a.reduce((acc, cur, cur_index) => {
    if(b.indexOf(cur_index) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])
}

var canPick = function(a, n) {
  // console.log('===a, n====', a, n)
  if (n < 0) {
    // fail
    return false
  }
  if (n === 0) {
    // succ
    return true
  }
  var index_arr = []
  var rt = []
  var temp_n = n

  for(var i = 0, ii = a.length; i < ii; i++) {
    rt.push(a[i])
    temp_n -= a[i]
    index_arr.push(i)
    if (!canPick(diff(a, index_arr), temp_n)) {
      rt.pop()
      index_arr.pop()
      temp_n += a[i]
    }
  }
  return sum(rt) === n
}

var canPartition = function(nums) {

  var S = sum(nums)
  if (S % 2 !== 0) {
    return false
  }

  return canPick(nums, S / 2)
}
