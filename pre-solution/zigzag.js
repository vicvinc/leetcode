
const log = console.log.bind(console)

var convert = function(s, numRows) {
    var result = []
    var sLen = s.length
    
    if (numRows === 1) {
        return s
    }

    var cellLen = 2 * numRows - 2 // erver cell length

    log('cellLen ==>', cellLen)

    var iLen = Math.ceil(sLen / cellLen)

    log('iLen ==>', iLen)

    var temp = []
    for (let i = 0; i < numRows; i++) {
        temp[i] = []     
    }

    log('ilen, temp==>', iLen, temp)

    for (let i = 0; i < iLen; i++) {
        // vertical total line
        let start = i * cellLen
        let end = start + cellLen - 1
        temp[0].push(s[start])
        let j = 1
        start ++
        while(start !== end) {
            log('j, start, end ==>', j, start, end)
            temp[j].push(s[start])
            temp[j].push(s[end])
            start ++, end --, j ++
        }
        temp[j].push(s[start])
    }
    log(temp)
    var t = temp.reduce((acc, s) => {
        var r = s.map(e => {
            if (e) {
                return e
            }
            return ''
        })
        r = r.join('')
        acc.push(r)
        return acc
    }, [])
    t = t.join('')
    log('==t ==>', t)
    return t
}

var t2 = 'ABC'

var t1 = 'PAYPALISHIRING'
var result = 'PAHNAPLSIIGYIR'

log('result', result === convert(t2, 2))