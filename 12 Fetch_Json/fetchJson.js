/*Task
Fetch JSON from http://localhost:1337 and console.log it.

There are several things you will want to know:

q-io's http module has a read method which returns a promise for the content of a successful (status 200) HTTP request.
Parse the returned JSON and console.log it for much win.*/

var HTTP = require("q-io/http");

promise = HTTP.read('http://localhost:1337');

promise.then((json)=>{
    console.log(JSON.parse(json))
})
.catch(console.log);    

