import { useState } from 'react';
export default function Inut() {
    const [name, setName] = useState("Sveta");
    const [age, setAge] = useState(27);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }
    return (
        <div>
            <h3> Имя:{name}</h3>
            <h3>Возраст: {age}</h3>
            <div>
                <p>Имя:<input type="text" value={name} onChange={handleNameChange} /> </p>
                <p>Возраст: <input type="number" min="0" max="110" value={age} onChange={handleAgeChange} /></p>
            </div>
        </div>
    );

}