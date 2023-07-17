/*let arr = new Array();
let arr=[];

//разные типы значений 
let arr= ['Яблоко', {name: 'Джон'}, true, function(){alert('привет');}];
//получить элемент с индексом 1(объект) и затем показать его свойство
console.log(arr[0]); //Яблоко


let fruits = ["Яблоко","Апельсин", "Слива"];
console.log (fruits[0]); //Яблоко
console.log (fruits[1]); //Апельсин
console.log (fruits[2]); //Слива
console.log (fruits[3]); //undefined


fruits[2]= 'Груша'; // теперь Яблоко, Апельсин, Груша
fruits[3] = 'Лимон'; //теперь Яблоко, Апельсин, Груша, Лимон

let fruits2 =["Apple", "Orange", "Plum"];
alert(fruits2[fruits2.length-1]); //Plum

let fruits3 =["Apple", "Orange", "Plum"];
alert(fruits3.at(-1)); //Plum
console.log(fruits3.length);

let  fruits = ["Яблоко","Апельсин", "Груша"];
alert(fruits.pop()); // удаляем "Груша" и выводим его 
alert (fruits); //Яблоко, Апельсин */

let fruits=["Яблоко","Апельсин"];
fruits.push("Груша");
alert(fruits);//Яблоко,Апельсин, Груша 

let fruits = ["Яблоко","Апельсин", "Слива"]
alert(fruits.length);//3

let arr=[];
arr[1000]= true;
alert(arr.length); //1001