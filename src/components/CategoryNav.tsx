import { CategoryButton } from './CategoryButton';
import type { Category } from './types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryNav = ({ categories, activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="container py-4">
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.label}
            isActive={activeCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          />
        ))}
      </div>
    </nav>
  );
};
