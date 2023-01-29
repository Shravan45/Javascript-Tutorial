//rest: pass seperate values as argument and recieve one single array as a parameter.
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");


//spread : passing an array as an argument and recieve seperated elements as parameters
// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
return `${firstName} ${lastName} runs ${company}`;
}
  
// Use spread to expand an array’s items into individual arguments:
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);


// Merge two arrays
const array1 = ["Vijendra","Singh"];
const array2 = ["Singh", "Shakya"];
const array3 = [...array1, ...array2];
console.log("here", array3);