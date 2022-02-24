/*
 * Async functions are a combination of promises and generators, and basically,
 * they are a higher level abstraction over promises.
 * Let me repeat: async/await is built on promises.
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
