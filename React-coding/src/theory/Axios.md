# What is Axios ?

Axios is a client HTTP API based on the [XMLHttpRequest] interface provided by browsers.

## Advantages of using Axios over the native Fetch API include:

1. Request and response interception
2. Streamlined error handling
3. Protection against XSRF
4. Support for upload progress
5. Response timeout
6. The ability to cancel requests
7. Support for older browsers
8. Automatic JSON data transformation

### simple Axios POST example:

// send a POST request
axios({
method: 'post',
url: '/login',
data: {
firstName: 'Finn',
lastName: 'Williams'
}
});

### Shorthand methods for Axios HTTP requests

Axios also provides a set of shorthand methods for performing different types of requests. The methods are as follows:

axios.request(config)
axios.get(url[, config]) // read
axios.delete(url[, config]) // delete
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]]) // create
axios.put(url[, data[, config]]) //update
axios.patch(url[, data[, config]])

example of shorthand methods:

axios.post('/login', {
firstName: 'Finn',
lastName: 'Williams'
});

Once an HTTP POST request is made, Axios returns a promise that is either (fulfilled or rejected) depending on the response from the backend service.

To handle the result, you can use the then() method, like this:

axios.post('/login', {
firstName: 'Finn',
lastName: 'Williams'
})
.then((response) => {
console.log(response);
}, (error) => {
console.log(error);
});

If the promise is fulfilled, the first argument of then() will be called; if the promise is rejected, the second argument will be called.

{
// `data` is the response that was provided by the server
data: {},

        // `status` is the HTTP status code from the server response
        status: 200,

        // `statusText` is the HTTP status message from the server response
        statusText: 'OK',

        // `headers` the headers that the server responded with
        // All header names are lower cased
        headers: {},

        // `config` is the config that was provided to `axios` for the request
        config: {},

        // `request` is the request that generated this response
        // It is the last ClientRequest instance in node.js (in redirects)
        // and an XMLHttpRequest instance the browser
        request: {}

}

### Using axios.all to send multiple requests

One of Axios’ more interesting features is its ability to make multiple requests in parallel by passing an array of arguments to the axios.all() method. This method returns a single promise object that resolves only when all arguments passed as an array have resolved.

// execute simultaneous requests
axios.all([
axios.get('https://api.github.com/users/mapbox'),
axios.get('https://api.github.com/users/phantomjs')
])
.then(responseArr => {
//this will be executed only when all requests are complete
console.log('Date created: ', responseArr[0].data.created_at);
console.log('Date created: ', responseArr[1].data.created_at);
});

// logs:
// => Date created: 2011-02-04T19:02:13Z
// => Date created: 2017-04-03T17:25:46Z

### Sending custom headers with Axios

const options = {
headers: {
'X-Custom-Header': 'value'
}
};
axios.post('/url', {a : 10}, options);

### POST JSON with Axios

If you want to send a preserialized JSON string to [axios.post()] as JSON, you’ll need to make sure the [Content-Type] header is set.

Axios also sets the [Content-Type] [header[] to [application/json]. This enables web frameworks to automatically parse the data.

## Client-side support for protection against XSRF

[Cross-site] request forgery (or XSRF for short) is a method of attacking a web-hosted app in which the attacker disguises himself as a legal and trusted user to influence the interaction between the app and the user’s browser. (There are many ways to execute such an attack, including XMLHttpRequest.)

Fortunately, Axios is designed to protect against XSRF by allowing you to embed additional authentication data when making requests. This enables the server to discover requests from unauthorized locations. Here’s how this can be done with Axios:

        const options = {
            method: 'post',
            url: '/login',
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            };

// send the request
axios(options);
