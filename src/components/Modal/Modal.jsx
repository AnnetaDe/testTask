import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModalContent } from '../../redux/cars/modalSlice';
import s from './Modal.module.css';
import { cityCountry } from '../../helpers';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectModalContent);

  const close = () => {
    dispatch(closeModal());
  };
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  const handleCloseBtnClick = () => {
    close();
  };
  return (
    <div className={s.backDrop} onClick={handleBackDropClick}>
      <div className={s.modal}>
        <button className={s.modalCloseBtn} onClick={handleCloseBtnClick}>
          &times;
        </button>
        <div className={s.imgContainer}>
          <img className={s.carImg} src={car.img} alt={car.rentalCompany} />
        </div>
        <div className={s.line1}>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
        </div>

        <div className={s.line2}>
          <p>{cityCountry(car.address)}</p> <span>{'|'}</span>
          <p>Id: {car.id}</p>
          <span>{'|'}</span>
          <p>Year: {car.year}</p>
          <span>{'|'}</span>
          <p>Type: {car.type}</p>
          <span>{'|'}</span>
          <p>Engine Size: {car.engineSize} </p>
        </div>
        <div className={s.line3}>
          <p>{car.description}</p>
        </div>
        <p className={s.accessories}>Accessories and functionalities:</p>
        <ul className={s.functionalitiesList}>
          {car.functionalities.map((item, index) => (
            <li key={index}>
              {item}
              {' | '}
            </li>
          ))}
          {car.accessories.map((item, index) => (
            <li key={index}>
              {item}
              {' | '}
            </li>
          ))}
        </ul>
        <p className={s.conditionsTitle}>Rental Conditions</p>
        <ul className={s.conditionsList}>
          {car.rentalConditions.split('\n').map((condition, index) => (
            <li key={index}>
              {condition.split(':').map((part, index) => (
                <span key={index}>
                  {index === 0 ? (
                    <span>{part}</span>
                  ) : (
                    <>
                      <span>{': '}</span>
                      <span style={{ color: '#3470FF' }}>{part}</span>
                    </>
                  )}
                </span>
              ))}
            </li>
          ))}
          <li>
            Mileage: <span style={{ color: '#3470FF' }}>{car.mileage}</span>
          </li>
          <li>
            Price: <span style={{ color: '#3470FF' }}> {car.rentalPrice}</span>
          </li>
        </ul>
        <button className={s.rentBtn}>
          <a href={'tel:+380730000000'}>Rent this car</a>
        </button>
      </div>
    </div>
  );
};
