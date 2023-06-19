/*let ageUser = 18;
let countMsgs=800;
if((ageUser>=21) || (countMsgs>500)) {
    alert('Вам разрешено прикреплять файлы к сообщению');
}
else {
    alert('Вам запрещено прикреплять файлы к сообщению')
}*/



let ageUser = 18;
let countMsgs=600;
if((ageUser>=21) && (countMsgs>500)) {
    alert('Вам разрешено прикреплять файлы к сообщению');
}
else {
    alert('Вам запрещено прикреплять файлы к сообщению')
}


let value=true;
console.log(typeof value); //boolean
value=String(value); //теперь value это строка "true"
console.log(typeof value); //string

let str="123";
console.log(typeof str); //string
let num=Number(str); //становится числом 123
/*console.log(str)*/
console.log(typeof num); //number

console.log(typeof("6"/"2"));



let a=2+2;
switch(a) {
    case 3:console.log('Маловато');
    break
    case 4:console.log('В точку');
    break
    case 5:console.log('Перебор');
    break
    default:alert("Нет таких значений")
}

let arg = prompt("Введите число?");
switch (arg) {
    case '0':
        case'1':alert('Один или ноль');
        break
        case'2':alert('Два');
        break
        case 3:alert('Никогда не выполнится!');
        break
        default:alert('Неизвестное значение');

}

console.log(typeof arg);


const number = +prompt('Введиите число между 0 и 3','');
if (number===0) {
    alert('Вы ввели число 0');
}

else if(number ===1) {
    alert('Вы ввели число 1');
}

else if(number===2 || number===3) {
    alert('Вы ввели число 2, а может и 3');
}

const num = +prompt('Введиите число между 0 и 3','');
switch (num) {
    case 0:
        alert('Вы ввели число 0');
        break;
        case 1:
            alert('Вы ввели число 1');
        break;

        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
        break;

}