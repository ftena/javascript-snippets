
import fetch from 'node-fetch'

// The Fetch API is a promise-based mechanism,
// and calling fetch() is equivalent to defining
// our own promise using new Promise().
const status = res => {
	console.log(res)

	if (res.status >= 200 && res.status < 300) {
		return Promise.resolve(res)
	}
	return Promise.reject(new Error(res.statusText))
}

const json = response => response.json()

// Running fetch() returns a response
fetch('http://ip.jsontest.com/')
	.then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
	.then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
	.then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
		console.log('Request succeeded with JSON response', data)
	})
	.catch(error => {
		console.log('Request failed', error)
	})

