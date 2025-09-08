import { debounce } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { setLocationFilter } from '../../redux/filter/filtersSlice';
export const SearchPanel = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const debouncedDispatch = useMemo(
    () => debounce(q => dispatch(setLocationFilter(q)), 300),
    [dispatch]
  );
  useEffect(() => () => debouncedDispatch.cancel(), [debouncedDispatch]);

  const onChange = e => {
    const q = e.target.value;
    setValue(q); // update UI immediately
    debouncedDispatch(q); // debounce store update
  };
  const randomKey = () => Math.random().toString(36).substring(2, 15);

  return (
    <div className="mb-10 relative w-full max-w-[360px]" key={randomKey()}>
      <label htmlFor="location" className="block mb-2">
        Location{' '}
      </label>
      <div className="relative">
        <input
          id="location"
          type="text"
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border border-g3 bg-g3 py-2 pl-3 pr-10 text-sm  placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Type location"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          aria-label="Use current location"
        >
          <GrMapLocation size={20} />
        </button>
      </div>
    </div>
  );
};
