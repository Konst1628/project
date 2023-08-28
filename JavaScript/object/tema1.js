/*let a = [1,2,3,4,5];

for(let key in a){
    //key - имя свойства(поля)
    //user[key] -значение свойства(поля)
    console.log(key, a [key]);
}


var User = {
    width: 80,
    height:200,
    name: "Вася"
}
console.log(User)

//Обращение к полям
var w = User.width;
console.log(User);
console.log(User.wigth);
console.log(User["width two"]);

//или
var w = User["width"];


User.width = 120;
console.log(User);
User.surname= "Петров";
console.log(User);

let user= {// объект
name: "John", // под ключом "name хранится значение "John"
age:30// под ключом age хранится значение 30
};
console.log(user);
delete user.age;
console.log(user);

let user2={name:"John", age:30};
alert("age" in user2);//true,user.age существует
alert("blabla" in user2); //false user.blabla не существует

let user = {
    name: "John",
    age:30,
    isAdmin:true
};
for (let key in user) {// ключи
    alert(key);//name,age, isAdmin
    //значения ключей
    alert(user[key]);// John,30,true
}

//посчитать сумму свойств
let salaries = {
    John:100,
    Ann:160,
    Pete:130
};
let sum=0;
for(let key in salaries) {
    sum+=salaries[key];
}

alert(sum)


let user= {};
    user.name = "John",
    user.surname = "Smith", 
    console.log(user);
    user.name = "Pete";
    console.log(user);
    delete user.name;
    console.log(user);
   

    //Пусть дан объект с ЗП сотруднитков

    let salaries={
        John:100,
        Ann:160,
        Pete:130
    };
 

let max = -Infinity;
for(let key in salaries) {
    max=salaries[key]>max ? salaries[key]: max;
}
//или
for(let key in salaries) {
   if (salaries[key]>max)  {
       max=salaries[key];
}
}
alert(max); //160

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
for (let key in menu) {
    if (typeof menu[key] == 'number') {
        menu[key] *= 2; // menu[key]*2=menu[key]*2
    }
}
console.log(menu);


let user= {
    name:"John",
    sizes: {
        height:182,
        width:50
    }
};
console.log(user.sizes.height);//182



let str= "hello";
let str2 = str;
console.log(str);
console.log(str2);

str= "привет";
console.log(str);
console.log(str2);


let user = {name: "Ivan"};
let user2 = user;

console.log(user);
console.log(user2);

user.name= "Petr";

console.log(user);
console.log(user2);

user2.name="Oleg";

console.log(user);
console.log(user2);

let user = {name: "John", age:30};
let clone= Object.assign({},user);

console.log(user);
console.log(clone);

user.name = "Lena";

console.log(user);
console.log(clone);


const user= {name:"Иван"};
user.name= "Вася";
console.log(user.name);//Вася

user={surname:"Сидоров"}; //Ошибка


const catVasya= {
    name:'Вася',
    age: 2,
    color: 'рыжий',
    weight:3,
    mew:function(){
        console.log('мяу-мяу');
    }
};
catVasya.mew();//вызов метода


const catVasya = {
    name: 'Вася',
    age:2,
    color: 'рыжий',
    weight:3,
    mew:function(){
        console.log('мяу-мяу');
    },
    sayName(){
        console.log('Привет, я кот' +this.name);
    }
};
catVasya.sayName()



const catVasya = {
    name: 'Вася',
    age:2,
    color: 'рыжий',
    weight:3,
    mew:function(){
        console.log('мяу-мяу');
    },
    sayName(){
        console.log('Привет, мне ' +this.age);
        console.log('Привет, я ' +this.color);
        console.log('Привет, мой ' +this.weight);
    }
};
catVasya.sayName()

let person = {
    name: "John",
    age:30,
    city: "New York",
    phone:"123-456-7890"
};
function showPersonInfo(person) {
    console.log("Name:" +person.name);
    console.log("Age:" +person.age);
    console.log("City:" +person.city);
    console.log("Phone:" +person.phone);
}
showPersonInfo(person);


let person = {
    name: "John",
    age: 30,
    city: "New York",
    phone: "123-456-7890",

    sayInfo() {
        console.log("Name:" + this.name);
        console.log("Age:" + this.age);
        console.log("City:" + this.city);
        console.log("Phone:" + this.phone);
    }
};
person.sayInfo();

let people= [
    {name: "John", age:30},
    {name: "Bob", age:25},
    {name: "Alice", age:28},
];

function getNames(people){
    let result= [];
    for (let i=0; i<people.length; i++){
        if (people[i].age>25) {
            result.push(people[i].name);
        }
    }
    return result;
}
console.log(getNames(people));
*/

let people= [
    {name: "John", age:30},
    {name: "Bob", age:25},
    {name: "Alice", age:28},
];

function getNames(people){
    let result= [];
    for (let i=0; i<people.length; i++){
        if (people[i].age>25) {
            result.push(people[i].name);
        }
    }
    return result;
}
console.log(people.length);


function User(name) {
    this.name = name;
    this.sayHi= function() {
        alert( "Меня зовут:" +this.name);
    };
}
let john = new User("John");
john.sayHi();// Меня зовут John

let anya = new User("Anya");
anya.sayHi();// Меня зовут Anya

let masha = new User("Masha");
masha.sayHi();// Меня зовут Masha
