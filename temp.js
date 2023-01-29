function Candidate(name, age, stream, grad, school){
    this.name = name;
    this.stream = stream;
    this.grad = grad;
    this.age = age;
    this.display = function(p){
        console.log(p.name.firstName);
        console.log(p.age);
        console.log(p.stream);
        console.log(p.school.name);
        console.log(p.grad);
    }
}

const ob = new Candidate("Ashley", 21, "stream", "grad", "someSchool");
ob.display(ob);