function alphabeticalOrder(arr) {
    // Only change code below this line
    arr.sort((x, y) => x === y ? 0 : x > y ? 1 : -1)
    return arr
    // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);