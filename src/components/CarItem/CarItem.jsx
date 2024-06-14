import { useDispatch, useSelector } from 'react-redux';
import s from './CarItem.module.css';
import { likeCar } from '../../redux/cars/slice';
import { IoMdHeart  } from "react-icons/io";
import { setModalContent, openModal, selectIsOpen, selectModalContent } from '../../redux/cars/modalSlice';
import { Modal } from '../Modal/Modal';


export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const liked = useSelector(state => state.cars.liked);
  const openedModal = useSelector(selectIsOpen);

  const handleLike = car => {
    dispatch(likeCar(car));
  };
  const handleLearnMore = () => {
    dispatch(setModalContent(car));
        dispatch(openModal());
      console.log('car', car);
      console.log('content', content);
      
  }
  const content= useSelector(selectModalContent);

  return (
    <div className={s.itemContainer}>
    <li className={s.carItem}>
      <div className={s.imgContainer}>
        <img className={s.carImg} src={car.img} alt={car.rentalCompany} />
      </div>
      <div className={s.line1}>
        <p>{car.make}</p>
        <p>{car.model}</p>
        <p>{car.year}</p>
        <p> {car.rentalPrice}</p>
      </div>

      <div className={s.line2}>
        <p>{car.address}</p>
        <p>{car.rentalCompany}</p>
      </div>
      <div className={s.line3}>
        <p> {car.type}</p>
        <p> {car.make}</p>
        <p> {car.mileage}</p>
        <p>{car.functionalities[0]}</p>
      </div>
      <button
        className={s.likeBtn}
        onClick={() => handleLike(car)}
       
      ><IoMdHeart  style={{ color: liked.find(item => item.id === car.id) ? 'blue' : 'white',
      fontSize: '18px',
      cursor: 'pointer'
        
       
        }}  /></button>

      <button className={s.loadBtn} onClick={handleLearnMore}>Learn more</button>
    </li>
    {openedModal && (
  <Modal/>
)}

    </div>
  );
};
