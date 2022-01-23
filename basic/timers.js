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

// setInterval()
// similar to setTimeout, with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds)

var value = 0;

const myFunction2 = (increment) => {
   value = value + increment;
   console.log("setInterval: " + value);
};

setInterval(myFunction2, 1000, 10);

