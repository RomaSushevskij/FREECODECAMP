function uniteUnique(arr) {
    let newArr = []
    let values = Object.values(arguments)
    for (let i = 0; i < values.length; i += 1) {
        newArr = newArr.concat(values[i])
    }
    let ansArr = []
    for (let i = 0; i < newArr.length; i += 1) {
        if (!ansArr.includes(newArr[i])) {
            ansArr.push(newArr[i])
        }
    }
    return ansArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);