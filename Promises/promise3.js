let p = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if(a === 2){
        resolve('success');
    } else {
        reject('failure');
    }
});

p
.then((msg) => console.log(msg))
.catch((msg) => console.log("here",msg));