/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy1 = function(n) {
  let b = []
  for (let num = 0; num < 100000; num++) {
    let a = []
    let cur = num
    while(1) {
      let nStr = cur + ''
      let sum = 0
      for(let i = 0; i < nStr.length; i++) {
          let n = parseInt(nStr[i])
          sum += n*n
      }
      if (!a[sum]) {
        a[sum] = true
      } else {
        b[sum] = true
        break
      }
      cur = sum
    }
  }

  b.map((e, index) => {
    if(e) {
      console.log(index)
    }
  })
}


var isHappy = function(n) {
    let number = n
    while(1) {
        let nStr = number + ''
        console.log(nStr)
        let sum = 0
        for(let i = 0; i < nStr.length; i++) {
            let n = parseInt(nStr[i])
            sum += n*n
        }
        // console.log(sum)
        if (sum == 1) {
            return true
        } else if (sum === 4) {
            return false
        }
        number = sum
    }
}
// const isHappy = n => {
//   return [4, 16, 20, 37, 42, 58, 89, 145]
// }
// isHappy(1)
console.log(isHappy1(2))