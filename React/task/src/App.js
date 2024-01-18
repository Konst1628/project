import logo from './logo.svg';
import './style.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import MainPage from './MainPage';
import img from './snan3.jpg';


function App() {
  return (
    <BrowserRouter>
    <Routes>    
      <Route path="/" element={<MainPage/>}>
        <Route index element={<div>Products:
          <ul>
    <li> MackBook</li>
      <li>Honor</li>
      <li>Lenovo</li>
      <img src={img} className="img" alt="img"/>
</ul>
        </div>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
