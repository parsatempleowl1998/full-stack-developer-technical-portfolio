// 1. Write a program that checks if a given number, `num`, is positive, negative, or zero.

var num = 5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Write a program that checks if a given number, `num`, is even or odd.

var num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Write a program that determines if a given year, `year`, is a leap year and
// has 366 days, or a common year and has 365 days.

var year = 2022;
var days;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  days = 366;
} else {
  days = 365;
}

console.log("Number of days in the year: " + days);

// 4. Write a program that checks if a given number, `num`, is a perfect square.

var num = 16;

if (Math.sqrt(num) % 1 === 0) {
  console.log("Perfect square");
} else {
  console.log("Not a perfect square");
}