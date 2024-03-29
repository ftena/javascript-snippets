// Return an array consisting of the largest number from each provided sub-array

function largestOfFour(arr) {
    let newArr = [];
  
    for(let i = 0; i < arr.length; ++i)
    {
        newArr.push(Math.max(...arr[i]));
    }

    return newArr;
}

let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);

result = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
console.log(result);