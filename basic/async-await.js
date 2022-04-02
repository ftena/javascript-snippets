/*
 * Async functions are a combination of promises and generators, and basically,
 * they are a higher level abstraction over promises.
 * Let me repeat: async/await is built on promises.
 * More info @ https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await
 */

const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')

//

const aFunction = async () => {
  return 'test'
}

aFunction().then(alert => console.log(alert)) // This will alert 'test'

// example
/*
  const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await userResponse.json() // parse JSON
  return userData
}

  getFirstUserData()
*/

