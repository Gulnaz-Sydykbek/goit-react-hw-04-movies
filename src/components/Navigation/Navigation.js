import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
