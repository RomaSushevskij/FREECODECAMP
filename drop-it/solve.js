function dropElements(arr, func) {
    let newArr = [...arr]
    for (let i = 0; i < arr.length; i += 1) {
        if (!func(arr[i])) {
            newArr.shift()
        } else {
            break
        }
    }
    return newArr
}

dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
});