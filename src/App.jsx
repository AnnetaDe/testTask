import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Loader } from './components/Loader/Loader';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Home } from './pages/Home';
import { ContactsPage } from './pages/Contacts/ContactsPage.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';
import { Privat } from './routes/Private';
import { Public } from './routes/Public.jsx';
import { refreshThunk } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/auth/selectors.js';

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Privat>
            <Layout />
          </Privat>
        }
      >
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>

      <Route
        path="/login"
        element={
          <Public>
            <Login />
          </Public>
        }
      />
      <Route
        path="/register"
        element={
          <Public>
            <Register />
          </Public>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
