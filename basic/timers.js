// from https://nodejs.dev/learn/discover-javascript-timers

// setTimeout()
// You specify a callback function to execute later, and a value expressing
// how later you want it to run, in milliseconds.

const myFunction = (firstParam, secondParam) => {
  console.log("result = " + (firstParam + secondParam));
}

const firstParam = 10;
const secondParam = 20;

console.log("wait three seconds...")
// runs after 3 seconds
setTimeout(myFunction, 3000, firstParam, secondParam);
