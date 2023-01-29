//What are callback functions?

// Functions that are passed in another functions are called as callback functions.


/*

synchronous: 1 at a time
asynchronous: all at once

What is the main thread in js?
JS is a single threaded language and is synchronous, meaning?
=> Everything is executed in a one at a time fashion except callback functions as they are asynchronous.

The callstack which could be seen in the browser is infact the main thread.

If any operation blocks this callstack, that is known as blocking the main thread.

Using SetTimeOut and callback functions, js can execute code in asynchronous fashion.
*/

//Closures demo with event listeners.
function outer(){
    let count = 0;
    document.getElementById("btn").addEventListener("click", () => {
        console.log("button clicked", count++);
    });
}

outer();


/*

Why do we need to remove event listeners?
 
Event listeners are heavy, why are they heavy? Because of closures.
Every variable that is declared inside the closure still has its memory allocated as user can click 
on the button anytime.

*/