import { CarsList } from '../../components/CarsList/CarsList';
import { SearchPanel } from '../../components/SearchPanel/SearchPanel';

export const Catalog = () => {
  return (
    <div>
      <SearchPanel />
      <CarsList />
    </div>
  );
};
