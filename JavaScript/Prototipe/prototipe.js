//let str="Новая строка";

const person = {
    name: 'Oleg',
    age: 25,
    greet() {
        console.log("Hello");
    }
}
/*
//person.greet();

//person.toString();

Object.prototype.sayHello=function(){
    console.log('hello');
}
let array=[1,2,3];
person.sayHello();
array.sayHello();
console.log(array);
console.log(person);



const name = {
    name: 'Ivan',
    age: 30,
    greet() {
        console.log("name");
    }
}

Object.prototype.getName=function(){
    console.log('Ivan')
}
let array=[1,45,7]
console.log(name);
console.log(array);
*/
const anna=Object.create(person);

console.log(anna);
console.log(anna.name);

anna.name="Anna";
console.log(anna.name);