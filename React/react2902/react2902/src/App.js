import logo from './logo.svg';
import './App.css';
import {Navigation} from "./components/Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:name" element={<Profile/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
