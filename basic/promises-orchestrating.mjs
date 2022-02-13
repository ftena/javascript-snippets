import fetch from 'node-fetch'

// Promises.all()
// If you need to synchronize different promises, Promise.all() helps you
// define a list of promises, and execute something when they are all resolved.

const f1 = fetch('http://www.google.com')
const f2 = fetch('http://www.bing.com')

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })

// Promises.race()
// Promise.race() runs when the first of the promises you pass to it settles
// (resolves or rejects), and it runs the attached callback just once,
// with the result of the first promise settled.

const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'eeehhh! second')
})

Promise.race([first, second]).then(result => {
  console.log(result) // second
})

// Promise.any()
// Promise.any() settles when any of the promises you pass to it fulfill
// or all of the promises get rejected. It returns a single promise that
// resolves with the value from the first promise that is fulfilled.
// If all promises are rejected, then the returned promise is rejected
// with an AggregateError.

const first1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'first')
})
const second2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'second')
})

Promise.any([first1, second2]).catch(error => {
  console.log(error) // AggregateError
})

