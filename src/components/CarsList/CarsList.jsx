import { useDispatch, useSelector } from 'react-redux';
import { CarItem } from '../CarItem/CarItem';
import {
  loadMore,
  selectCars,
  selectIsLoading,
  selectIsError,
  selectMoreToLoad,
} from '../../redux/cars/slice';
import s from './CarsList.module.css';
import { Modal } from '../Modal/Modal';
import { selectIsOpen } from '../../redux/cars/modalSlice';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const moreToLoad = useSelector(selectMoreToLoad);
  const openedModal = useSelector(selectIsOpen);


  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div>
      <ul className={s.carsList}>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching cars.</p>}
      {!isLoading && !isError && moreToLoad && <button className={s.loadMoreBtn} onClick={handleLoadMore}>Load More</button>}
      {!moreToLoad && <p>No more cars to load.</p>}
      {/* {<Modal />} */}
      {openedModal && <Modal />}
      
    </div>
  );
};
