arr = [2,3,4,5];

console.log(arr.reduce((acc, curr) => (acc < curr ? acc = curr : acc), -1000));

Array.prototype.reducex = function(logic, init){
    let acc = init;
    for(let i = 0; i < this.length; i++){
        acc = logic(acc, this[i]);
    }
    return acc;
}

function findMin(a, b) {
    if(a < b){
        return a;
    }
    return b;
}

function findMax(a, b) {
    if(a < b){
        return b;
    }
    return a;
}

function sum(a, b) {
    return a + b;
}

console.log(arr.reducex(sum, 0));