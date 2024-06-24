import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={s.header}>
      <NavLink to="/" className={s.title}>
        <h1>YOUR TURN</h1>
        <p>Car rental company</p>
      </NavLink>
      <nav className={s.navBar}>
        <NavLink className={s.nlink} to="/">
          Home
        </NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </div>
  );
};
