import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div>
      <nav className={s.navBar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </div>
  );
};
