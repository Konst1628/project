import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => (
    <>
        <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <div className='navbar-brand'>
                Поиск
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to="/" className="nav-link"> Главная</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" className="nav-link">Информация</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/profile/:name" className="nav-link">Profile</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
)