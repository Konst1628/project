import {useState} from 'react';
export default function ChangeNameSpread() {
    const[user,setUser] = useState({name:"Дарья", age:36});

    function handleNameChange(event) { 
        setUser({...user,name: event.target.value}); //изменение объекта с помощью spread-оператора
    
    }
    function handleAgeChange(event) {
        setUser({...user, age:event.target.value});
    }
    return(
        <div>
            <h3>Имя: {user.name}</h3>
            <h3>Возраст: {user.age}</h3>
        <div>
        <p>Имя:<input type="text" value={user.name} onChange={handleNameChange} /> </p>
        <p>Возраст: <input type="number" min="0" max="110" value={user.age} onChange={handleAgeChange} /></p>
        </div>
        </div>
    
    );
}