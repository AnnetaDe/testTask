import { CategoryBadge } from './CategoryBadge';

export const CategoriesList = categoriesList => {
  const randomKey = () => Math.random().toString(36).substring(2, 15);
  return (
    <ul className="flex flex-wrap gap-2">
      {categoriesList.categories.map(element => (
        <li key={randomKey()}>
          <CategoryBadge name={element} />
        </li>
      ))}
    </ul>
  );
};
