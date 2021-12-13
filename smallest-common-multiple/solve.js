function smallestCommons(arr) {
    let na = arr.sort((x, y) => x - y)
    let bn = Array(na[na.length - 1] - na[0] + 1).fill(na[0]).map((e, i) => e + i)
    let ans = bn[bn.length - 1]
    let isNok = false
    while (!isNok) {
        ans += bn[bn.length - 1]
        let go = bn.map(e => ans / e)
        if (go.every(e => Number.isInteger(e))) {
            isNok = true
        }
    }
    return ans
}

console.log(smallestCommons([1, 5]))