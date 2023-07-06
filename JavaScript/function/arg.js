/*function summa(a,b=2) {
    return a+b;
}
alert(summa(3,4));//7
alert(summa(3));//5
alert(summa());//error


function summa(a,b) {
    b=b||2;
    return a+b;
}
alert(summa(3,4));//7
alert(summa(3));//5
alert(summa());//error



let user;
alert(user?? "Anonim");//Anonim(user не существует)
alert(user);

let user="Ivan";
alert(user?? "Anonim"); //Ivan (user существует)



function checkAge(age) {
    if(age>=18) {
        return true;
    }
    else {
        return confirm('А родители разрешили?');
    }
}
checkAge(10);
console.log(checkAge(20));



function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  alert(min(1,2));


  function min(a, b) {
    var min= a < b ? a : b;
    return `меньшее число $(min)`;
  }
  console.log(min(1,2));
  console.log(min(10,9));

  function pow(x,n) {
      let result=x;
    if (n<1) {
      alert(`Степень ${n} не поддерживается, используйте натуральное число`);
       return;
    } 
    else {
    for (let i=1; i<n; i++){
        result*=x;
    }
      return result;
    }
  }
  console.log(pow(2,0));
  console.log(pow(2,3));


  function varTest() {
    for (var i=0; i<3; i++);{
        console.log(i);
    }
    console.log("next",i);
  }
  varTest();

  function doSomething () {
      var myVar= 1;
      if(true) {
          var myVar=2;
          console.log(myVar);
      }
      console.log(myVar);
  }
  doSomething();


  function doSomething () {
    let myVar= 1;
    if(true) {
        let myVar=2;
        console.log(myVar);
    }
    console.log(myVar);
}
doSomething();

const PI=3.142;
PI =22/7; // Давайте изменим значение PI 
console.log(PI); // Вывод TypeError

function hoist() {
    a=20;
    var b=100;
}

hoist();
console.log(a);
console.log(b);

console.log(hoist);//вывод: underfined
var hoist= 'The variable has been hoisted';

var hoist;
console.log(hoist); //Вывод: underfined
hoist = 'The variable has been hoisted';

hoisted(); // Вывод: "This function has been hoisted"
function hoisted() {
    console.log('This function has been hoisted');
};*/

var f=function(параметры) {
    //тело функции 
};
var sayHi = function(person) {
    alert ("Привет,"+person);
};
sayHi('Вася');