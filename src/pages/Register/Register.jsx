import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import s from './Register.module.css';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const handleSubmit = values => {
    console.log(values);
    dispatch(signUpThunk(values));
  };
  return (
    <div className={s.loginPage}>
      <div>
        <div>
          <h1>Register now!</h1>
        </div>
        <div className={s.formik}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className={s.field}>
                <label htmlFor="name">
                  <span>Name</span>
                </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  autoComplete="off"
                />
              </div>

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
                  <Link to="/login" name="register" id="register">
                    Do u have an account? Lets login!
                  </Link>
                </label>
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
