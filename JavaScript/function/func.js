/*function showMessage() {
    alert('Всем привет!');
}
showMessage();
showMessage();

//Глобальные переменные 
function showMessage() {
    let message = 'Всем привет!';
    alert(message);
    console.log(message);
}
//console.log(message);
showMessage();


function summa1(a,b) {
    var sum = a+b;
    return sum;
}
function summa2(a,b) {
    return a+b;
}

console.log ("summa1", summa1(1,2));
console.log ("summa1", summa1(3,8));
console.log ("summa2", summa2(1,3));




let a = prompt('Как тебя зовут?'),
    func = function (e) {
        alert(e ? `Привет, ${e}!` : 'нужно было представиться для приличия)');
    };
func(a);


function cube(){  
    var sum = prompt("Укажите число для вычисления куба: ");
    var result = sum * sum * sum;  
   
}
console.log (cube());


let userName = prompt('Как тебя зовут?');
    function showName () {
       let message = 'Привет,' + userName;
alert(message);
    }
showName();

function cube(x)
 {
     return x*x*x;
 }
 console.log(cube(2));
 console.log(cube(9));
 console.log(cube(3));*/

 let userName ='Vasya';
 function showMessage() {
     let userName = "Petya";//объявляем локальную переменную 
     let message= 'Hello,' +userName;// Petya
     alert(message);
 }
 //функция создаст и будет использовать свою собственную локальную переменную userName showMessage();
 alert(userName);
showMessage();
 //Вася, не изменилась, функция не трогала внешнюю переменную