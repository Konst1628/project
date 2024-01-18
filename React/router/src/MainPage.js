import { Link, Outlet } from 'react-router-dom';

export default function MainPage() {
    return(
    <>
  <nav>
    <ul>
    <li>
        <Link to="/">Номе</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  <hr />
  <Outlet />
 </>

);
} 
