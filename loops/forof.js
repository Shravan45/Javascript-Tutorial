arr = [1,2,"pingu", a = { id: 1, name: "bleh" }, {what: "trash"}, b = [100,200,"awes"], ['c','b','a'] ];

for(const x in arr){
    console.log(x);
    //console.log(arr[x]);
    console.log("===============")
}

console.log(arr.indexOf({ id: 1, name: "bleh" }));