/*const array=[1,2,3];
for(let i=0;i<array.length; i++) {
    console.log(i); //0,1,2
}

const array1=[1,2,3];
while(array1.length>0) {
    const elem=array1.shift();
    console.log(elem); //1,2,3
}

const array2=[1,2,3];
do {
    const elem=array2.shift();
    console.log(elem); //1
}
while(array2.length>5);

const array3=['a','b','c'];
array3.forEach(element=>console.timeLog(element));

array3.forEach(function(element) {
    console.log(element);
})


let items=["item1","item2","item3"];
let copyItems= [];//before

for(let i=0; i<items.length;i++) {
    copyItems.push(items[i]);
} //after
items.forEach(item=>{copyItems.push(item);});
console.log(copyItems);

let array=[1,2,3];
let newArray= [];

array.forEach(item=>{newArray.push(item**2)});
console.log(newArray);



let array2=[1,2,3,4,5];
let sum= 0;

array2.forEach(item=>{sum+=item;});//sum=sum+item
console.log(sum);

let arr=[1,2,15];
arr.sort(); //arr.sort(a,b)=>a-b);
alert(arr); //1,15,2
arr.sort((a,b)=>a-b);//b-a


let arr=[3,4,1,2,7];
arr.sort(); 
alert(arr); 

let arr1=[1,15,2];
arr1.sort((a,b)=>b-a); 
alert(arr1); 

const array1= [5,12,8,130,44];
const found1=array1.find(element=>element>10);
console.log(found1);

const array2= [5,12,8,130,44];
const found2=array2.findLast(element=>element>45);
console.log(found2);


const array1= [5,12,8,130,44];
const isLargeNumber=element=>element>13;
console.log(array1.findIndex(isLargeNumber));//13

const array1= [5,12,8,130,44];
const isLargeNumber=element=>element>13;
console.log(array1.findLastIndex(isLargeNumber));//4


const words = ['spray','limit','elite','exuberant','destruction','present'];
const result =words.filter(word=>word.length>6);
console.log(result);
*/

let array1=[1,4,9,16];
let map1=array1.map(x=>x*2);
console.log(map1);

//ДЗ с помощью фильтра делать