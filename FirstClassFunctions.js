// Some very basic but imp things about functions

a();
b();
console.log(b);

//function statement aka Declaration
function a(){
    console.log("a");
}

//function expression
var b = function(){
    console.log("b");
}

/*
Difference between above 2: hoisting
if both the functions are called before their defn, a() will be executed because functions can be
called before they're declared but b() will throw an error saying b is not defined

*/


//anonymous function
var c = function(){
    console.log("b");
}
//here an anon function is assigned to var c. Anon functions can only be assigned 
//as values in a function expression


//Named function expression
var b = function thisIsTheName(){
    console.log("b");
}
// directly calling thisIsTheName() will throw an error saying thisIsTheName is not defined because it 
// is not created in the global scope. It is created as a local variable in the local scope of a function
// so it can be accessed locally inside itself as a recurrsion call.


//First class functions aka Functions are first class citizens
//The ability to use functions as values, which can be passed as an arg, received as a parameter
//and can be returned from another function, is called as First Class Functions
