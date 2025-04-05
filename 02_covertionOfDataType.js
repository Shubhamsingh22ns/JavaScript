// DAY-2
let value = "33"
let newValue = Number(value);
let value2 = "23djj"
let newValue2 = Number(value2)

console.log(typeof value)
console.log(typeof newValue)
console.log(typeof newValue2) // it is also giving number as output, i.e wroung
console.log(newValue2) // NaN (Not a Number) 

// "33" => 33 
// "33aa" => NaN
// true => 1; false => 0

let isLogedIn = "dfdm";
let booleanIsLoggedIn = Boolean(isLogedIn);
console.log(booleanIsLoggedIn)

// 1 => true or 0 => false
// "" => false
// "shubham" => true

let someNum = 33
let stringNum = String(someNum);
console.log(stringNum); 
console.log(typeof stringNum); // String

// 33 => "33"