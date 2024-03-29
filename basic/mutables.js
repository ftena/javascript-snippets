// In JavaScript, only objects and arrays are mutable, not primitive values.
const s = [5, 6, 7];
// s = [1, 2, 3]; // error
s[2] = 45;
console.log(s); // [5, 6, 45]

let arr = [1, 2, 3];
console.log("arr = " + arr);
let arr2 = arr;
arr2[2] = 33;
console.log("arr = " + arr); // [1, 2, 33]

let arr3 = [...arr];
arr[2] = -333;
arr3[2] = 333;
console.log("arr = " + arr); //1, 2, -333 
console.log("arr2 = " + arr2); //1, 2, -333 
console.log("arr3 = " + arr3); //1, 2, 333 

// The splice method mutates also the original arrays
arr.splice(2,1);
console.log("arr = " + arr); //1, 2 

// Prevent object mutation
let obj = {
  name:"name",
  review:"review"
};
obj.review = "bad";
obj.prop = "prop";
Object.freeze(obj);
obj.name = "newname";
obj.newProp = "newprop";
console.log(obj); 