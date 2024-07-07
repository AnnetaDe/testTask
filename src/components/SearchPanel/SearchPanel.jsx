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

  const unicMake = unic(formatMakes(cars), 'value');
  const unicPrice = unic(formatPrice(cars), 'value');
  const unicMileage = unic(formatMileage(cars), 'value');

  unicPrice.unshift({ value: '', label: 'All prices' });
  unicMileage.unshift({ value: '', label: 'All Mileage' });
  unicMake.unshift({ value: '', label: 'All brands' });

  return (
    <div className={s.searchPanel}>
      <div>
        <label className={s.label} htmlFor="brand">
          Car brand
        </label>
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
        <label className={s.label} htmlFor="price">
          Price/ 1 hour
        </label>
        <Select
          classNames={s.select}
          inputId="price"
          styles={searchPanelStyles}
          options={unicPrice}
          onChange={option => dispatch(setPriceFilter(option.value))}
          isSearchable={true}
          placeholder="Price up to"
        />
      </div>
      <div className={s.fromTo}>
        <div>
          <label className={s.label} htmlFor="from">
            Сar mileage / km
          </label>
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
