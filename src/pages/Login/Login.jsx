import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import s from './Login.module.css';
import { loginThunk } from '../../redux/auth/operations';
// ann@ann.com
export const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = values => {
    dispatch(loginThunk(values));
  };
  return (
    <div className={s.loginPage}>
      <div>
        <div>
          <h1>Login now!</h1>
        </div>
        <div className={s.formik}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className={s.field}>
                <label htmlFor="email">
                  <span>Email</span>
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  autoComplete="off"
                />
              </div>
              <div className={s.field}>
                <label htmlFor="password">
                  <span>Password</span>
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="off"
                  required
                />
                <label>
                  <Link to="/register" name="register" id="register">
                    No account? Lets create it!
                  </Link>
                </label>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
