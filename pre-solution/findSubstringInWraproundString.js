const log = console.log.bind(console)

var findSubstringInWraproundString = function (p) {
    var dp = []
    var len = p.length

    var dict = 'abcdefghijklmnopqrstuvwxyz'.split('')

    // log('dict => ', dict)

    for (let i = 0; i < 26; i++) {
        dp[i] = 0
    }

    var maxCount = 1

    for (let i = 0; i < len; i++) {
        let curVal = dict.indexOf(p[i])
        dp[curVal] = Math.max(dp[curVal], 1)
        if (i > 0) {
            let preVal = dict.indexOf(p[i - 1])
            let isDesc = curVal - preVal

            log('curVal, preVal =>', curVal, preVal, curVal - preVal)

            if (isDesc === 1 || isDesc === -25) {
                maxCount ++
            } else {
                maxCount = 1
            }
        }
        dp[curVal] = Math.max(maxCount, dp[curVal])
    }

    log('dp =>', dp)

    var count = dp.reduce((acc, cur) => {
        acc += cur
        return acc
    }, 0)

    log('result =>', count)

    return count

}

var t1 = "cdefghefghijklmnopqrstuvwxmnijklmnopqrstuvbcdefghijklmnopqrstuvwabcddefghijklfghijklmabcdefghijklmnopqrstuvwxymnopqrstuvwxyz"
var t2 = "a"
var t3 = "zaba"

findSubstringInWraproundString(t3)