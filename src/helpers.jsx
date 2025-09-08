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

/* whitelist (lowercase keys in your car object) */
export const PICK = [
  'automatic',
  'ac',
  'petrol',
  'radio',
  'bathroom',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];

/* id -> label + Icon */
export const FEATURE = {
  automatic: { label: 'Automatic', Icon: TbAutomaticGearbox },
  ac: { label: 'AC', Icon: TbAirConditioning },
  petrol: { label: 'Petrol', Icon: TbGasStation },
  radio: { label: 'Radio', Icon: MdRadio },
  bathroom: { label: 'Bathroom', Icon: MdBathroom },
  refrigerator: { label: 'Refrigerator', Icon: TbFridge },
  microwave: { label: 'Microwave', Icon: TbMicrowave },
  gas: { label: 'Gas', Icon: TbFlame },
  water: { label: 'Water', Icon: TbDroplet },
};

export const handleCategory = car => PICK.filter(k => !!car?.[k]);
