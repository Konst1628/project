let div = document.querySelector('div');
let h2 = document.createElement('h2');
h2.innerHTML = 'TO DO';
div.prepend(h2);

h2.style.background = "brown";
h2.style.color = "white";
h2.style.textAlign = "center";
h2.style.padding = "16px";
h2.style.margin = "0";
h2.style.display = "flex";



let ul = document.createElement('ul');
div.append(ul);


let liFirst = document.createElement('li');
liFirst.innerHTML = 'Swimming pool';
ul.prepend(liFirst);

let text1 = document.querySelector('ul');
text1.style.background = "green";
text1.style.listStyle = "none";
text1.style.fontWeight = "bold";
ul.style.margin= "0";



let liSecond = document.createElement('li');
liSecond.innerHTML = 'Yoga';
ul.append(liSecond);
let text2 = document.querySelector('li');
text2.style.background = "red";

let liThree = document.createElement('li');
liThree.innerHTML = 'Sauna';
ul.append(liThree);
let text3 = document.querySelector('li');
text3.style.background = "green";

let liFour = document.createElement('li');
liFour.innerHTML = 'Volleyball';
ul.append(liFour);
let text4 = document.querySelector('li');
text4.style.background = "green";

let h3 = document.createElement('h3');
h3.innerHTML = 'Please, enter item';
h3.setAttribute("style","font-size:14px; margin-top: 30px;");
h3.style.color = "darkgoldred";
div.append(h3);

h3.style.background = "red";


let div2 = document.createElement('div');
div.append(div2);
let input = document.createElement('input');
div2.append(input);

let button = document.createElement('button');
button.innerHTML = "add";
div2.append(button);

button.onclick = function() {
    var li = document.createElement('li');
    var val= document.querySelector('input').value;
    li.innerHTML =val;
    ul.append(li);
    
}

