// two types of Data types:

// a) Primitive

// 1. String
let name = "John Doe";
// 2. Number
let age = 30;
// 3. Boolean
let isEmployed = true;
// 4. Undefined
let job;
// 5. Null
let address = null;
// 6. Symbol
let uniqueId = Symbol("id");
let Id = Symbol("id");
console.log(uniqueId === Id); // false, because symbols are unique

// 7. BigInt
let bigNumber = BigInt(1234567890123456789012345678901234567890);

// b) Non Primitive/ Refferance
// 1. Object
let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};
// 2. Array
let numbers = [1, 2, 3, 4, 5];

// 3. Function
function greet() {
  console.log("Hello, World!");
}
person.age = 31; // Updating object property
console.log(person.age); // Accessing object property

console.log(typeof bigNumber); // bigint
console.log(typeof address); // null return type of => object
console.log(typeof name); // string
console.log(typeof age); // number


