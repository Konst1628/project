/*let guestList=`Guests:
*John
*Pete
*Mary
`;
alert(guestList); //список гостей, состоящий из нескольких строк

let questList= "Giests:\n *John\n * Pete\n *Mary";
alert(questList);

alert('I\'m the Walrus!');
alert(`I'm the Walrus!`);

let str="hello"; //5 символов
alert(str.length); //5

let str2= "My\n"; //3 символа. Третий перевод строки 
alert(str2.length); //3


let str="jQuery";
alert(str.charAt(0));//j

let str2 = "Я-соврменный браузер!";
alert(str2[0]); //"Я"

var str= "строка";
str=str[3]+str[4]+str[5];
alert(str);// ока


let str='Hi';
str[0]='h';
// ошибка alert
//не работает

let str='Hi';
str='h'+str[1];
alert(str[1]);
//заменяем строку alert(str);
//hi


alert("Интерфейс".toUpperCase());
//Интерфейс 

alert("Интерфейс"[0].toLowerCase());
//'и'

var str="Widget with id";
alert(str.indexOf("Widget")); //0

alert(str.indexOf("id")); //1

alert(str.indexOf("widget")); //-1

alert(str.indexOf("id",2)); //12



let str = "Widget with id";
alert(str.includes("Widget")); //true
alert("Hello".includes("Bye")); //false

alert("Midget".includes("id",3)); //false, поиск начат с позиции 3 

alert("Widget".startsWith("Wid"));
//true, "Wid" - начало "Widget"
alert("Widget".endsWith("get"));
//true, "get" - окончание "Widget"


let str = "stringify";
//'strin', символы от 0 до 5 (не включая 5)
alert(str.slice(0,5));
//'s',  от 0 до 1 (не включая 1), т.е. только один символ на позиции 0
alert(str.slice(0,1));

let str = "stringify";
alert(str.slice(2)); //ringify, с позиции 2 и до конца 

alert(str.slice(-4,-1)); //gif
//начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа 

let str = "stringify";
//для substring эти 2 примера - одинковы 
alert(str.substring(2,6)); //"ring"
alert(str.substring(6,2)); //"ring"

alert(str.substring(6,-2)); // "string" так не делать


let str = "stringify";
//для substring эти 2 примера - одинковы 

alert(str.substr(2,4)); 

alert(str.substr(-4,2)); 


let str = "Please visit Microsoft!";
let n = str.replace("Microsoft", "W3Schools");

str= "Please visit Microsoft and Microsoft!";
let n2= str.replace("Microsoft","W3Schools");

console.log(n);


const greeting = ' Hello World ';
console.log(greeting);
//" Hello world "

console.log(greeting.trim());
//"Hello world!"


let str="5";
str= str.padStart(4,0);
console.log(str);
//result is 0005

let str2="5";
str2=str2.padEnd(4,0);
console.log(str2);
//result is 5000

let importanceSkills="React,TypeSdript,CSS,HTML,JavaScript";
importanceSkils=importanceSkills.split(',')
console.log(importanceSkills);

let importanceSkills="React TypeSdript CSS HTML JavaScript",
importanceSkils=importanceSkills.split(' ')
console.log(importanceSkills);





//ПРИМЕРЫ
//Вывести список дел используя двойные кавычки и обратные
let workList=`List:
*Job
*Gym
*Supermarket
`;
alert(workList); //список дел

let workList= "List:\n *Job\n * Gym\n *Supermarket";
alert(workList);

//Данa строка js Сделать JS и наооборот
alert("js".toUpperCase());
//JS

alert("JS" .toLowerCase());
//'js'


let str="Привет,мир!"; //11 символов
alert(str.length); //11


let str="Привет,мир!";
alert(str.slice(0,6));
alert(str.slice(7,10));

alert(str.substring(0,6)); 
alert(str.substring(7,10)); 

alert(str.substr(0,6)); 
alert(str.substr(7,10));

alert(str.slice(-4, str.length-1)); 
alert(str.slice(-4, str.length)); 
alert(str.slice(str.length-4, str.length-1)); 

var str="Привет,мир!";
alert(str.indexOf("мир")); //7

let str="привет,мир!";
str=str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);
*/



let str3='var_test_text';
str3=str3.slice(0,3)+str3.charAt(4).toUpperCase()+str3.slice(5,8)+str3.charAt(9).toUpperCase()+str3.slice(10);
console.log(str3);

let str = 'я учу javascript!';
let arr = str.split('');

console.log(arr);


let str4="я учу javascript!";
console.log(str4.split(""));


let str5="я учу javascript!";
console.log(str5.split(" "));