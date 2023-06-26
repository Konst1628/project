/*let i=0;
debugger;
while (i<3) {
    // выводит 0, затем 1, затем 2
    console.log (i); i++;
}

let i=3;
while (i!=0) { 
    //когда i будет равно 0, условие станет ложным и цикл остановится
    console.log (i); i--;
}

let i=0;
debugger;
do {
    alert(i);
    i++;
} while(i<3);


for (let i=0; i<3; i++) {
    console.log("number", i);
}
for (let i=0; i<5; i++) alert(i);
let i=0; while (i!=5) {alert(i++);}



for (let i=2; i<=10; i++) {
    if (i % 2==0) {
        console.log(i);
    }
}

let sum = 0;
debugger
for (let i=0; i<=100; i++) {
    sum +=i;
}
console.log(sum);*/


/*for (let i=1; i<=10; i++) {
        console.log(i);
    }

    for (let i=20; i>=11; i--) {
        console.log(i);
    }

    for (let i=1; i<=20; i++) {
        if (i % 2==0)/*четные*/ /*(i % 2!=0) нечетные
{ console.log(i);}
}

let N = 100;
let sum = 0;
for (let i = 1; i <= N; i++) {
if (i % 2 == 0) {
sum += i
}
}
console.log(sum);

let N = 100;
let i = 1;
let sum=0;
while (i <= N)
{
if (i % 2 == 0) {
sum += i
}
i++;
}
console.log(sum);

let num = 5;
let multiplication;
for (let i = 1; i <= 10; i++) {
multiplication = num * i; 
console.log(multiplication);
}




let task;
do {
task = prompt('Введите число больше 100', '');
} while (task <= 100);

var sum = 0;
while (true) {
    var value = +prompt("Введите число", '');
    if (!value) {
        break;
    }
    sum += value;
}
alert('Сумма:' + sum);*/



let n =+prompt("Введите число");
let isPrime = true; //булевская переменная, которая отвечает за критерий простоты числа

for(let i=2; i<n; i++) {
    if(n % i==0) {
        isPrime = false;
        break;
    }
}
if(isPrime) {
    console.log(n, "- Простое число");
}
else {
    console.log(n,"- Составное число");
}