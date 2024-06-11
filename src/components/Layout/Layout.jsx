import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import s from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';

export const Layout = () => {
  const userName = useSelector(selectUserName);

  return (
    <div className={s.layout}>
      <header>
        <p>Hello, {userName}</p>
        <NavBar />
      </header>

      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
