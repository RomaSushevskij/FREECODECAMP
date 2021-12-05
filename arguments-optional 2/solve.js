function addTogether() {
    let a = arguments["0"]
    let b = arguments["1"]
    let check = () => {
        return Object.keys(arguments).some(key => typeof (arguments[key]) !== "number")
    }
    if (check()) {
        return undefined
    }
    if (arguments.length === 1) {
        return function (b) {

            if (typeof (b) !== "number") {
                return undefined
            }
            return a + b
        }
    }
    return a + b

}

addTogether(2)([3])