import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CarItem } from './components/CarItem/CarItem.jsx';
import { Layout } from './components/Layout/Layout';
import { Catalog } from './pages/Catalog/Catalog.jsx';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound/NotFound.jsx';
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
        <Route path="catalog/:carId" element={<CarItem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
