function sum(a, b) {
    let carry = false;
    let result = "";
    while(a.length || b.length){
        let ir = Number(a.substring(a.length - 1) || 0) + Number(b.substring(b.length - 1) || 0) + (+carry);
        carry = (ir >= 10);
        result = `${ir.toString().split('')[1] || ir}${result}`;
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }

    return carry? `1${result}` : result;
}

console.log(sum('290', '100'));
//console.log([1,2,3,4,5,6].slice(0,-1));


//O(n)

const sumn = (a,b) => {
    let index = 1;
    let carryOver = 0;
    let result = [];
    while(index <= Math.max(a.length, b.length) || carryOver){
        const first = a[a.length-index] || 0;
        const second = b[b.length-index] || 0;
        const ir = Number(first) + Number(second) + carryOver;
        carryOver = Math.floor(ir/10);
        result.push(ir%10);
        index++;
    }
    return result.reverse().toString().replaceAll(',',"");
}

console.log(sumn('290', '100'));