var n = 123; //  целое число
n = 12.345 // дробное число 
var b = 1/0; //infinity - бесконечность
var c = "Число"/2; //NaN not a number (не является числом)
alert(n);

var str="Мама мыла раму";
var s='Одинарные кавычки тоде подойдут';
var letter='a';


var checked = true; //истина
var notchecked = false; // не совсем истина


var user ={
    name: "Вася",
    sex: "Мужской",
    height: 180,
    weight: 60.6
};


var age =null;
alert(age); //выведет null
age =10;
alert(age);//выведет 10

//Неизвестное -undefined
var x;
alert(x); //выведет undefined
x=10;
alert(x);// выведет 10

//Большое целое число - BigInt
const brigint = 123456789012345678901234567890n;

//typeof
console.log(typeof 'Students Lab'); //string
console.log(typeof true);//boolean
console.log(typeof underfined); //underfined
console.log(typeof Symbol()); // symbol
console.log(typeof{}); // object

console.log(typeof []); // object
console.log(typeof null); //object
console.log(typeof function(){})//function