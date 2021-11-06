function getIndexToIns(arr, num) {
    let newArr = arr.sort((x, y) => x - y)
    let start = newArr.filter(item => num > item);
    return start.length
}



getIndexToIns([40, 60], 50);