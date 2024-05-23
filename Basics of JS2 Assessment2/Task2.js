// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

function checkEven(num) {
    return (num % 2 == 0) ? true : false;
}

function filterEvens(arr, callbackFunc) {
    newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callbackFunc(arr[i]) == true) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], checkEven)); // Output: [2, 4, 6, 8, 10]

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

(function (number) {
    var factorial = 1;
    for (var i = 2; i <= number; i++) {
        factorial *= i;
    }
    console.log(factorial);
})(5); // Output: 120

//3. Implement a function calculate that takes three arguments: a, b, and an operation function. 
//The operation function should accept two parameters and perform a specific mathematical operation like addition, subtraction, multiplication and division. 
//Use call(), apply(), or bind() to apply the operation function to the arguments a and b.

function calculate(a, b, operation) {
    return operation.call(null, a, b);
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
console.log(calculate(5, 3, addition));         // Output: 8
console.log(calculate(5, 3, subtraction));      // Output: 2
console.log(calculate(5, 3, multiplication));      // Output: 15
console.log(calculate(5, 3, division));      // Output: 1.6666666666666667

//4. Given an araay of person objects, define a function to find oldest person object.

function filterOldestPerson(personArr){
    max = 0;
    oldestPerson = null;
    personArr.forEach((person) => {
        if(person["age"] > max){
            oldestPerson = person;
            max = person["age"];
        }
    });
    return oldestPerson;
}

persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
console.log(filterOldestPerson(persons));

//5.  Create a function that calculates the sum of an array using IIFE function.

var calculateSum = (function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
})([1, 2, 3, 4, 5]);

console.log(calculateSum);