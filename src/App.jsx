import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Home } from './pages/Home';
import { Catalog } from './pages/Cars/Catalog.jsx';
import { Favorites } from './pages/Favorites/Favorites.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, selectCurrentPage, selectPerPage } from './redux/cars/slice.js';
import { useEffect } from 'react';
import { getCarOper } from './redux/cars/operations.js';
import { Modal } from './components/Modal/Modal.jsx';

function App() {
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarOper({ currentPage, perPage }));
  }, [dispatch, currentPage, perPage]);


  console.log('count', count);
  console.log('currentPage', currentPage);
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
