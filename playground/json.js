const fs = require('fs');

const originalNote = {
    title:'Some Title',
    body:'Some Body'
};

const originalNoteToString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteToString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log('The type of note is : ' + typeof note);

console.log(note);