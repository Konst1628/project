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

let book= [
    {name: "Богатый папа, бедный папа"},
    {author: "Роберт Кийосаки"},
    {pages: "330"},
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


let book = {
    name: "Богатый папа, бедный папа",
    author: "Роберт Кийосаки",
    pages: "330",

    sayInfo() {
        console.log("Name:" + this.name);
        console.log("Author:" + this.author);
        console.log("Pages:" + this.pages);
    }
};
book.sayInfo();

*/

/*----------------------*/
/*
let people= [
    {name: "John", age:30},
    {name: "Bob", age:21},
    {name: "Alice", age:19},
];

function getBob(people){
    let result= {};
    for (let i=0; i<people.length; i++){
        if (people[i].name=="Bob") {
            result = Object.assign({}, people[i]);
        }
    }
    return result;
}

let p = people.filter(person=>person.name=="Bob");
console.log(p);
console.log(getBob(people));
*/
/*----------------*/
/*
let people= [
    {name: "John", age:30},
    {name: "Bob", age:21},
    {name: "Anna", age:19},
];
function getWithoutAnna(people){
 
    for (let i=0; i<people.length; i++){
        if (people[i].name=="Anna") {
        people.splice(i,1);
        }
    }
  /*return people;}*/
/*
getWithoutAnna(people);
console.log(people);
console.log(people.filter(person=>person.name!=='Anna'));

----------------
let people= [
    {name: "John", age:30},
    {name: "Bob", age:25},
    {name: "Anna", age:18},
];

people.sort((a, b) => {
    return a.age - b.age;
})
    console.log(people)

/*people.sort(function(age);

var litmir = [
    {author:'Хэленка', title:'Улетела сказка'},
    {author:'Коул Кресли', title:'Восстание Аркан'},
    {author:'Райчел Мид', title:'Золотая лилия'}
];
propertyValue(litmir, 'title'); // Улетела сказка, Восстание Аркан, Золотая лилия
propertyValue(litmir,'author'); //Хэленка,Коул,Кресли,Райчел Мид

function propertyValue(array,key){
 
    for (let i=0; i<array.length; i++){
        let obj = array[i];
        for(let k in obj) {
            if(k==key){
                console.log(obj[k]);
        }
    }
}
}

const userData = {
    name: "John",
    age: 25,
    isOnline: true
}
console.log(Object.values(userData)); //возвращает ["John",25,true]

const userData = {
    name: "John",
    age: 25,
    isOnline: true
}
console.log(Object.entries(userData)); //возвращает [["name","John",["age",25],["isOnline",true]]

const person = {
    name: "James",
    age: 28,
    available: false
}
console.log(Object.keys(person));
//возвращает:["name",age available]

const person = {
    name: "Alex",
    age: 35,
    available: true
}
//Заморозка объекта
Object.freeze(person);
console.log(person);

const userData = {
    name: "Brad",
    age: 28,
    isOnline: false}
    Object.seal(userData);
    console.log(userData);

    //определяет, одинаковы ли два значения

   console.log(Object.is(50,50)); //истинно
   console.log(Object.is('foo','bar')); //ложно
   console.log(Object.is(foo,foo)); //истинно


   //сравнение объектов

//создается 1 объект
const book={title:'Дюна'}
//создается другой объект
const anotherBook={title:'Дюна'}
console.log(book===anotherBook) //false
console.log(Object.is(book,anotherBook));


//создается 1 объект
const book={title:'Дюна'}
// в anotherBook записывается ссылка на объект
const anotherBook=book
console.log(book===anotherBook) //true
console.log(Object.is(book,anotherBook));


let user = {name:"John",
sizes:{height:182,
width:50
}
};
let clone=Object.assign({},user);
console.log(user);
console.log(clone);
user.name="Lena";
console.log(user.name);
console.log(clone.name);
user.sizes.height=200;
console.log(user.sizes.height);
console.log(clone.sizes.height);

// глубокое клонирование
let objects = 
{name:"John",
sizes:{height:182,
width:50
}
};
let deep=structuredClone(objects);
console.log(objects.sizes.height);
console.log(deep.sizes.hight);

objects.sizes.height=183;

console.log(objects.sizes.height);
console.log(deep.sizes.hight);

deep.sizes.height=184;

console.log(objects.sizes.height);
console.log(deep.sizes.heihgt);


let user={};
//alert(user.ddress.street);// Ошибка!
alert(user?.address?.street); // undefined(без ошибки)

let userAdmin={
    admin(){
        alert("Я админ");
    }
};
let userGuest={};
userAdmin.admin?.();// Я админ
userGuest.admin?.()//ничего не произойдет (такого метода нет)


let key="firstName";
let user1={firstName:"John"};
let user2=null;
alert(user1?.[key]); //John
alert(user2?.[key]); //undefined


function User(name) {
    this.name=name;
    this.sayHi = function() {
        alert("Меня зовут:" + this.name);};
    }
    let john = new User("John");
john.sayHi(); 

    let anya = new User("Anya");
    anya.sayHi();// Меня зовут:Anya

    let john2 = {
        name: "John",
        sayHi() {
        alert("Меня зовут:" + this.name);
        }
    }
let anna= {
            name: "Anna",
            sayHi() {
            alert("Меня зовут:" + this.name);
            }
        }
john2.sayHi();
            anna.sayHi();



            function Hero(name="Герой"){
                this.name=name;
                //this.name=name||"Герой";
            }

            let Ivan = new Hero("Иван");
            let Hto_to= new Hero();

            alert(Ivan.name); // Иван 
            alert(Hto_to.name); // Герой


            function myCar(name) {
                this.name=name;
                this.make = function() {
                  };
                }
            newCar.make(); 


            let newCar = {
                make: "Eagle",
                model: "Talon TSi",
                year: "1993",

                make() {
                console.log("myCar" + this.name);
                }
            }

/*
           function Car(make,model,year) {
                this.make=make;
                this.model=model;
                this.year=year
                    console.log(mycar.make);
                }

              let newCar = {
                    make: "Eagle",
                    model: "Talon TSi",
                    year: "1993",*/
/*      
      function Car(make,model, year) {
          this.make=make;
          this.model =model;
          this.year=year;
      }

  let newCar = new Car("Eagle", "Talon TSi","1993");
  console.log(newCar.model)//make,year//);

function Calculator(a,b){
this.a=a,
this.b=b,
this.add=function(){
return this.a+this.b;
},
this.sub=function(){
return this.a-this.b;
},
this.mul=function(){
return this.a*this.b;
},
this.div=function(){
return this.a/this.b;
},
this.degree=function(){
return this.a**this.b;
}
}
let calculator = new Calculator(11,5);
console.log(calculator);

console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.mul());
console.log(calculator.div());
console.log(calculator.degree());

function Calculator(a,b){
this.a=a,
this.b=b,
this.add=()=>this.a+this.b,
this.sub=()=>this.a-this.b,
this.mul=()=>this.a*this.b,
this.div=()=>this.a/this.b};
 
let calculator=new Calculator(11,5);

console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.mul());
console.log(calculator.div());   


function Calculator(){
this.add=function(a,b) {
return a+b;
}
this.sub=function(a,b) {
return a-b;
}
this.mul=function(a,b) {
return a*b;
}
this.div=function(a,b) {
return a/b;
}
}
let calculator=new Calculator();
 
console.log(calculator.add(12,2));
console.log(calculator.sub(9,5));
console.log(calculator.mul(10,9));
console.log(calculator.div(5,1));


//Стрелочная функция//
function Calculator(){
this.add=(a,b)=>a+b;
this.sub=(a,b)=>a-b;
this.mul=(a,b)=>a*b;
this.div=(a,b)=>a/b;
}
 
let calculator=new Calculator();
 
console.log(calculator.add(12,2));
console.log(calculator.sub(9,5));
console.log(calculator.mul(10,9));
console.log(calculator.div(5,1));

//Свойство объект//

let newAuthor = {
    name: "Сергей",
    surname: "Петров"
};
let book = {
    "main title": "Новая книга",
    author: newAuthor
}

console.log(book.author);
console.log(book.author.name);
*/

function Person(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}
let rand=new Person("Rand McKinnon",33,"M");
let ken=new Person("Ken Jones",39,"M");
console.log(rand.name,rand.age,rand.sex);

function Car(make,model,year,owner) {
    this.make=make;
    this.model=model;
    this.year=year;
    this.owner=owner;
    this.displayCar=displayCar;
}
var car1=new Car("Eagle","Talon Tsi",1993,rand);
var car2 =new Car("Nissan","300ZX",1992,ken);

console.log(car2.owner);
console.log(car2.owner.name);

function displayCar(){
    let result= "A Beautiful " + this.year + " " +
    this.make + " " + this.model;
    console.log(result);
}


car1.displayCar();
car2.displayCar();