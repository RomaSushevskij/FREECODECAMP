function palindrome(str) {
    let a = str.toLowerCase().split('').filter(item => item !== "." && item !== "," && item !== " " && item !== "_" && item !== "-" && item !== "/" && item !== "(" && item !== ")")
    let aRev = [...a].reverse()
    if (aRev.join('') === a.join('')) {
        return true
    } else {
        return false
    }

}

palindrome("0_0 (: /-\ :) 0-0")