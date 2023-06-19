
//creation of ID IN JS


 const prompt = require('prompt-sync')();
 const id = prompt('enter id:\t');
 let available = prompt('enter availablity:\t');
 const count = prompt('enter count: \t');
 const name = prompt('enter name : \t');
 const author = prompt('enter author: \t');

 let Library = {
    id: parseInt(id),
    available: available = Boolean,
    count: parseInt(count),
    name: name,
    author: author
 } 
 console.log('name -->', Library.name)