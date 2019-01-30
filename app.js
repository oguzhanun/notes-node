console.log('app.js has started...')

const fs = require( 'fs' );
// const os = require( 'os' );
const note = require( './note.js');
const _ = require('lodash');
const yargs = require('yargs');
const {title, body}=yargs.argv;

// const uniq = _.uniq(['oguzhan', 1,2,3,3,3,3, 'oguzhan']);
// console.log('the uniq array is = ', uniq);

// console.log(os.userInfo());

// fs.appendFile ("HelloText.txt", `\nHello ${ os.userInfo().username } You are ${note.age} !`, ( err ) => {
    //fd file descriptor anlamına geliyor. Dosya eğer fs.open ile açlılısa
    // callback function ile fd geri döndürülüyor. oradan yani dosya açıldığında alınabilecek bir
    // referans numarası gibi bir şey...
    // fs.close(fd, (err)=>{
    //     if(err) throw err;
    // })
    //if(err) throw err;
// } )

//komut satırı değişkeni alarak programın çalışmasını sağlıyor... process.argv (argument vector)
//const command = process.argv[2];

const command = yargs.argv._[0];

if(command){
    
    if(command === 'add'){
        //console.log('Adding notes');
        const notes = note.addNote(title, body);
        if(notes === undefined){
            console.log('the title already in use...')
        }
        else if(notes.length === 0){
            console.log('there has happened a file writing issue...')
        } else console.log('bravo zulu! You have added a title');
    } 
    
    else if (command === 'list'){
        //console.log('listing notes');
        note.getAll();
    } 
    
    else if(command === 'read'){
        //console.log('reading notes');
        note.readNote(title);
    } 
    
    else if(command === 'remove'){
        //console.log('removing notes');
        note.removeNote(title);
    } 
    
    else {
        console.log ('command not recognized')
    } 
}

// console.log( 'The result of the process is = ' + note.add ( 10, -8) );

console.log ( 'app.js has finished...')