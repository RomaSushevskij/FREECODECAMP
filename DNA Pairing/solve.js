function pairElement(str) {
    let ar = str.split("")
    let newAr = []
    let rev = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    for (let i = 0; i < ar.length; i += 1) {
        let a = new Array(2);
        a[1] = rev[ar[i]]
        newAr.push(a)
    }
    for (let i = 0; i < newAr.length; i += 1) {
        if (newAr[i][1] == "A") {
            newAr[i][0] = "T"
        } else if (newAr[i][1] == "T") {
            newAr[i][0] = "A"
        } else if (newAr[i][1] == "C") {
            newAr[i][0] = "G"
        } else if (newAr[i][1] == "G") {
            newAr[i][0] = "C"
        }
    }
    return newAr
}


pairElement("GCG");