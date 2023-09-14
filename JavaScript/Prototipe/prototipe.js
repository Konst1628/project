//let str="Новая строка";

//const person = {
 //   name: 'Oleg',
 //   age: 25,
//    greet() {
//        console.log("Hello");
 //   }
//}
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

const anna=Object.create(person);

console.log(anna);
console.log(anna.name);

anna.name="Anna";
console.log(anna.name);

const parent = {
    name:'Stacey',
    age:35,
    heritage:'Irish'
}

const child= Object.create(parent);
console.log(child);
console.log(child.name);
child.name='Ryan';
child.age=7;
console.log(child.name);//Ryan
console.log(child.age); //7
console.log(child.heritage); //Irish
*/

let animal = {
    name: 'Animal',
    color: 'white',
    class: 'pats',
    showInfo() {
        console.log(`Меня зовут ${this.name}, мой цвет ${this.color},мой класс ${this.class}.`);
    }
}

let cat= Object.create(animal);
cat.name='Barsik';
cat.color='Gray';

let dog= Object.create(animal);
dog.name='Sharik';
dog.color='black';

cat.showInfo();
dog.showInfo();

dog.show=function(){
    console.log("hi");
}

dog.show();

