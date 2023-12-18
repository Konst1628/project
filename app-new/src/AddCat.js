import { useState } from "react";

export default function AddCat() {
    const[cats,setCats] = useState(["white","black"]);

    function add(){
        let catInput=document.getElementById("newcat");
        setCats([...cats,catInput.value]); //cats.push(catInput.value);
        catInput.value="";
    }
    return(
        <div>
            <ul>
                {cats.map(element=>{
                    return <li>{element}</li>;
                })}
            </ul>
            <input type="text" id="newcat" name="newcat"/>
            <button onClick={add}>Добавить кота</button>
        </div>
    );
}