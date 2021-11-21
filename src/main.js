import {removeKeys} from './mild/mild_2.js'; 
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' }; 
let newrecord = removeKeys(idrecord, [ 'age', 'password' ]); 
console.log(idrecord); 
console.log(newrecord);