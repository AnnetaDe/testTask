import { useDispatch } from 'react-redux';
import s from './FormikContact.module.css';
import { deleteContactsOper } from '../../redux/contacts/operations';

export const FormikContact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactFormik}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>

      <div className={s.buttonsAll}>
        <button
          className={s.formikLiBtn}
          onClick={() => {
            dispatch(deleteContactsOper(id));
          }}
        >
          delete
        </button>
        {/* <button
          onClick={() => {
            dispatch(changeContactsOper(id));
          }}
        >
          change
        </button> */}
      </div>
    </li>
  );
};
