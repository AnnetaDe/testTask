import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="flex w-full h-full items-center justify-between">
      <NavLink to="/" className="pr-1">
        Logo
      </NavLink>
      <nav className="flex gap-8 mx-auto">
        <NavLink className="hover:text-hover-red" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-hover-red" to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};
