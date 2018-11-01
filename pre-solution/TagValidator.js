/**
 * @param {string} code
 * @return {boolean}
 */

const log = console.log.bind(console)
var isValid = function(code) {
    var temp = code.replace(/<!\[CDATA\[.*?\]\]>|t/g, '-')

    log('code reg replace cdata =>', temp)
    
    if (!temp.match(/^<([A-Z]{1,9})>(.*)<\/\1>$/)) {
        return false
    }

    var prev = null

    while (temp != prev) {
        prev = temp
        
        temp = temp.replace(/^<([A-Z]{1,9})>(.*)<\/\1>$/, '$2')
        temp = temp.replace(/<([A-Z]{1,9})>([^<>]*)<\/\1>/, '$2')
        // temp = temp.replace(/<([A-Z]{1,9})>([^<]+)<\/\1>/, '$2')
        log('replace temp =>', temp)
    }

    var p = temp.match(/<([A-Z]{1,9})>([^<>]+)<\/\1>/)
    
    log(p)

    var t = temp.match(/</) || temp.match(/<[A-Z]{1,9}>/) || temp.match(/<\/[A-Z]{1,9}>/) || temp.match(/<(.*)>/) || temp.match(/<\/(.*)>/)

    log(t)

    return !t

}

var t1 = "<DIV>>>>>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"

var t2 = "<A><A>456</A>  <A> 123  !!  <![CDATA[]]>  123 </A>   <A>123</A></A>"
var t3 = "<DIV>  unmatched <  </DIV>"

var t4 = "<A></A><B></B>"
var t5 = "<A><B><C><D><E><F><G></G><H></H></F></E></D></C></B></A>"

log('test result =>',  isValid(t4) === true)

