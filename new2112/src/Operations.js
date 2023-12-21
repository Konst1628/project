import { useState } from "react";

export default function Operations() {
    const[x,setX] = useState(0);
    const[y,setY]= useState(0);
    const[operation, setOperation]= useState("+");

    function handleChangeX(event) {
        setX(+event.target.value);
    }
    function handleChangeY(event){
    setY(+event.target.value);
}
function handleChangeOperation(event) {
    setOperation(event.target.value)
}

return (
    <div>
        <input type="text" name="x" id="x" value={x} onChange={handleChangeX}/>
        <input type="text" name="y" id="y" value={y} onChange={handleChangeY}/>

        <select name="operation" id="operation" value={operation} onChange={handleChangeOperation}>
        <option value="+">Сумма</option>  
        <option value="-">Разность</option> 
        <option value="*">Произведение</option> 
        <option value="/">Частное</option> 
        </select>

<div>
    {operation === "+" &&
    <>Сумма:{x}+{y}={x+y} <br/></>
    }
    {operation === "-" &&
    <>Разность:{x}-{y}={x-y} <br/></>
    }
    {operation === "*" &&
    <>Произведение:{x}*{y}={x*y} <br/></>
    }
    {operation === "/" && y ==0 &&
    <>Деление на ноль</>
    }
    {operation === "/" && y !=0 &&
    <>Частное:{x}:{y}={x/y}</>
    }
</div>
    </div>
);
}