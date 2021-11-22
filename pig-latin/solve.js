function translatePigLatin(str) {
    let arr = "aeiou".split("")
    for (let i = 0; i < str.length; i += 1) {
        if (arr.indexOf(str[i]) != -1 && i === 0) {
            return str + "way"
        }
        if (arr.indexOf(str[i]) != -1) {
            return str.slice(i) + str.slice(0, i) + "ay"
        }
    }
    return str + "ay"
}

translatePigLatin("consonant");