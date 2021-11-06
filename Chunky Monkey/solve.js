function chunkArrayInGroups(arr, size) {
    let resultArr = [];
    let count = Math.floor(arr.length / size);
    for (let i = 0; i < count; i += 1) {
        let item = arr.splice(0, size);
        resultArr.push(item)
    }
    if (arr.length > 0) {
        resultArr.push(arr)
    }
    return resultArr


}

chunkArrayInGroups(["a", "b", "c", "d",], 2);