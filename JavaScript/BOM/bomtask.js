console.log('plugins' in navigator);

let openedWindow;
let button2 = document.querySelector('.button_2');
let button1 = document.querySelector('.button_1');
//button2.addEventListener('click', open);

button2.onclick = function openWindow()  {
		openedWindow = window.open("https://itstep.org/", "popup", "height=640", "width=480", "scrollbars=yes");
}

  button1.onclick = function openWindow()  {
    openedWindow.close();
}

let languages = navigator.languages;

for(let i=0; i<languages.length; i++) {
    let span = document.createElement('span');
    document.body.append(span);
    span.innerHTML=languages[i];
    span.style.padding= "10px";
    if(i==1) {
        span.style.fontWeight = 900;
    }
}