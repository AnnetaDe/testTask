import { CategoryBadge } from './CategoryBadge';
export const CategoriesList = categoriesList => {
  return (
    <ul className="flex flex-wrap gap-2">
      {categoriesList.categories.map((category, index) => {
        return <CategoryBadge name={category} key={index} />;
      })}
    </ul>
  );
};

export default CategoriesList;
