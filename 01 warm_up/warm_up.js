/*Task
For this first lesson, let’s review what we already know about asynchronous operations in JavaScript.

Using setTimeout, print the string 'TIMED OUT!' after 300ms.*/

function printTimeout () {
    setTimeout(()=>{ console.log('TIMED OUT!'); }, 300);
}

printTimeout();