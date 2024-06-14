import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav className={s.navBar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};
