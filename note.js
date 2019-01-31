console.log('note.js has started...')

// module.exports.age=34;

// module.exports.add = (a, b) => {
//     const c = a + b;
//     return c;
// }
const fs = require('fs');

const fetchBooks = () => {
    var books = [];

    try{
        books = JSON.parse(fs.readFileSync("notes-data.json"));
    } 
    catch(e){
        return [];
    }

    return books;
}

const saveBooks = (books) => {
    try{
        fs.writeFileSync("notes-data.json",JSON.stringify(books));
    }
    catch(e){
        return [];
    } 
    return books;
}

const getAll = () => {
    console.log('Gettin all notes...');
    var books = fetchBooks();
    console.log(books);
}

const addNote = (title, body) => {
    console.log('Adding note....')

    var books = fetchBooks();
    
    const duplicates = books.filter((book) => book.title === title)
    
    if(duplicates.length === 0){
        books.push({title,body});
        
        try{
            fs.writeFileSync("notes-data.json",JSON.stringify(books));
        }
        catch(e){
            return [];
        }
        return books;
    } else return undefined;
}

const readNote = (title) => {
    console.log('Reading note.....' + title)

    var books = fetchBooks();
    var theBook = books.filter((book) => book.title === title)
    console.log(theBook);
}

const removeNote = (title) => {

    // This is for a breakpoint in the debugging mode...
    // c for continous action in the debugging mode...
    // n for next line of code...
    // to get into debugging mode run the command in the command line "node inspect .....js"
    // for manipulation during the debugging mode run the command in the command line "repl"
    // nodemon inspect ...js can be used
    // node --inspect-brk ...js ile chrome browser üzerinde debugging yapabiliyoruz...
    // chrome da açabilmek için de chrome://inspect adresine gitmemiz gerekiyor...
    debugger;

    var books = fetchBooks();
    var theNewBooks = books.filter((book) => book.title !== title)
    saveBooks(theNewBooks);

    return books.length !== theNewBooks.length
}
module.exports = {
    getAll, addNote, readNote, removeNote
}


console.log('note.js has finished...')