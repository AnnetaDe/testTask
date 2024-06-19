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
import { useLocation } from 'react-router-dom';

export const CarsList = () => {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);
  const moreToLoad = useSelector(selectMoreToLoad);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const location = useLocation();

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.carListWrapper}>
      <ul className={s.carsList}>
        {filteredCars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
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
