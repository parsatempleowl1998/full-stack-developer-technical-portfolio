// 1. Write a JavaScript expression to calculate the sum of two numbers, `num1` and `num2`.

var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
console.log(sum);

// 2. Write a program to calculate the area of a rectangle given its length and width.

var length = 5;
var width = 10;
var area = length * width;
console.log(area);

// 3. Write a program to calculate the remainder when a given number, `dividend`, is divided by another number, `divisor`.

var dividend = 15;
var divisor = 4;
var remainder = dividend % divisor;
console.log(remainder);

// 4. Write a program to increment a variable, `count`, by 1.

var count = 5;
count++;
console.log(count);

// 5. Write a program to concatenate two strings, `str1` and `str2`, using the concatenation operator (+).

var str1 = "Hello";
var str2 = "World";
var concatenatedString = str1 + " " + str2;
console.log(concatenatedString);

// 6. Write a program to negate a boolean value, `isTrue`.

var isTrue = true;
var isFalse = !isTrue;
console.log(isFalse);

// 7. Write a program to check if a given number, `num`, is between 10 and 20 (inclusive).

var num = 15;
var isBetween = num >= 10 && num <= 20;
console.log(isBetween);

// 8. Write a program to check if a person is eligible for a discount based on their age (`age`) and membership status (`isMember`). The discount is applicable if the person is at least 60 years old or is a member.

var age = 65;
var isMember = true;
var isEligible = age >= 60 || isMember;
console.log(isEligible);

// 9. Write a program to check if a given number, `num`, is not equal to 0.

var num = 10;
var isNotZero = num !== 0;
console.log(isNotZero);

// 10. Write a program to check if a student is eligible for a scholarship based on their grade (`grade`) and attendance (`attendance`). The student is eligible if their grade is at least 90 or their attendance is at least 95%.

var grade = 92;
var attendance = 97;
var isEligible = grade >= 90 || attendance >= 95;
console.log(isEligible);

// 11. Write a program to check if a given string, `str`, is either "apple" or "banana".

var str = "orange";
var isFruit = str === "apple" || str === "banana";
console.log(isFruit);

// 12. Write a program to check if a given number, `num`, is both positive and even.

var num = 8;
var isPositiveAndEven = num > 0 && num % 2 === 0;
console.log(isPositiveAndEven);

// 13. Write a program to check if a person is eligible to vote based on their age (`age`) and citizenship (`isCitizen`). The person is eligible if they are at least 18 years old and a citizen.

var age = 20;
var isCitizen = true;
var isEligibleToVote = age >= 18 && isCitizen;
console.log(isEligibleToVote);

// 14. Write a program to check if a given number, `num`, is either less than 0 or greater than 100.

var num = 120;
var isOutOfRange = num < 0 || num > 100;
console.log(isOutOfRange);

// 15. Write a program to check if a given string, `str`, starts with either "A" or "B".

var str = "Apple";
var startsWithAorB = str.startsWith("A") || str.startsWith("B");
console.log(startsWithAorB);
