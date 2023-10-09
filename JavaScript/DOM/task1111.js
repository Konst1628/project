/*window.addEventListener('load', function() {
	let elem = document.querySelector("div");
	elem.className = "todo";
	
	let h2 = document.createElement("h2");
	h2.innerHTML = "TO DO";
	elem.appendChild(h2);
	
	let ul = document.createElement("ul");
	elem.appendChild(ul);
	
	var massToDo = ["Swimming pool", "Yoga", "Sauna", "Volleyball"];
	console.log(massToDo);

	let massColor = ["cornsilk", "antiquewhite", "beige", "blanchedalmond"];
	
	for(let i = 0; i < massToDo.length; i++){
	let li = document.createElement("li");
	li.innerHTML = massToDo[i];
	li.style.background = massColor[i];
	ul.appendChild(li);
	}

	let h3 = document.createElement("h3");
	h3.innerHTML = "Plese, enter item";
	h3.setAttribute("style","font-size:14px; margin-top: 30px;"); 
	h3.style.color = "darkgoldenrod";
	elem.appendChild(h3);
	
	let newDiv = document.createElement("div");
	newDiv.style.display = "flex";
	elem.appendChild(newDiv);
	
	let input = document.createElement("input");
	newDiv.appendChild(input);

	
	let button = document.createElement("button");
	button.innerHTML = "add";
	newDiv.appendChild(button);
	
	
	button.onclick = function(){
		var li = document.createElement('li');
		var val = document.querySelector('input').value;

		li.innerHTML = val;
		ul.appendChild(li);
		massToDo.push(val);		
	}

}) 


h2{
	background: coral;
    color: azure;
	padding: 10px 0px;
	text-align: center;	
	margin: 0px;
	}
	.todo{
		width:300px;
		padding: 20px 20px;
		margin: 0 auto;	
		text-align: center;
	}
	ul{
		padding-left: 0px;
		margin: 0px;
	}
	li{
		background: lightblue;
		padding: 10px 10px;
		list-style-type: none;
		color:brown;
	}
	input{
    width: 80%;
	padding: 5px 0px;
    border: 2px solid coral;
	}
	button{
	width: 20%;
	border: 2px solid coral;
	} */