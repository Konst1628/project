/*import logo from './logo.svg';
import './App.css';*/
import MyButton from "./MyButton";
import AboutPage from "./AboutPage";
import ImageObj from "./ImageObj";
export default function App() {
  let content;
  let isLoggegId=false;

  if(isLoggegId) {
    content= <MyButton/>;
  } else {
    content=<ImageObj/>;
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>
     <div> {content}</div>
    </div>
    
    
  );
}

//export default App;
