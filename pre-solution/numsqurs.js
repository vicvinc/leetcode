/**
 * @param {number} n
 * @return {number}
 */
const getMin = s => {
  
  if (s.length === 0) {
    return 0
  }

  return s.reduce((acc, cur) => {
    acc += cur[1]
    return acc
  }, 0)

}
var numSquares = function (n) {
  let t = n, r = 0
  
  let c = Math.floor(Math.pow(t, .5))
  let stack = []
  let total = 0
  let dp = [c+1]
  let min = -1

  for(let i = 0; i <= c; i++) {
    dp[i] = new Array(n+1)
  }

  console.log('dp===>', dp)

  for (let i = 1; i <= n;  i++) {
    for (let j = 1; j <= c; j++) {
      let cur = j * j * i
      console.log('cur===>', cur)
      if (cur + total < n) {
        total += cur
        stack.push([i, j])
        continue
      }
      
      if (cur + total === n) {
        let cMin = getMin(stack)
        min === -1 ? min = cMin : min = Math.min(min, cMin)
      }
      
      let tail = stack[stack.length -1]
      if (tail) {
        let popVal = tail[0] * tail[1] * tail[1]
        total -= popVal
      }
      
      stack.pop()

      console.log('total, stack===>',total, stack)
    }
    // console.log(stack)
  }
  
  console.log(min)
  console.log(stack)
  return dp.length
}

numSquares(12)