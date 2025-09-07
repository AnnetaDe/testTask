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
export const CategoryBadge = ({ name, key }) => {
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
  const selectedCategory = cnf.find(item => item.catName.toLowerCase() === name.toLowerCase());

  return (
    <li key={key}>
      <div className="flex items-center h-11 bg-g2 rounded-[100px] px-3 w-full">
        <span className="h-6 w-6">{selectedCategory?.icon}</span>
        <p className="ml-auto ">{selectedCategory ? selectedCategory.catName : name}</p>
      </div>
    </li>
  );
};
