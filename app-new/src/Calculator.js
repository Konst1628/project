import { useState } from "react";

export default function Calculator() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function calculate() {
        let inputX = document.getElementById("x");
        let inputY = document.getElementById("y");

        setX(+inputX.value);
        setY(+inputY.value);
    }
    return (
        <div>
            <input type="text" name="x" id="x" />
            <input type="text" name="y" id="y" />
            <button onClick={calculate}>Посчитать</button>
        <div>
        Сумма: {x} +{y}={x+y} <br />
    Разность: {x} -{y}={x-y} <br />
    Произведение: {x}* {y}={ x * y } <br />
    {
        y === 0 &&
        <>
            {/*аналог оператора if*/}
            <span>Деление на ноль</span>
        </>
    }
    { y !== 0 &&
        <span> Частное: {x}:{y}={x / y}</span>
    }
</div >
</div >
    );
}