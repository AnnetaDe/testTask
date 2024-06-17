import { useSelector } from 'react-redux';
import { CarItem } from '../CarItem/CarItem';
import { selectLiked } from '../../redux/filter/filterSelectors.js';
import s from './LikedList.module.css';

export const LikedList = () => {
  const cars = useSelector(selectLiked);
  return (
    <div>
      <ul className={s.likedList}>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};
