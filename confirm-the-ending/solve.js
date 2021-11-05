function confirmEnding(str, target) {
    let pos = str.lastIndexOf(target);
    console.log(pos)
    if (pos != -1) {
        if (str.slice(pos) == target) {
            return true
        }
    }
    return false
}

confirmEnding("Bastian", "n");