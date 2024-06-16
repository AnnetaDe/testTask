import { useDispatch, useSelector } from 'react-redux';
import { CarItem } from '../CarItem/CarItem';
import { loadMore } from '../../redux/cars/slice';
import s from './CarsList.module.css';
import {
  selectFilteredCars,
  selectAllCars,
  selectCurrentPage,
  selectPerPage,
  selectMoreToLoad,
  selectIsLoading,
  selectIsError,
} from '../../redux/filter/filterSelectors';

export const CarsList = () => {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);
  const perPage = useSelector(selectPerPage);
  const currentPage = useSelector(selectCurrentPage);
  const moreToLoad = useSelector(selectMoreToLoad);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const allCars = useSelector(selectAllCars);
  console.log('allCars', allCars), console.log('filteredCars', filteredCars);
  console.log('perPage', perPage), console.log('currentPage', currentPage);
  console.log('moreToLoad', moreToLoad);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div>
      <ul className={s.carsList}>
        {filteredCars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching cars.</p>}
      {!isLoading && !isError && moreToLoad && (
        <button className={s.loadMoreBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
