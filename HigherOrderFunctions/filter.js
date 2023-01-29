let arr = [4, 9, 16, 25, 36];

Array.prototype.filter1 = function(logic) {
    let output = [];
    for(let i = 0; i < this.length; i++) {
        const temp = logic(this[i]);
        if(temp !== null){
            output.push(temp);
        }
    }
    return output;
}

const even = function(num) {
    if(num%2 === 0){
        return num;
    }
    return null;
}

const odd = function(num) {
    if(num%2 !== 0){
        return num;
    }
    return null;
}

console.log(arr.filter1(even));

console.log(arr.filter((x) =>  ( x % 2 === 0)  ));


