import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  return (
    <>
      <header className="h-[72px] py-6 px-16 mx-auto border-b border-g3">
        <NavBar />
      </header>{' '}
      <main className="">
        <div className="flex flex-col min-h-[calc(100vh-72px)]">
          <Outlet />
        </div>
      </main>
    </>
  );
};
