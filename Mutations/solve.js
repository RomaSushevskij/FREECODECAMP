function mutation(arr) {
    for (let i = 0; i<arr[1].toLowerCase().length; i++) {
        if(arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i]) < 0) {
            return false
        }
    }
    return true
}


mutation(["Mary", "Army"])