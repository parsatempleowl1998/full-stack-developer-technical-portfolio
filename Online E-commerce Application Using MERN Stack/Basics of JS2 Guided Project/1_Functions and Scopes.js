// Question 1: Anonymous Function
// Write an anonymous function that takes two numbers as parameters and returns their sum.

var sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 3)); // Output: 5

// Question 2: IIFE Function
// Write an IIFE (Immediately Invoked Function Expression) that prints "Hello, World!" to the console.

(function () {
  console.log("Hello, World!");
})();
// Output: Hello, World!

// Question 3: Scope - Global and Local
// Write a function that demonstrates the concept of global and local scope. The function should have a local variable and a global variable, and it should print their values.

var globalVariable = "I'm global"; // Global variable

function scopeDemo() {
  var localVariable = "I'm local"; // Local variable

  console.log(localVariable);
  console.log(globalVariable);
}

scopeDemo();
// Output:
// I'm local
// I'm global

// Question 4: Anonymous Function as a Parameter
// Write a function that takes an anonymous function as a parameter and invokes it.

function higherOrderFunction(callback) {
  callback();
}

higherOrderFunction(function () {
  console.log("Anonymous function is invoked.");
});
// Output: Anonymous function is invoked.

// Question 5: IIFE Returning a Value
// Write an IIFE that returns the square of a number and assign the result to a variable.

var number = 5;

var square = (function (num) {
  return num * num;
})(number);

console.log(square); // Output: 25
