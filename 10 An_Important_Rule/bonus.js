/*Bonus
Try swapping your rejection handler from console.log to alwaysThrows. 
Your program will now throw an exception in the global context! Ahh! Try to fix this using the approach described above.*/

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(intArg) {
    console.log(intArg);
    return intArg+1;
}

var promise = Promise.resolve(iterate(1));

promise.then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(alwaysThrows)//Unhandled promise rejection
    .catch((error)=>{
        console.log(error.message)
    });