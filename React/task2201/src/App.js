import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Car from './Car/Car';


/* task №1
export default function App() {
  const[age,setAge] = useState(18)
  const[num,setNum] = useState(0)

  function handleAge() {setAge(age+1)}
  function handleNum() {setNum(num+1)}

 return(
   <>
   <p>Мне {age} лет.</p>
   <p>У меня {num} братьев и сестер</p>
   <button onClick={handleAge}>Стать Старше!</button>
   <button onClick={handleNum}>Больше братьев и сестер!</button>
   </>
 )
 }
*/


/*task№2*/

function App() {
  let [cars, setCars] = useState([
    { name: 'Ford', year: 2018, id: 0 },
    { name: 'Audi', year: 2016, id: 1 },
    { name: 'Mazda', year: 2018, id: 2 },
  ]);
  let [toggle, setToggle] = useState(false);

  const[form,setForm] = useState({
    id:" ",
    name:" ",
    year:" ",
  });

  function handleChange(index, event) {
    cars[index].name = event.target.value;
    setCars([...cars]);
  }

  function removeItems(index) {
    let id = index;
    console.log(index);

    let newCars = cars.filter(function (car) {
      return +car.id !== id;
    });
    setCars([...newCars]);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let car = {
      name: form.name,
      year: form.year,
      id: form.id
    }
    setCars([...cars, car]);
  }

  function handleIdChange(event) {
    setForm({ ...form, id: event.target.value });
  }

  function handleNameChange(event) {
    setForm({ ...form, name: event.target.value });
  }

  function handleYearChange(event) {
    setForm({ ...form, year: event.target.value });
  }


  const divStyle = {
    textAlign: 'center'
  }
  let carsNew = '';
  if (toggle) {
    carsNew = cars.map((car, index) =>
      <Car key={index} name={car.name} year={car.year}
        onDelete={() => removeItems(index)} onChangeName={(event) => handleChange(index, event)} />
    )
  }
  return (

    <div style={divStyle}>
      <h1>React components</h1>
      <form onSubmit={handleFormSubmit}>
        <input value={form.name} type="text" onChange={handleNameChange}></input>
        <input value={form.year} type="text" onChange={handleYearChange}></input>
        <input value={form.id} type="text" onChange={handleIdChange}></input>
        <button type="submit" class="btn btn-primary">Добавить</button>
      </form>
      <button onClick={() => setToggle(!toggle)}>Toggle cars</button>
      {carsNew}
    </div>



  );
}

export default App;