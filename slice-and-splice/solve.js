function frankenSplice(arr1, arr2, n) {
    let ans = arr2.slice()
    let end = ans.splice(n)
    ans.push(...arr1, ...end)
    return ans
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);