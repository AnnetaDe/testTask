import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './SearchPanel.module.css';

export const SearchPanel = () => {
  const dispatch = useDispatch();
  const [kmFrom, setKmFrom] = useState('');
  const [kmTo, setKmTo] = useState('');

  // const unicMake = unic(formatMakes(cars), 'value');
  // const unicPrice = unic(formatPrice(cars), 'value');
  // const unicMileage = unic(formatMileage(cars), 'value');

  // unicPrice.unshift({ value: '', label: 'All prices' });
  // unicMileage.unshift({ value: '', label: 'All Mileage' });
  // unicMake.unshift({ value: '', label: 'All brands' });
  const options = {
    brand: ['bmw', 'audi'],
    price: [10, 20, 30, 40, 50],
    mileage: [...Array.from({ length: 21 }, (_, i) => i * 10)],
  };
  return <div className={s.searchPanel}>filters</div>;
};
