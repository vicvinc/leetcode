
const ROBED = 1, CANTROB = 2

const log = console.log.bind(console)

var rob = function(nums) {
    var len = nums.length
    if (len <=2 ) {
        return nums.reduce((acc, cur) => {
            acc = Math.max(acc, cur)
            return acc
        }, 0)
    }
    
    var dp = []
    
    dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < len; i++) {
        dp.push(Math.max(nums[i] + dp[i-2], dp[i-1]))
    }

    log('dp =>', dp)
    
    return dp[dp.length -1]
}

var rob2 = function(nums) {
    var len = nums.length
    if (len <=2 ) {
        return nums.reduce((acc, cur) => {
            acc = Math.max(acc, cur)
            return acc
        }, 0)
    }
    
    var dp = []
    dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < len; i++) {
        dp.push(Math.max(nums[i] + dp[i-2], dp[i-1]))
    }
    log('dp  => ', dp)
    
    var dp1 = []
    dp1[len-1] = nums[len-1], dp1[len-2] = Math.max(nums[len-1], nums[len -2])
    
    for (let i = len - 3; i >= 0; i--) {
        dp1.push(Math.max(nums[i] + dp[i+2], dp[i+1]))
    }

    log('dp1 => ', dp1)

    return dp[dp.length -1]

}

var t1 = [1,3,5,7,9]

rob2(t1)
