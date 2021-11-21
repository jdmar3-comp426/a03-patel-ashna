import {removeKey} from './mild/mild_2.js'; 
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' }; 
removeKey(idrecord, 'password'); 
console.log(idrecord);