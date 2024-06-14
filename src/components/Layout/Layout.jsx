import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={s.layout}>
      <header>
        <p>Hello, {''}</p>
        <NavBar />
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
