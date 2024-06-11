import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import { logOutThunk } from '../../redux/auth/operations';

export const NavBar = () => {
  const dispatch = useDispatch();
  const isLoddedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  console.log(userName);
  console.log(isLoddedIn);
  return (
    <nav className={s.navBar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>

      <button onClick={() => dispatch(logOutThunk())}>Logout</button>

      {/* <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </> */}
    </nav>
  );
};
