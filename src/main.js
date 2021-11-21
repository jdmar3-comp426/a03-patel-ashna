import {removeKeyNonDestructive} from './mild/mild_2.js'; 
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' }; 
let newrecord = removeKeyNonDestructive(idrecord, 'age'); 
console.log(idrecord); 
console.log(newrecord);