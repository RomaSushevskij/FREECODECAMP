function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const firstAlph = alphabet.split('').splice(0, 13);
    const secondAlph = alphabet.split('').splice(13);
    const alphObj = {};
    firstAlph.forEach((w, i) => alphObj[w] = secondAlph[i]);
    secondAlph.forEach((w, i) => alphObj[w] = firstAlph[i]);
    const arrStr = str.split('');
    const ansArr = arrStr.map(i => i === '.' || i === '!' || i === '?' || i === ' ' ? i : alphObj[i]);
    const ansStr = ansArr.join('');
    return ansStr
}

rot13("SERR PBQR PNZC");