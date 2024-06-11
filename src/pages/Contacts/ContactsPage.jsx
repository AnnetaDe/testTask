import { useEffect } from 'react';
import { FormikContactList } from '../../components/FormikContactList/FormikContactList';
import { FormikContactForm } from '../../components/FormikForm/FormikForm';
import { FormikSearchBox } from '../../components/FormikSearchBox/FormikSearchBox';
import { useDispatch } from 'react-redux';
import { getContactsOper } from '../../redux/contacts/operations';
export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsOper());
  }, [dispatch]);
  return (
    <div>
      <FormikSearchBox />
      <FormikContactForm />
      <FormikContactList />
    </div>
  );
};
