let arr = [4, 9, 16, 25, 36];

function square (num) {
    return num * num;
}

function squareRoot (num) {
    return Math.sqrt(num);
}

function cubeRoot (num) {
    return Math.cbrt(num);
}

Array.prototype.map1 = function(operation) {
    let output = [];
    for(let i = 0; i < this.length; i++){
        output.push(operation(this[i]));
    }
    return output;
}

console.log(arr.map1(squareRoot));

console.log(arr.map(x => Math.sqrt(x)));