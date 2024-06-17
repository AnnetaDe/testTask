import { useDispatch, useSelector } from 'react-redux';
import { selectDaily } from '../../redux/filter/filterSelectors';

export const DailyPicksList = () => {
  const dispatch = useDispatch();
  const daily = useSelector(selectDaily);
  console.log('daily', daily);
  return (
    <div>
      DailyPicksList
      <ul>
        {daily.map(({ id, make, model }) => (
          <li key={id}>
            {make} {model}
          </li>
        ))}
      </ul>
    </div>
  );
};
