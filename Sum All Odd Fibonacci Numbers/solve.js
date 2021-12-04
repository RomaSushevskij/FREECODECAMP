function sumFibs(num) {
    let arr = [1, 1];
    let resArr = [1, 1];
    let next;
    while (num >= arr[1]) {
        next = arr[0] + arr[1];
        resArr.push(next);
        arr[0] = arr[1];
        arr[1] = next;
    }

    resArr = resArr.filter(item => item % 2 !== 0).reduce((sum, item) => item + sum, 0) - resArr[resArr.length - 1]
    return resArr
}

sumFibs(1000)
sumFibs(4000000)
sumFibs(4)
sumFibs(75024)
sumFibs(75025)