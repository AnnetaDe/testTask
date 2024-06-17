import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Home } from './pages/Home';
import { Catalog } from './pages/Cars/Catalog.jsx';
import { Favorites } from './pages/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from './redux/cars/operations.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}
export default App;
