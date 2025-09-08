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

export const toPickFrom = [
  'automatic',
  'AC',
  'petrol',
  'radio',
  'bathroom',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];
export const handleCategory = car => {
  const pickedCategory = [];
  for (const [key, value] of Object.entries(car)) {
    if (toPickFrom.includes(key) && value) {
      pickedCategory.push(key);
    }
  }
  return pickedCategory;
};

export const cnf = [
  { icon: <TbAutomaticGearbox />, catName: 'Automatic' },
  { icon: <TbAirConditioning />, catName: 'AC' },
  { icon: <TbGasStation />, catName: 'Petrol' },
  { icon: <MdRadio />, catName: 'Radio' },
  { icon: <MdBathroom />, catName: 'Bathroom' },
  { icon: <TbFridge />, catName: 'Refrigerator' },
  { icon: <TbMicrowave />, catName: 'Microwave' },
  { icon: <TbFlame />, catName: 'Gas' },
  { icon: <TbDroplet />, catName: 'Water' },
];
