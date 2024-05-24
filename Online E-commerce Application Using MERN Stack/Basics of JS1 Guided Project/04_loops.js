// 1. Write a JavaScript program that prints the numbers from 1 to 10 using a for loop.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Write a JavaScript program that calculates the sum of all numbers from 1 to a given number using a while loop.

function calculateSum(n) {
  var sum = 0;
  var i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

console.log(calculateSum(10)); // Output: 55

// 3. Write a JavaScript program that prints the even numbers from 1 to 20 using a do-while loop.

var i = 1;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);