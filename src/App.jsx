import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog/Catalog.jsx';
import { Favorites } from './pages/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAll, getDaily } from './redux/cars/operations.js';
import { Modal } from './components/Modal/Modal.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getDaily());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
