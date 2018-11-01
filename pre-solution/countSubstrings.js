var log = console.log.bind(console)

var isPalindromic = function(str) {
    var len = str.length
    if (len === 1) {
        return true
    }
    
    var mid = len % 2 === 0 ? len / 2 : Math.floor(len / 2)
    
    console.log('mid ===>', mid)

    for (var i = 0; i < mid && mid + i < len; i++) {
        if (str[mid - i] === str[mid + i]) {

        } else {
            return false
        }
    }
    
    return true

}

var countSubstrings = function(s) {
    var len = s.length
    var result = []
    var count = len

    for (var i = 0; i < len; i++) {
        // odd => left
        var left = 0, right = 0

        if (s[i - 1] && s[i - 1] === s[i]) {
            console.log('s[i], s[i-1]', s[i], s[i-1])
            left = 1
            // right = 1
            while (i - left >=0 && i + right < len) {
                if (s[i - left] === s[i + right]) {
                    left ++
                    right ++
                    count ++
                } else {
                    break
                }
            }
        }

        left = 1, right = 1
        while (i - left >=0 && i + right < len) {
            if (s[i - left] === s[i + right]) {
                left ++
                right ++
                count ++
            } else {
                break
            }
        }
    }

    console.log(count)
    return count
}

var t1 = 'aaa'
var t2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
countSubstrings(t2)
// console.log(isPalindromic(t2))
