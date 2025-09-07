import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredCars,
  selectIsError,
  selectIsLoading,
  selectMoreToLoad,
} from '../../redux/filter/filterSelectors';
import { CarItem } from '../CarItem/CarItem';

export const CarsList = () => {
  const dispatch = useDispatch();
  const { filteredCars, isLoading, isError, moreToLoad, openedModal } = useSelector(state => ({
    filteredCars: selectFilteredCars(state),
    isLoading: selectIsLoading(state),
    isError: selectIsError(state),
    moreToLoad: selectMoreToLoad(state),
  }));

  console.log(filteredCars);

  return (
    <div className="">
      <ul className="">
        {filteredCars.map(car => (
          <CarItem key={car.id} car={car} onClick={() => handleLearnMore(car)} />
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching cars.</p>}

      {!isLoading && !isError && moreToLoad && filteredCars.length >= 12 && (
        <button className="" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
