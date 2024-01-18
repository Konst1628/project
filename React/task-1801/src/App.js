import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {PageOne,PageTwo} from './Components/Pages';
import {MainPage} from './MainPage';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}>
        <Route index element={<div>No page is selected.</div>}/>
        <Route path="one" element={<PageOne/>}/>
        <Route path="two" element={<PageTwo/>}/>
        <Route path="three" element={<Blog/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
