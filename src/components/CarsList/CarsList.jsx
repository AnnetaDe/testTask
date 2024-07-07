import { useDispatch, useSelector } from 'react-redux';
import { CarItem } from '../CarItem/CarItem';
import { loadMore } from '../../redux/cars/slice';
import s from './CarsList.module.css';
import {
  selectFilteredCars,
  selectMoreToLoad,
  selectIsLoading,
  selectIsError,
} from '../../redux/filter/filterSelectors';
import { Loader } from '../Loader/Loader';
import { openModal, selectIsOpen, setModalContent } from '../../redux/cars/modalSlice';
import { Modal } from '../Modal/Modal';
import { createPortal } from 'react-dom';

export const CarsList = () => {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);
  const moreToLoad = useSelector(selectMoreToLoad);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const openedModal = useSelector(selectIsOpen);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };
  const handleLearnMore = car => {
    dispatch(setModalContent(car));
    dispatch(openModal());
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.carListWrapper}>
      <ul className={s.carsList}>
        {filteredCars.map(car => (
          <CarItem key={car.id} car={car} onClick={() => handleLearnMore(car)} />
        ))}
      </ul>
      {openedModal && createPortal(<Modal />, document.body)}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching cars.</p>}

      {!isLoading && !isError && moreToLoad && filteredCars.length >= 12 && (
        <button className={s.loadMoreBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
