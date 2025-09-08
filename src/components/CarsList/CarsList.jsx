import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/cars/operations';
import { loadMore } from '../../redux/cars/slice';
import { selectFilteredCars } from '../../redux/filter/filterSelectors';
import { CarItem } from '../CarItem/CarItem';
import { TransparentButton } from '../RedButton/TranspButton';
export const CarsList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilteredCars);
  const currentPage = useSelector(state => state.cars.currentPage);
  const perPage = useSelector(state => state.cars.perPage);
  const total = useSelector(state => state.cars.total);
  const isLoading = useSelector(state => state.cars.isLoading);
  const isError = useSelector(state => state.cars.isError);
  const randomKey = () => Math.random().toString(36).substring(2, 15);
  const handleLearnMore = car => {
    console.log('Learn more about', car);
  };
  return (
    <div className="">
      <ul className="flex flex-col gap-8 mb-10">
        {filtered.map(car => (
          <CarItem key={randomKey()} car={car} onClick={() => handleLearnMore(car)} />
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching cars.</p>}

      <TransparentButton
        className=""
        onClick={() => {
          dispatch(loadMore());
          dispatch(getAll({ page: currentPage, limit: perPage }));
        }}
        text="Load More"
      />
    </div>
  );
};
