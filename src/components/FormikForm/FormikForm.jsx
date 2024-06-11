import s from './FormikForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { formValidation } from './formValidation';
import { useDispatch } from 'react-redux';
import { addCurrentContact } from '../../redux/contacts/slice';
import { addContactsOper } from '../../redux/contacts/operations';

export const FormikContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(addCurrentContact(values));
    dispatch(addContactsOper(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={formValidation} onSubmit={handleSubmit}>
      <Form className={s.formikForm}>
        <label htmlFor="name">
          <span className={s.labelSpan}>New Contact Name </span>
          <Field
            id="name"
            className={s.input}
            type="text"
            placeholder="Enter contact name"
            name="name"
          />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label htmlFor="number">
          <span className={s.labelSpan}>New Contact Number </span>
          <Field
            id="number"
            className={s.input}
            type="text"
            placeholder="Enter cell number"
            name="number"
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
        <button className={s.formikButton} type="submit">
          ADD Contact
        </button>
      </Form>
    </Formik>
  );
};
