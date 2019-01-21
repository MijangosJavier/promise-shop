/*Task
Let's build exactly the system discussed above.

Some invalid JSON will be available on process.argv[2].

1- Build a function called parsePromised that creates a promise,
performs JSON.parse in a try/catch block, and fulfills or rejects the promise depending on whether an error is thrown.
Note: your function should synchronously return the promise!
2- Build a sequence of steps like the ones shown above that catches any thrown errors and logs them to the console. */

function parsePromised (jsonToParse) {
    var promise = new Promise((fulfilled, rejected) =>{
        try {
            var parsedJson = JSON.parse(jsonToParse);
            fulfilled(parsedJson);
        } catch (error) {
            rejected(error.message);
        }
    })

    return promise;
}

parsePromised(process.argv[2]).then(console.log).catch(console.log);