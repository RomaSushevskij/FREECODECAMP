function destroyer(arr) {
    console.log(arguments)
    let newArr = []
    for (let key in arguments) {
        newArr.push(arguments[key])
    }
    newArr.shift()
    console.log(newArr)
    return arr.filter(i => !newArr.includes(i))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);