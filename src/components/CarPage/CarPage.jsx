import { BsStarFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { handleCategory } from '../../helpers';
import { CategoriesList } from '../Categories/CategoriesList';
import { Container } from '../Container/Container';
import { BookingCard } from './BookingForm';
import { Details } from './Details';
import { Reviews } from './Revievs';
import { Tabs } from './Tabs';

export const CarPage = () => {
  const dispatch = useDispatch();

  const { carId: id } = useParams();
  const location = useLocation();
  const car = location.state; // passed car object

  const picked = handleCategory(car);

  const gallery = car.gallery.map(img => img.original);
  const randomKey = () => Math.random().toString(36).substring(2, 15);
  return (
    <section className=" py-14 h-full bg-white">
      <Container className=" py-14 flex flex-col gap-10 px-16">
        <div className="flex flex-col justify-start mb-[28px] ">
          <p className="text-2xl font-semibold"> {car.name}</p>
          <div className="flex items-center gap-4 my-4 ">
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
          </div>{' '}
          <p className="text-2xl font-semibold">€{car.price}</p>{' '}
        </div>
        <ul className="flex flex-wrap gap-4 ">
          {car.gallery.map((img, i) => (
            <li key={randomKey()}>
              <div className="relative h-[312px] w-[292px] overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.thumb}
                  alt={`${car.name} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-full  ">
          <div className="my-6 line-clamp-1">
            <p className=" text-dark-grey">{car.description}</p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1 min-w-0">
              <Tabs
                tabs={[
                  { label: 'Features', content: <CategoriesList categories={picked} /> },
                  { label: 'Details', content: <Details car={car} /> },
                  { label: 'Reviews', content: <Reviews car={car} /> },
                ]}
              />
            </div>
            <aside className="shrink-0 w-full mt-10 md:min-w-[340px] md:max-w-[420px]">
              <BookingCard />
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
};
