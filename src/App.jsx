import './App.css';

import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { getAll, getDaily } from './redux/cars/operations.js';
import { Loader } from './components/Loader/Loader.jsx';
import { Layout } from './components/Layout/Layout.jsx';
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getDaily());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Layout />
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
