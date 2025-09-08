import { BsFillHeartFill, BsHeart, BsStarFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { likeCar } from '../../redux/cars/slice';
import { selectLikedCars } from '../../redux/filter/filterSelectors';
import { CategoriesList } from '../Categories/CategoriesList';
import { RedButton } from '../RedButton/RedButtonBtn';

export const CarItem = ({ car, onClick }) => {
  const dispatch = useDispatch();
  const liked = useSelector(selectLikedCars);
  const navigate = useNavigate();

  const handleLike = car => {
    dispatch(likeCar(car));
  };
  const toPickFrom = [
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
  const handleCategory = car => {
    // Handle category selection
    const pickedCategory = [];
    for (const [key, value] of Object.entries(car)) {
      if (toPickFrom.includes(key) && value) {
        pickedCategory.push(key);
      }
    }
    return pickedCategory;
  };
  const pickedCategory = handleCategory(car);

  const isLiked = car => liked.some(item => item.id === car.id);

  return (
    <li className="p-6 border border-g1 rounded-4xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/cars/${car.id}`} state={car} className="block">
        <div className=" flex gap-6 cursor-pointer" onClick={onClick}>
          <div className="relative h-[320px] w-[292px] overflow-hidden rounded-lg shadow-md">
            <img
              src={car.gallery[0].thumb}
              alt={car.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col w-full  ">
            <div className="flex items-center justify-between ">
              <p className="text-2xl font-semibold"> {car.name}</p>
              <div className="flex items-center justify-end gap-2">
                <p className="text-2xl font-semibold">€{car.price}</p>
                <button onClick={() => handleLike(car)} className="transition-colors duration-200">
                  {isLiked(car) ? (
                    <BsFillHeartFill
                      size={24}
                      className="text-hover-red transition-transform duration-200"
                    />
                  ) : (
                    <BsHeart size={24} className="text-dark-grey hover:text-hover-red" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2 ">
              <div className="flex items-center justify-start gap-1">
                <span>
                  <BsStarFill color="#FFC531" />
                </span>{' '}
                <p className="">
                  {car.reviews.reduce((acc, review) => acc + review.reviewer_rating, 0) /
                    car.reviews.length}{' '}
                  ({car.reviews.length} reviews)
                </p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <span>
                  <GrMapLocation />
                </span>
                <p>{car.location}</p>
              </div>
            </div>
            <div className="my-6 line-clamp-1">
              <p className=" text-dark-grey">{car.description}</p>
            </div>
            <div className="mb-6">
              <CategoriesList categories={pickedCategory} />
            </div>
            <RedButton text="Learn More" onClick={() => navigate(`/cars/${car.id}`)} />
          </div>
        </div>
      </Link>
    </li>
  );
};
