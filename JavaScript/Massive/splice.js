/*let arr=["Я","изучаю","JavaScript"];
arr.splice(1,1); //начиная с индекса 1, удалить 1 элемент
alert(arr);//остальось ["Я","JavaScript"]; 

let arr=["Я","изучаю","JavaScript","прямо","сейчас"];//удалить 3 первых элемента и заменить их другими
arr.splice(0,3,"Давай","танцевать"); 
alert(arr);//теперь ["Давай","танцевать","прямо","сейчас"]; 

let arr=["Я" изучаю","Javadscript"];
// с индекса 2
// удалить 0 элементов
// вставить "сложный" "язык"
arr.splice(2,0, "сложный","язык")
alert(arr);
//Я изучаю сложный язык JavaScript



let arr=["t","e","s","t"];
alert(arr.slice(1,3)); //e,s(копирует с 1 до 3)
alert(arr.slice(-2)); //s,t(копирует с -2 до конца)

//1
let arr= ["1","2","3","4","5"];
arr.slice("0","3"); 
alert(arr.slice ("0","3"));
//2
let arr= ["1","2","3","4","5"];
arr.slice("-2"); 
alert(arr.slice ("-2",));

//3
      //   0   1   2   3   4
let arr= ["1","2","3","4","5"];
arr.splice(1,2); 
alert(arr);

//4
let arr= ["1","2","3","4","5"];
arr.splice(0,1); 
alert(arr);
//5

let arr= ["1","2","3","4","5"];
arr.splice(3,0,"a","b","c")
alert(arr);
*/
//6
let arr= ["1","2","3","4","5"];
arr.splice(0,1,"a","b",6,0,"c",8,0,"e")
alert(arr); // не правильно
