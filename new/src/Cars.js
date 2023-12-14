import './Cars.css';
const cars = [
    {model: 'BMW', age:'2020',color:'black'},
    {model: 'Tesla',age:'2020',color:'red'},
    {model:'Audi', age:'2020',color:'white'},
];



export default function Cars() {
    const styles = cars.map(car =>
        <div className = 'model'
        key={car.id}
          //  style={{ }}
                >     
           <div style={{color:"black", display:'flex',fontSize:'34px',margin:'20px'}}> {car.model} </div>
           <div style={{color:"red", display:'flex',fontSize:'34px',margin:'20px'}}> {car.color} </div>
           <div style={{color:"white", display:'flex',fontSize:'34px',margin:'20px'}}> {car.age}</div>
        </div>);
    return (
        <div className='model'>{styles}</div>
    );
}
