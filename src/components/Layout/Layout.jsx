import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import s from './Layout.module.css';
import { Container } from '../Container/Container';

export const Layout = () => {
  return (
    <Container>
      <div className={s.layout}>
        <header>
          <p> {''}</p>
          <NavBar />
        </header>
        <main className={s.main}>
          <Outlet />
        </main>
      </div>
    </Container>
  );
};
