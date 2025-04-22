const str = "  Hello JavaScript World!  ";

// 1. toUpperCase()
console.log(str.toUpperCase()); 
// Output: "  HELLO JAVASCRIPT WORLD!  "

// 2. toLowerCase()
console.log(str.toLowerCase()); 
// Output: "  hello javascript world!  "

// 3. trim() — removes whitespace from both ends
console.log(str.trim()); 
// Output: "Hello JavaScript World!"

// 4. includes() — checks if a substring exists
console.log(str.includes("JavaScript")); 
// Output: true

// 5. startsWith()
console.log(str.trim().startsWith("Hello")); 
// Output: true

// 6. endsWith()
console.log(str.trim().endsWith("World!")); 
// Output: true

// 7. indexOf() — position of first occurrence
console.log(str.indexOf("JavaScript")); 
// Output: 8

// 8. lastIndexOf() — position of last occurrence
console.log(str.lastIndexOf("o")); 
// Output: 24

// 9. slice() — extracts part of a string
console.log(str.slice(2, 7)); 
// Output: "Hello"

// 10. repeat() — repeats the string
console.log("JS ".repeat(3)); 
// Output: "JS JS JS "

// 11. replaceAll() — replaces all occurrences (ES2021+)
const msg = "apple, banana, apple, mango";
console.log(msg.replaceAll("apple", "orange")); 
// Output: "orange, banana, orange, mango"

// 12. split() with limit
const colors = "red,green,blue,yellow";
console.log(colors.split(",", 2)); 
// Output: ["red", "green"]
