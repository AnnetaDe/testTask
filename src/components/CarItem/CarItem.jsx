import { useDispatch, useSelector } from 'react-redux';
import s from './CarItem.module.css';
import { likeCar } from '../../redux/cars/slice';
import { IoMdHeart } from 'react-icons/io';
import { setModalContent, openModal, selectIsOpen } from '../../redux/cars/modalSlice';
import { Modal } from '../Modal/Modal';
import { cityCountry } from '../../helpers';
import { createPortal } from 'react-dom';

export const CarItem = ({ car, onClick }) => {
  const dispatch = useDispatch();
  const liked = useSelector(state => state.cars.liked);

  const handleLike = car => {
    dispatch(likeCar(car));
  };

  return (
    <div className={s.itemContainer}>
      <li className={s.carItem}>
        <div className={s.imgContainer}>
          <img className={s.carImg} src={car.img} alt={car.rentalCompany} height={274} />
        </div>
        <div className={s.texContainer}>
          <div className={s.line1}>
            <p>{car.make}</p>
            <p className={s.model}>{car.model}</p>
            <p>{car.year}</p>
            <p className={s.price}> {car.rentalPrice}</p>
          </div>

          <div className={s.line2}>
            <p>{cityCountry(car.address)} | </p>
            <p>{car.rentalCompany} | </p>
          </div>
          <div className={s.line3}>
            <p> {car.type} |</p>
            <p> {car.make} |</p>
            <p> {car.mileage} </p>
          </div>
        </div>
        <button className={s.likeBtn} onClick={() => handleLike(car)}>
          <IoMdHeart
            style={{
              color: liked.find(item => item.id === car.id) ? 'blue' : 'white',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          />
        </button>
        <button className={s.learnBtn} onClick={onClick}>
          Learn more
        </button>
      </li>
    </div>
  );
};
