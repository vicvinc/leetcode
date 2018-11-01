var numSquares = function(n) {
    var min  = n
    var dp = Array.from(new Array(n), e => n)
    
    console.log(dp)

    for (var m = 0; m <= n; m++) {
        dp[m] = n
    }
    
    for (var k = 0; k <= Math.pow(n, .5); k++) {
        dp[k*k] = 1
    }
    
    console.log(dp)
    
    for(var i = 0; i <= n; i++) {
        console.log(dp)
        for (var j = 0; j <= i/2; j++) {
            // console.log(dp[j] + dp[i - j])
            dp[i] = Math.min(dp[j]+ dp[i-j], dp[i])
        }
    }
    
    console.log(dp)
    console.log(dp[n])

    return dp[n]
}

var numSquares2 = function(n) {
    
    var dp = Array.from(new Array(n+1), e => n)
    
    // console.log(dp)
    dp[0] = 0
    
    for (var i = 0; i <= n; i++) {
    console.log(dp)
        
        for (var j = 1; i + j * j <= n; j++) {
            dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
        }
    }
    
    // console.log(dp[n])

    return dp[n]
}

numSquares2(13)