import { MdBathroom, MdRadio } from 'react-icons/md';
import {
  TbAirConditioning,
  TbAutomaticGearbox,
  TbDroplet,
  TbFlame,
  TbFridge,
  TbGasStation,
  TbMicrowave,
} from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { selectEquipmentFilter, selectTypeFilter } from '../../redux/filter/filterSelectors';
import { setEquipmentFilter, setFormFilter } from '../../redux/filter/filtersSlice';

const cnf = [
  { icon: <TbAutomaticGearbox size={20} />, catName: 'Automatic' },
  { icon: <TbAirConditioning size={20} />, catName: 'AC' },
  { icon: <TbGasStation size={20} />, catName: 'Petrol' },

  { icon: <MdRadio size={20} />, catName: 'Radio' },
  { icon: <MdBathroom size={20} />, catName: 'Bathroom' },
  { icon: <TbFridge size={20} />, catName: 'Refrigerator' },
  { icon: <TbMicrowave size={20} />, catName: 'Microwave' },
  { icon: <TbFlame size={20} />, catName: 'Gas' },
  { icon: <TbDroplet size={20} />, catName: 'Water' },
];
const EQUIPMENT = [
  'AC',
  'Automatic',
  'Bathroom',
  'Radio',
  'Microwave',
  'Refrigerator',
  'Gas',
  'Water',
  'Petrol',
];
const VEHICLE_TYPES = ['Van', 'Fully Integrated', 'Alcove'];

export const Filters = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipmentFilter);

  const types = useSelector(selectTypeFilter);
  console.log('types', types);
  console.log('equipment', equipment);
  const toggleT = value => {
    types === value ? dispatch(setFormFilter('')) : dispatch(setFormFilter(value));
  };
  const toggleE = value => {
    dispatch(setEquipmentFilter(value));
    equipment.includes(value)
      ? dispatch(setEquipmentFilter(equipment.filter(item => item !== value)))
      : dispatch(setEquipmentFilter([...equipment, value]));
  };

  return (
    <div>
      {' '}
      <p className="">Filters</p>
      <div className="px-4 py-2">
        <h3 className="text-xl font-semibold mb-3">Vehicle equipment</h3>
        <Divider />
        <div className="grid grid-cols-3 gap-3 max-w-[360px]">
          {cnf.map(item => (
            <button
              key={item.catName}
              onClick={() => toggleE(item.catName)}
              className={`h-20 rounded-2xl border bg-white shadow-sm flex flex-col items-center justify-center text-sm
  ${
    equipment.includes(item.catName)
      ? 'border-hover-red hover:border-hover-red '
      : 'border-gray-200 hover:border-gray-300'
  }`}
            >
              <span className="mb-1 text-2xl">{item.icon}</span>
              <span className="text-gray-800 text-[13px]">{item.catName}</span>
            </button>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Vehicle type</h3>
        <Divider />
        <div className="grid grid-cols-3 gap-3 max-w-[360px]">
          {VEHICLE_TYPES.map(item => (
            <button
              key={item}
              onClick={() => toggleT(item)}
              className={`h-20 rounded-2xl border bg-white shadow-sm flex flex-col items-center justify-center text-sm ${
                types === item
                  ? 'border-rose-500 ring-2 ring-rose-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="mb-1 text-2xl">▦</span>
              <span className="text-gray-800 text-[13px]">{item}</span>
            </button>
          ))}
        </div>

        <button
          className={`mt-6 w-[240px] h-12 rounded-full mx-auto block text-white font-semibold ${
            equipment.length || types
              ? 'bg-rose-500 hover:bg-rose-600'
              : 'bg-rose-300 cursor-not-allowed'
          }`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

const Divider = () => <div className="h-px w-full bg-gray-200 my-3" />;
