function fearNotLetter(str) {
    let alphabet = ("abcdefghijklmnopqrstuvwxyz");
    let part = alphabet.slice(alphabet.indexOf(str[0]), alphabet.length + 1 - str.length + 1)
    console.log(part)
    for (let i = 0; i < part.length; i += 1) {
        if (part[i] !== str[i]) {
            return part[i]
        }
    }
}


fearNotLetter("stvwx")