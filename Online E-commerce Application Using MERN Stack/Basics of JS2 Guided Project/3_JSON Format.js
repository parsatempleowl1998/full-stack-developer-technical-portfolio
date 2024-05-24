
// 1. Convert JSON to JavaScript object:

var jsonString1 = '{"name": "John", "age": 25, "city": "New York"}';
var jsonObj1 = JSON.parse(jsonString1);
console.log(jsonObj1);

// 2. Convert JavaScript object to JSON:

var jsonObj2 = { name: "John", age: 25, city: "New York" };
var jsonString2 = JSON.stringify(jsonObj2);
console.log(jsonString2);

// Question 4:
// Write JavaScript code to iterate over an array of JSON objects and extract a specific property from each object.

var jsonArray = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "London" },
  { name: "Bob", age: 35, city: "Paris" }
];

jsonArray.forEach((obj) => {
  var name = obj.name;
  console.log(name);
});