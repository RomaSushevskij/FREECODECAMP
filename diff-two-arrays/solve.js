function diffArray(arr1, arr2) {
    let a = arr1.filter(i => !arr2.includes(i))
    let b = arr2.filter(i => !arr1.includes(i))
    return a.concat(b)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);