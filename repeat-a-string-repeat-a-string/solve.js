function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return ""
    } else {
        let resultStr = "";
        for (let i = 0; i < num; i++) {
            resultStr += str
        }
        return resultStr
    }
}


repeatStringNumTimes("abc", 3);