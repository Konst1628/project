import { Link, Outlet } from 'react-router-dom';

export default function MainPage() {
    return(
    <>
  <nav>
    <ul>
    <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
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
