String.prototype.filter = function (array) {
    let str;
    for (let i = 0; i < array.length; i++) {
        str = this.replace(array[i], "");
    }
    return str;
};
console.log("This house is not nice!".filter(['not']));

Array.prototype.bubbleSort = function () {
    let array = this;
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());


function Person() {
    this.name = "john";
    this.age = 23;
    this.species = "homo sapien";

}
Person.prototype.favoriteHobby = function (hobby) {
    return "My name is " + this.name + " and my hobby is " + hobby;
}
const p1 = new Person();

function Teacher(subj) {
    this.name = p1.name;
    this.subj = subj;
}

Teacher.prototype.teach = function () {
    return this.name + " is now teaching " + this.subj;
}

const t = new Teacher("math");
const t1 = new Teacher("physics");

console.log(t.teach());
console.log(t1.teach());


const Person1 = {
    name: "bob",
    age: 23,
    species: "homo sapien",
    favoriteHobby: function (hobby) {
        return "My name is " + this.name + " and my hobby is " + hobby;
    }
}

let p2 = Object.create(Person1);
p2.name = "alex"

const Teacher1 = {
    name: p2.name,
    subj: "chemistry",
    teach: function () {
        return this.name + " is now teaching " + this.subj;
    }
}

let t2 = Object.create(Teacher1);

console.log(p2.favoriteHobby());
console.log(t2.teach());

class Person2 {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    favoriteHobby(hobby) {
        return "My name is " + this.name + " and my hobby is " + hobby;
    }
}
let p3 = new Person2('Mark', 22, 'homo sapien');

class Teacher2 {
    constructor(name, subj) {
        this.name = name;
        this.subj = subj;
    }
    teach() {
        return this.name + " is now teaching " + this.subj;
    }
}

let t3 = new Teacher2(p3.name, 'Art');

console.log(t3.teach());



class Person4{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting() {
        return "Greetings, my name is " + this.name + " and I am " + this.age + " years old."
    }
    salute () {
        return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
    }
}

let p4 = new Person4("David",32);

class Student{
    constructor(name,age,salute,major){
        this.name = name;
        this.age = age;
        this.salute = salute;
        this.major = major;
    }
    greeting() {
        return "Hey, my name is " + this.name + " and I am studying " + this.major;
    }
}

let s = new Student(p4.name,p4.age,p4.salute,"CSE");

class Professor{
    constructor(name,age,salute,department){
        this.name = name;
        this.age = age;
        this.salute = salute;
        this.department = department;
    }
    greeting() {
        return "Good day, my name is "+this.name+" and I am in the "+this.department+" department";
    }
}

let pro = new Professor(p4.name,p4.age,p4.salute,"CSE");


console.log(p4.greeting());
console.log(s.greeting());
console.log(pro.greeting());