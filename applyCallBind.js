let obj1 = {
    firstName : 'Shravan',
    lastName : 'Ramdurg',
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

let printIntenseFullName = function(father, grandFather){
    console.log(this.firstName + " " + father + " " + grandFather);
}

let obj2 = {
    firstName : 'Bruce',
    lastName : 'Wayne'
}

//Call : One object borrowing method of another object
obj1.printFullName.call(obj2);

//Call : One object borrowing a Random function from Global object
printIntenseFullName.call(obj2, "papa", "ajoba");


//Apply : One object borrowing method of another object
obj1.printFullName.apply(obj2);

//Apply : One object borrowing a Random function from Global object
printIntenseFullName.apply(obj2, ["papa", "ajoba"]);


//Bind : One object borrowing method of another object
let x = obj1.printFullName.bind(obj2);
x();

//Bind : One object borrowing a Random function from Global object
let y = printIntenseFullName.bind(obj2, "papa", "ajoba");
y();