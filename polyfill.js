//Pollyfill is sort of a browser fallback for browsers which do not support bind function.
//It's basically writing our own bind function.

let namex = {
    firstName : "shravan",
    lastName : "ramdurg",
};

let printFullName = function(country, hometown){
    console.log(this.firstName + this.lastName + country + hometown);
}

Function.prototype.myBind2 = function(...args) {
    let callingFunc = this;
    let params = args.slice(1);
    return function(...args2) {
        callingFunc.apply(args[0], [...params, ...args2]);
    }
}

let func = printFullName.myBind2(namex, "mumbai");
func("india");