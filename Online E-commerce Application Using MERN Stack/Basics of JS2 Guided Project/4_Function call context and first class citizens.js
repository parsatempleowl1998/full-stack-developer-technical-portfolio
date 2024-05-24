// Question 1: Function Call Context
// Write a function that adds two numbers and logs the result to the console.

function addNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

// Example usage
addNumbers(5, 3); // Output: 8
addNumbers(10, -2); // Output: 8

// Question 2: Function as First-Class Citizens
// Write a function that takes another function as an argument and calls it.

function greet(name) {
  console.log("Hello, " + name + "!");
}

function callFunction(func) {
  func();
}

// Example usage
callFunction(greet.bind(null, "John")); // Output: Hello, John!

// Question 3: IIFE (Immediately Invoked Function Expression)
// Write an IIFE that calculates the square of a number and logs the result to the console.

(function (number) {
  var square = number * number;
  console.log(square);
})(5); // Output: 25

// Question 4: Scope - Global and Local
// Write a function that demonstrates the concept of global and local scope by using variables inside and outside the function.

var globalVariable = "I'm a global variable";

function demonstrateScope() {
  var localVariable = "I'm a local variable";
  console.log(localVariable);
  console.log(globalVariable);
}

// Example usage
demonstrateScope(); // Output: I'm a local variable
//         I'm a global variable
console.log(globalVariable); // Output: I'm a global variable
console.log(localVariable); // Throws an error: ReferenceError: localVariable is not defined
