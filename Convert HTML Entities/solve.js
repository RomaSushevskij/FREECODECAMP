function convertHTML(str) {
    let convertObj = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;',
    };
    let newStr = str.split('').map(item => convertObj.hasOwnProperty(item) ? convertObj[item] : item).join('');
    return newStr
}

convertHTML("Dolce & Gabbana");