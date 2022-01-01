 // The function should return a new array containing the squares of only the
 // positive integers (decimal numbers are not integers) when an array of real
 // numbers is passed to it.

const squareList = arr => {
  const filtered = arr.filter(data => Number.isInteger(data) && data > 0);
  let result = filtered.reduce((sum, number) => { sum.push(number*number); return sum; }, []);
  return result;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// Another way
const squareListV2 = (arr) => {
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
};

const squaredIntegersV2 = squareListV2([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegersV2);