import { CarsList } from '../../components/CarsList/CarsList';
import { Filters } from '../../components/Filters/Filters';
import { SearchPanel } from '../../components/SearchPanel/SearchPanel';

export const Catalog = () => {
  return (
    <div className=" flex gap-10 px-16">
      <div>
        <SearchPanel />
        <Filters />
      </div>
      <CarsList />
    </div>
  );
};
