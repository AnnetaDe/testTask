import { useSelector } from 'react-redux';
import { selectDaily } from '../../redux/filter/filterSelectors';
import s from './DailyPicksList.module.css';

export const DailyPicksList = () => {
  const daily = useSelector(selectDaily);

  return (
    <div className={s.dailyPicksContainer}>
      <h2 className={s.title}>Daily deals</h2>
      <ul className={s.dailyList}>
        {daily.map(({ id, make, model, img, rentalCompany }) => (
          <li className={s.dailyItem} key={id}>
            <img className={s.dailyImg} src={img} alt={rentalCompany} />{' '}
            <div className={s.overlay}>
              <div className={s.overlayCont}>
                <h3 className={s.make}>
                  {make} {model}
                </h3>
                <p className={s.rentalCompany}>{rentalCompany}</p>
                <button className={s.btn}>
                  <a href={'tel:+380730000000'}>Call now</a>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
