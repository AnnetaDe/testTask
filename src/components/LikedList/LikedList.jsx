import { useSelector } from 'react-redux';
import { CarItem } from '../CarItem/CarItem';
import { selectLiked } from '../../redux/filter/filterSelectors.js';
import { IoCarSportOutline } from 'react-icons/io5';

import s from './LikedList.module.css';

export const LikedList = () => {
  const cars = useSelector(selectLiked);

  return cars.length === 0 ? (
    <div>
      <h2 className={s.noLiked}>Nothing here yet!</h2>
      <a className={s.linkToCatalog} href="/catalog">
        Discover our <IoCarSportOutline height={36} />
      </a>
    </div>
  ) : (
    <div>
      <ul className={s.likedList}>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};
