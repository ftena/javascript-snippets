// Sum Arrays in JavaScript using reduce method

let numbers = [1, 2, 3, 4];
let initialValue = 0;

let sum = numbers.reduce((totalValue, currentValue) => {
    console.log(`totalValue: ${totalValue}, currentValue: ${currentValue}`)
    return totalValue + currentValue
}, initialValue);

console.log("sum", sum);