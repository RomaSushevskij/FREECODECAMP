function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    arr = collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });