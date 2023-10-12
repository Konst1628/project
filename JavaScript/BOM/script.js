var a=1;

//console.log(some);
console.log('a' in window);
console.log(window);
console.log(navigator);
console.log(screen);
let button1 = document.querySelector('.button_1');
button1.addEventListener('click', close);

let button2 = document.querySelector('.button_2');
//button2.addEventListener('click', open);
button2.onclick = function() {
		window.open("https://puzzleweb.ru/", "popup", "height=400", "width=400", "scrollbars=yes");
}

function close() {
	window.close();
	//window.print();
}