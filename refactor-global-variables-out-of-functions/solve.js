// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "PhilosophiĆ¦ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {

    let newArr = [...arr]
    newArr.push(bookName);
    return newArr

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
        let newArr = [...arr]
        newArr.splice(book_index, 1);
        return newArr;

        // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);