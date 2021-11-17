/*
 * A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something,
 * usually asynchronously. When the task completes, you either fulfill your promise or fail to do so.
 * Promise is a constructor function, so you need to use the new keyword to create one.
 * It takes a function, as its argument, with two parameters - resolve and reject.
 * These are methods used to determine the outcome of the promise.
 */

/* A promise has three states: pending, fulfilled, and rejected.
 */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

/* The then method is executed immediately after your promise is
 * fulfilled with resolve.
 * result comes from the argument given to the resolve method
 */
makeServerRequest.then(result => {
  console.log(result);
});

/* catch is the method used when your promise has been rejected.
 * It is executed immediately after a promise's reject method is called.
 * error is the argument passed in to the reject method.
 */
makeServerRequest.catch(error => {
  console.log(error);
});
