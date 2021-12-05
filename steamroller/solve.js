function steamrollArray(arr) {
    let resArr = []
    flatten(arr)

    function flatten(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flatten(item)
            } else {
                resArr.push(item)
            }
        })
    }

    return resArr
}

steamrollArray([1, [2], [3, [[4]]]])