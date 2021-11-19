function sumAll(arr) {
    arr.sort((x, y) => x - y)
    let sumA = arr.reduce((s, i) => i + s, 0)
    let sumB = Array(arr[arr.length - 1] - arr[0] - 1).fill(arr[0] + 1).map((it, ind) => it + ind).reduce((s, i) => i + s, 0)
    return sumA + sumB
}


sumAll([1, 4]);