import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Home } from './pages/Home';
import { Catalog } from './pages/Cars/Catalog.jsx';
import { Favorites } from './pages/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { getAll, getDaily } from './redux/cars/operations.js';
import { Loader } from './components/Loader/Loader.jsx';
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Cars/Catalog.jsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getDaily());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />{' '}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
export default App;
