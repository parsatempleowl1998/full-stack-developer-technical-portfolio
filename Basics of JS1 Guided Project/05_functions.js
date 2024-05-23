// 1. Write a function `greet` that takes a name as a parameter and returns a greeting message.

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!

// 2. Write a function `calculateArea` that takes the length and width of a rectangle as parameters and returns its area.

function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(5, 10)); // Output: 50

// 3. Write a function `isEven` that takes a number as a parameter and returns `true` if it is even, and `false` otherwise.

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// 4. Write a function `calculateAverage` that takes an array of numbers as a parameter and returns the average of those numbers.

function calculateAverage(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([5, 10, 15])); // Output: 10
