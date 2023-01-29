// Prototype and Prototypal inheritance

// Prototype is an object which resides inside everything in java script.
// Every object in JavaScript has a built-in property, which is called its prototype. 
// The prototype is itself an object, so the prototype will have its own prototype, making
// what's called a prototype chain. The chain ends when we reach a prototype that has null
// for its own prototype.


const obj = {
    name: "shravan",
    mon: "mon2"
}
const obj2 = {
    name: "shravan",
    
}
obj2.__proto__ = obj;
console.log(obj2.mon);

// Inheriting properties and methods of other object by setting it to .__proto__ object of current object.


/**
 * Chain:
 * 
 *  (Number/String/Array -> Object -> null)
 *  num/str/arr.__proto__ = Number/String/Array.protoype
 *  num/str/arr.__proto__.__proto__ = Object.prototype
 *  num/str/arr.__proto__.__proto__.__proto__ = null
 */