import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import s from './SearchPanel.module.css';
import { selectAllCars } from '../../redux/filter/filterSelectors';
import {
  setBrandFilter,
  setFromFilter,
  setPriceFilter,
  setToFilter,
} from '../../redux/filter/filtersSlice';
import { formatMakes, formatMileage, formatPrice, unic } from '../../helpers';
import { from, searchPanelStyles, to } from './searchPanelStyles';
import { useState } from 'react';

export const SearchPanel = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const [kmFrom, setKmFrom] = useState('');
  const [kmTo, setKmTo] = useState('');

  const makes = cars.map(car => ({ value: car.make, label: car.make }));

  const unicMake = unic(formatMakes(cars), 'value');
  const unicPrice = unic(formatPrice(cars), 'value');
  const unicMileage = unic(formatMileage(cars), 'value');

  unicPrice.unshift({ value: '', label: 'All prices' });
  unicMileage.unshift({ value: '', label: 'All Mileage' });
  unicMake.unshift({ value: '', label: 'All brands' });

  console.log('makes', makes);
  return (
    <div className={s.searchPanel}>
      <div>
        <label htmlFor="brand">Car brand</label>
        <Select
          inputId="brand"
          classNames={s.select}
          styles={searchPanelStyles}
          className={s.select}
          options={unicMake}
          onChange={option => dispatch(setBrandFilter(option.value))}
          isSearchable={true}
          placeholder="Search by brand"
        />
      </div>
      <div>
        <label htmlFor="price">Price/ 1 hour</label>
        <Select
          inputId="price"
          classNames={s.select}
          styles={searchPanelStyles}
          options={unicPrice}
          onChange={option => dispatch(setPriceFilter(option.value))}
          isSearchable={true}
          placeholder="Search by price"
        />
      </div>
      <div className={s.fromTo}>
        <div>
          <label htmlFor="from">Сar mileage / km</label>
          <div className={s.fromToSelectors}>
            <Select
              inputId="from"
              classNames={s.selectFrom}
              styles={from}
              options={unicMileage}
              onChange={option => dispatch(setFromFilter(option.value)) | setKmFrom(option.value)}
              placeholder="From"
              controlShouldRenderValue={true}
              isOptionDisabled={option =>
                option.value >= kmTo && option.value !== '' && kmTo !== ''
              }
              isSearchable={true}
            />

            <Select
              classNames={s.selectTo}
              styles={to}
              options={unicMileage}
              onChange={option => dispatch(setToFilter(option.value)) | setKmTo(option.value)}
              placeholder="To"
              isOptionDisabled={option => option.value <= kmFrom && option.value !== ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
