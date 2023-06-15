var year=2015
if(year!=2017) {
    console.log('А вот...');
    console.log('и не правильно!');
}


var years=prompt('Введите год появления стандарта ECMA-262 5.1',2015);
if(years==2011){
    alert('Да вы знаток!');
}

else {
    alert ('А вот и неправильно!');
}


var shoppingDone = false;
if(shoppingDone===true) {
    var childsAllowance=10;
}

else{
    var childsAllowance = 5;
}

console.log(childsAllowance);


var year=prompt('В каком году появилась ECMA-262 5.1','');
if(year<2011){
    alert('Это слишком рано');
}

else if (year>2011) {
    alert ('Это поздновато!');
}

else {
    alert ('Да, точно в этом году!');
}

var access;
var age=prompt('Сколько вам лет?');
/*if(age>18)
{
    access=true;
}

else{
    access=false;
}
alert(access);*/


access=age>18?true:false;
alert(access);