
const name = "Shubham"
var last = "singh"  // Don't use 
let middle = "Nothing"  //scope
id = "unique"  //Bad Practice

/*
Prefer not to use var because of issue in block scope and
Functional Scope
*/
let num;
console.log(num) //undefined
console.log(id,name,last,middle)
console.table([id, name, middle, last]);