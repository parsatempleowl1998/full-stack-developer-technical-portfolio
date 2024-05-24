// Question 1: Declare an object named "person" with properties "name", "age", and "city" and set their respective values to "John", 30, and "New York".

var person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Question 2: Declare an object named "book" with properties "title", "author", and "year" and set their respective values to "The Great Gatsby", "F. Scott Fitzgerald", and 1925. Access the "author" property and store its value in a variable called "authorName".

var book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

var authorName = book.author;
console.log(authorName); // Output: F. Scott Fitzgerald

// Question 3: Declare an object named "employee" with properties "name", "age", and "city". Delete the "city" property from the object.

var employee = {
  name: "John",
  age: 30,
  city: "New York",
};

delete employee.city;

console.log(employee); // Output: { name: "John", age: 30 }

// Question 4: Declare an object named "data" with a property named "key" having the value 123. Access the value of the "key" property using a variable called "value".

var data = {
  key: 123,
};

var value = data.key;
console.log(value); // Output: 123
