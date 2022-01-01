// Examples with every
let numbers = [1, 5, 8, 0, 10, 11];

let boolean = numbers.every(function(currentValue) {
  return currentValue < 10;
});

console.log(boolean);

function checkPositive(arr) {
  return arr.every(value => value > 0 );
}

console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkPositive([1, 2, 3, 4, 5]));

// Examples with some
numbers = [10, 50, 8, 220, 110, 11];

boolean = numbers.some(function(currentValue) {
  return currentValue < 10;
});

console.log(boolean);

function checkPositive(arr) {
  return arr.some(value => value > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));