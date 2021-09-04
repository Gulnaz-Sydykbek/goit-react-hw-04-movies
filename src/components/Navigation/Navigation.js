import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  const { link, activeLink } = s;

  return (
    <header>
      <nav>
        <NavLink exact to="/" className={link} activeClassName={activeLink}>
          Home
        </NavLink>

        <NavLink to="/movies" className={link} activeClassName={activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
