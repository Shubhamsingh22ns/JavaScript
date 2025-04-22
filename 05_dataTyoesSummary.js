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
console.log(typeof greet); // function
console.log(typeof numbers); // object

//Types of Memory
// 1. Stack Memory
// 2. Heap Memory
// Stack Memory: Primitive data types are stored in stack memory.
// Heap Memory: Non-primitive data types are stored in heap memory.
// Stack memory is faster than heap memory.
// Stack memory is used for static memory allocation.
// Heap memory is used for dynamic memory allocation.
// Stack memory is used for function calls.
// Heap memory is used for objects.
// Stack memory is used for local variables.
// Heap memory is used for global variables.
// Stack memory is used for function parameters.
// Heap memory is used for objects.
// Stack memory is used for function return values.
// Heap memory is used for objects.
// Stack memory is used for function calls.


