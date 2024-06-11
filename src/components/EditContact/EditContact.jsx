import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { changeContactsOper } from '../../redux/contacts/contactsOps';

export const EditContact = contact => {
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(changeContactsOper(data));
    console.log(data);
    close();
  };
  return (
    <Formik initialValues={contact} onSubmit={submit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
        </label>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};
