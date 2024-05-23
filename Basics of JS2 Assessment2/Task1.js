// 1. Define and invoke an anonymous function which takes a number and returns its square.
// If input is 2, output should be 4.

var square = function (num) {
    return num ** 2;
}

console.log(square(2));

// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"

(function (personName) {
    console.log("Hello " + personName + ", Welcome to Great Learning!");
})("Harry");

// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.

var myArray = [1, 2, 3];
function incrementArray() {
    for (var i = 0; i < myArray.length; i++) {
        myArray[i] += 2;
    }
}

incrementArray();
console.log(myArray);

// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.

var course = {
    "courseName": "Computer Science",
    "durationInMonths": 24,
    "level": "Beginner"
}
console.log(course);
course.level = "Intermediate";
console.log(course);

// 5. Given an array "students" of JSON objects write a code to iterate through each of these codes and extract first name and last name of each students.

var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

students.forEach((obj) => {
    console.log(obj.firstName, obj.lastName)
});

// 6. Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array

function doubleNumber(num) {
    return num * 2;
}

function doubleArray(arr, callbackFunc) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = callbackFunc(arr[i]);
    }
    console.log(arr);
}

doubleArray([1, 2, 3, 4, 5], doubleNumber); //Output: [2, 4, 6, 8, 10]

// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).

var multiplyBy = (function () {
    var factor = 2;

    return function (number) {
        return number * factor;
    };
})();


console.log(multiplyBy(5)); // Output: 10

//8. Using the `call` method, write a function that finds the maximum number in an array.

function findMaxNumber(numbers) {
    // Assume numbers is an array of numbers
    return Math.max.apply(null, numbers);
}

var numbers = [10, 5, 8, 20];
console.log(findMaxNumber(numbers)); // Output: 20

//9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.

var car = {};

car.make = "Toyota";
car.model = "Camry";

console.log(car); // Output: { make: "Toyota", model: "Camry" }

//10. Given an array "students" of JSON objects define a function displayByKey which takes this array object 
// and a keyName as string and displays the value of the key for each of the JSON objects.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
function displayByKey(studentsObj, keyName){
    studentsObj.forEach((obj) => {
        console.log(obj[keyName])
    });
    
}

displayByKey(students, "firstName"); //Output: Harry Ron Hermione
displayByKey(students, "house"); //Output: Slytherin Gryffindor Gryffindor