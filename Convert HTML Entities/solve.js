function convertHTML(str) {
    let convObj = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;',
    }
    let newStr = str.split('').map(item => convObj.hasOwnProperty(item) ? convObj[item] : item).join('')
    return newStr
}

convertHTML("Dolce & Gabbana");