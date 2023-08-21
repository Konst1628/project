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
alert (fruits); //Яблоко, Апельсин 

let fruits=["Яблоко","Апельсин"];
fruits.push("Груша");
alert(fruits);//Яблоко,Апельсин, Груша

let fruits = ["Яблоко","Апельсин", "Слива"];
alert(fruits.length);//3

let arr=[];
arr[1000]= true;
alert(arr.length); //1001 


let fruits = ["Яблоко","Апельсин", "Груша"];
alert(fruits.shift());//удаляем Яблоко и выводим его 

alert(fruits); //Апельсин, Груша


let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');

alert(fruits); //Яблоко,Апельсин, Груша

var arr=[];
alert(arr);
for(i=0;i<10;i++)
{
    arr[i] =i+1;
}
console.log(arr); //[1,2,3,4,5,6,7,8,9,10]

var arr = ["Яблоко","Апельсин","Груша"];
for(i=0; i<arr.length;i++)
{
    alert(arr[i]);
}


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

alert(matrix[1][1]);//5, центральный элемент

const array1= ['a','b','c'];
const array2= ['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);
 

const array1= ['one','two','three'];
console.log('array1:', array1);
const reversed=array1.reverse();
console.log('reversed:',reversed);*/

const elements=['Fire', 'Air', 'Water'];
console.log(elements.join()); // Fire,Air,Water
console.log(elements.join('')); // FireAirWater
console.log(elements.join('-')); // Fire-Air-Water