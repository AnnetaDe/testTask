import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const Privat = ({ children }) => {
  const isLoddedIn = useSelector(selectIsLoggedIn);
  return isLoddedIn ? children : <Navigate to="/login" />;
};
