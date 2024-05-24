// Question 1: Write a function that concatenates two strings using the `bind` method.

function concatenateStrings(str1, str2) {
  return this + str1 + str2;
}

// Example usage
var greeting = "Hello, ";
var boundConcatenate = concatenateStrings.bind(greeting);
console.log(boundConcatenate("John", "!")); // Output: "Hello, John!"

// Question 2: Create a function that counts the number of properties in an object using `apply` and the `arguments` object.

function countProperties(obj) {
  return Object.keys(obj).length;
}

// Example usage
var person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(countProperties.apply(null, [person])); // Output: 3

// Question 3: Write a function that accepts another function as an argument and returns a modified version of it that logs a message before and after executing the original function.

function modifyFunction(originalFunction) {
  return function () {
    console.log("Before executing the function");
    var result = originalFunction.apply(null, arguments);
    console.log("After executing the function");
    return result;
  };
}

// Example usage
function addNumbers(a, b) {
  return a + b;
}

var modifiedAddNumbers = modifyFunction(addNumbers);
console.log(modifiedAddNumbers(3, 5)); // Output: "Before executing the function", 8, "After executing the function"
