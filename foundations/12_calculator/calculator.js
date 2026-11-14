// add(): take two numbers and return their sum
const add = function(a, b) {
  return a + b;
};

// subtract(): take two numbers and return the result after subtracting the second from the first
const subtract = function(a, b) {
  return a - b;
};

// sum(): take an array of numbers and add all the numbers together
const sum = function(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

// multiply(): take an array of numbers and multiply all the numbers together
const multiply = function(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

// power(): take two numbers (base and exponent) and return the result of raising the base to that exponent
const power = function(base, exponent) {
  return base ** exponent;
};

// factorial(): given a single number, find its factorial
const factorial = function(num) {
  let acc = 1;
  for(let i = num; i > 0; i--) {
    acc = acc * i;
  }
  return acc;
};

console.log(`Add: ${add(1, 2)}`); // 3
console.log(`Subtract: ${subtract(1, 2)}`); // -1
console.log(`Sum: ${sum([1, 2, 3])}`); // 6
console.log(`Multiply: ${multiply([1, 2, 3, 4, 5])}`); // 120
console.log(`Power: ${power(3, 3)}`); // 27
console.log(`Factorial: ${factorial(7)}`); // 5040

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
